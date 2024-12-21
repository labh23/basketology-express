import Amadeus from 'amadeus';

const clientId = import.meta.env.VITE_AMADEUS_CLIENT_ID;
const clientSecret = import.meta.env.VITE_AMADEUS_CLIENT_SECRET;

if (!clientId || !clientSecret) {
  console.error('Missing Amadeus API credentials. Please set VITE_AMADEUS_CLIENT_ID and VITE_AMADEUS_CLIENT_SECRET environment variables.');
}

const amadeus = new Amadeus({
  clientId,
  clientSecret,
  hostname: 'test' // Use the test environment
});

export interface FlightOffer {
  id: string;
  airline: string;
  departure: string;
  arrival: string;
  price: number;
  duration: string;
  departureTime: string;
  arrivalTime: string;
}

export const searchFlights = async (
  origin: string,
  destination: string,
  departureDate: string
): Promise<FlightOffer[]> => {
  try {
    const response = await amadeus.shopping.flightOffersSearch.get({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: departureDate,
      adults: '1',
      max: 5
    });

    return response.data.map((offer: any) => ({
      id: offer.id,
      airline: offer.validatingAirlineCodes[0],
      departure: offer.itineraries[0].segments[0].departure.iataCode,
      arrival: offer.itineraries[0].segments[0].arrival.iataCode,
      price: parseFloat(offer.price.total),
      duration: offer.itineraries[0].duration,
      departureTime: offer.itineraries[0].segments[0].departure.at,
      arrivalTime: offer.itineraries[0].segments[0].arrival.at
    }));
  } catch (error) {
    console.error('Error searching flights:', error);
    throw error;
  }
};