import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Star,
  Clock,
  DollarSign,
  CheckCircle,
  BookMarked,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLoaderData } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import GetUser from "../../lib/GetUser";
import { toast } from "react-toastify";
// import { useToast } from "@/components/ui/use-toast"; // For booking confirmation

// Mock tutor data - in a real app, this would be fetched

// Mock reviews
const mockReviews = [
  {
    id: "r1",
    userName: "Alice",
    userImage: "/placeholder.svg?width=40&height=40&text=A",
    rating: 5,
    comment: "Elena is an amazing tutor! Very patient and knowledgeable.",
    date: "2 weeks ago",
  },
  {
    id: "r2",
    userName: "Bob",
    userImage: "/placeholder.svg?width=40&height=40&text=B",
    rating: 4,
    comment:
      "Great lessons, I've learned a lot. Sometimes scheduling can be tricky.",
    date: "1 month ago",
  },
];

export default function TutorDetailsPage() {
  //   const params = useParams();
  //   const { tutorId } = params;
  const [tutor, setTutor] = useState({});
  //   const { toast } = useToast();

  const { id } = useLoaderData();
  console.log(tutor);

  useEffect(() => {
    axios
      .get(`https://lingualearnsever.vercel.app/tutor/${id}`)
      .then((data) => setTutor(data.data))
      .catch((err) => console.log(err));

    return () => {
      setTutor({});
    };
  }, [id]);

  if (!tutor) {
    return (
      <div className="container mx-auto py-12 text-center">
        Tutor not found.
      </div>
    );
  }

  const { user } = GetUser();

  const handleBookNow = async () => {
    // Simulate booking
    console.log(`Booking tutor ${tutor?.name}`); 
    const responce = await axios.post(`https://lingualearnsever.vercel.app/book`, {
      ...tutor, 
      tutorId : tutor._id,
      userEmail: user.email,
    });
    console.log("responce");
    console.log(responce);
    if (responce.data) {
      toast.success("Booking Successfull!", {
        theme: "dark",
      });
    } else {
      toast.error("Something Wrong try again!", {
        theme: "dark",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Tutor Image and Basic Info */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg">
              <CardHeader className="p-0">
                <img
                  src={tutor.image || "/placeholder.svg"}
                  alt={tutor.name}
                  width={400}
                  height={300}
                  className="w-full h-auto rounded-t-lg object-cover"
                />
              </CardHeader>
              <CardContent className="p-6 text-center">
                <CardTitle className="text-3xl font-bold">
                  {tutor.name}
                </CardTitle>
                <p className="text-xl text-primary font-medium mt-1">
                  {tutor.language} Tutor
                </p>
                <div className="flex items-center justify-center gap-2 text-muted-foreground mt-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span>5 ({tutor.reviews} reviews)</span>
                </div>
                <Button
                  size="lg"
                  className="w-full mt-6"
                  onClick={handleBookNow}
                >
                  <BookMarked className="mr-2 h-5 w-5" /> Book Now ($
                  {tutor.price}/hour)
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Tutor Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span>
                    <strong>Price:</strong> ${tutor.price} / hour
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>
                    <strong>Availability:</strong> {tutor.availability}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>
                    <strong>Location:</strong> {tutor.location}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Detailed Info and Reviews */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">About {tutor.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {tutor.description}
                </p>
                {tutor.specialties && tutor.specialties.length > 0 && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold mb-3">
                      Specializes in:
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {tutor.specialties.map((spec) => (
                        <li
                          key={spec}
                          className="flex items-center gap-2 text-muted-foreground"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500" />{" "}
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Student Reviews ({mockReviews.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {mockReviews.map((review) => (
                  <motion.div
                    key={review.id}
                    className="border-b pb-4 last:border-b-0 last:pb-0"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage
                          src={review.userImage || "/placeholder.svg"}
                          alt={review.userName}
                        />
                        <AvatarFallback>
                          {review.userName.substring(0, 1)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{review.userName}</h4>
                          <span className="text-xs text-muted-foreground">
                            {review.date}
                          </span>
                        </div>
                        <div className="flex items-center my-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {review.comment}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
                <Button variant="outline" className="w-full mt-4">
                  Load More Reviews
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
