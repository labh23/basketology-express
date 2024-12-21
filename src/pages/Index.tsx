import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Search, PlaneTakeoff as PlaneTakeoffIcon, PlaneLanding as PlaneLandingIcon } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import FlightCard from "@/components/FlightCard";
import { useQuery } from "@tanstack/react-query";
import { searchFlights, type FlightOffer } from "../services/flightService";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [origin, setOrigin] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [date, setDate] = useState<Date>();
  const [isSearching, setIsSearching] = useState(false);
  const { toast } = useToast();

  const { data: flights, refetch, isLoading } = useQuery({
    queryKey: ['flights', origin, destination, date],
    queryFn: () => searchFlights(
      origin,
      destination,
      date ? format(date, 'yyyy-MM-dd') : ''
    ),
    enabled: false,
  });

  const handleSearch = async () => {
    if (!origin || !destination || !date) {
      toast({
        title: "Missing Information",
        description: "Please fill in all search fields",
        variant: "destructive",
      });
      return;
    }

    setIsSearching(true);
    try {
      await refetch();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to search flights. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <div className="relative h-[500px] bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Find Your Perfect Flight</h1>
          <p className="text-xl mb-8">Discover amazing deals on flights worldwide</p>
        </div>
      </div>

      {/* Search Form */}
      <div className="max-w-6xl mx-auto -mt-24 px-4">
        <div className="bg-white rounded-xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">From</label>
            <Input 
              placeholder="Airport code (e.g., JFK)" 
              value={origin}
              onChange={(e) => setOrigin(e.target.value.toUpperCase())}
              maxLength={3}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">To</label>
            <Input 
              placeholder="Airport code (e.g., LHR)"
              value={destination}
              onChange={(e) => setDestination(e.target.value.toUpperCase())}
              maxLength={3}
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Departure Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-end">
            <Button 
              onClick={handleSearch} 
              className="w-full" 
              disabled={isLoading}
            >
              {isLoading ? "Searching..." : (
                <>
                  <Search className="mr-2 h-4 w-4" /> Search Flights
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Search Results */}
      {isSearching && (
        <div className="max-w-6xl mx-auto mt-12 px-4 space-y-6">
          <h2 className="text-2xl font-semibold">Available Flights</h2>
          {isLoading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="mt-4 text-gray-600">Searching for the best flights...</p>
            </div>
          ) : flights && flights.length > 0 ? (
            <div className="space-y-4">
              {flights.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-600">No flights found for your search criteria.</p>
            </div>
          )}
        </div>
      )}

      {/* Features Section */}
      <div className="max-w-6xl mx-auto mt-24 px-4 mb-24">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <PlaneTakeoffIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
            <p className="text-gray-600">Find the most competitive prices for your flights</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <PlaneLandingIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our support team is always here to help you</p>
          </div>
          <div className="text-center p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CalendarIcon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Flexible Booking</h3>
            <p className="text-gray-600">Change your flight dates with ease</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
