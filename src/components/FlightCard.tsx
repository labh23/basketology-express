import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaneLanding as PlaneLandingIcon, PlaneTakeoff as PlaneTakeoffIcon } from "lucide-react";

interface FlightCardProps {
  flight: {
    airline: string;
    departure: string;
    arrival: string;
    price: number;
    duration: string;
    departureTime: string;
    arrivalTime: string;
  };
}

const FlightCard = ({ flight }: FlightCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
        <div>
          <p className="font-semibold text-lg">{flight.airline}</p>
          <p className="text-sm text-gray-500">Flight duration: {flight.duration}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <PlaneTakeoffIcon className="h-4 w-4 text-primary" />
            <div>
              <p className="font-medium">{flight.departureTime}</p>
              <p className="text-sm text-gray-500">{flight.departure}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <PlaneLandingIcon className="h-4 w-4 text-primary" />
            <div>
              <p className="font-medium">{flight.arrivalTime}</p>
              <p className="text-sm text-gray-500">{flight.arrival}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-3xl font-bold text-primary">${flight.price}</p>
          <p className="text-sm text-gray-500">per person</p>
        </div>

        <div>
          <Button className="w-full">Select Flight</Button>
        </div>
      </div>
    </Card>
  );
};

export default FlightCard;