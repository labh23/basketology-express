import { Star } from "lucide-react";

const REVIEWS = [
  {
    id: 1,
    name: "Priya Singh",
    rating: 5,
    comment: "Amazing service! The vegetables were fresh and delivery was on time.",
    date: "2 days ago",
  },
  {
    id: 2,
    name: "Rahul Kumar",
    rating: 4,
    comment: "Great quality products. Will definitely order again.",
    date: "1 week ago",
  },
  {
    id: 3,
    name: "Anita Patel",
    rating: 5,
    comment: "Best online grocery store. Very convenient and reliable.",
    date: "2 weeks ago",
  },
];

export const CustomerReviews = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < review.rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">{review.comment}</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{review.name}</span>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};