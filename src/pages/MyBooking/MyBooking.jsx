import { useEffect, useState } from "react";
import { Link } from "react-router";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Star, MessageSquare, CalendarCheck2, DollarSign } from "lucide-react";
import { motion } from "framer-motion";
import axios, { Axios } from "axios";
import { toast } from "react-toastify";

import Getuser from "../../lib/GetUser.js";

const mockBookedTutors = [
  {
    id: "1",
    tutorId: "1",
    name: "Elena Petrova",
    image: "/placeholder.svg?width=300&height=200&text=Elena",
    language: "Russian",
    price: 25,
    lastSession: "2024-05-10",
    status: "Completed",
    reviewGiven: false,
  },
  {
    id: "2",
    tutorId: "3",
    name: "Maria Rodriguez",
    image: "/placeholder.svg?width=300&height=200&text=Maria",
    language: "Spanish",
    price: 22,
    lastSession: "2024-06-01",
    status: "Upcoming",
    reviewGiven: true,
    existingReview: { rating: 5, comment: "Maria is fantastic!" },
  },
];

export default function MyBookedTutorsPage() {
  const [bookedTutors, setBookedTutors] = useState([]);
  const [selectedTutorForReview, setSelectedTutorForReview] = useState(null);
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState("");

  const { user } = Getuser();
  console.log(bookedTutors);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/userBooking/${user?.email}`)
      .then((data) => setBookedTutors(data.data.data))
      .catch((err) => console.log(err));
  }, [user?.email]);

  const handleOpenReviewModal = (tutor) => {
    setSelectedTutorForReview(tutor);
    setReviewRating(tutor.existingReview?.rating || 0);
    setReviewComment(tutor.existingReview?.comment || "");
  };

  const handleReviewSubmit = async (data) => {
    if (!selectedTutorForReview || reviewRating === 0) {
      return;
    }
    console.log(data);

    const responce = await axios.post(
      `http://localhost:5000/tutor/review/${data.tutorId}`,
      {
        review: "Hello",
      }
    );

    if (responce.data) {
      toast.success("Review Submited Success!", {
        theme: "dark",
      });
    } else {
      toast.error("Something Wrong!", {
        theme: "dark",
      });
    }

    console.log(responce);

    setSelectedTutorForReview(null); 
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          My Booked Tutors
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Manage your sessions and leave reviews for your tutors.
        </p>
      </header>

      {bookedTutors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookedTutors.map((booking, index) => (
            <motion.div
              key={booking.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <img
                    src={booking.image || "/placeholder.svg"}
                    alt={booking.name}
                    width={300}
                    height={200}
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <CardTitle className="mt-4 text-xl">{booking.name}</CardTitle>
                  <CardDescription className="text-primary">
                    {booking.language}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <DollarSign className="w-4 h-4 text-primary" /> Price: $
                    {booking.price}/hour
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <CalendarCheck2 className="w-4 h-4 text-primary" /> Last
                    Session: {booking.lastSession}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                        booking.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      Status: Complete
                    </span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Dialog
                    onOpenChange={(isOpen) =>
                      !isOpen && setSelectedTutorForReview(null)
                    }
                  >
                    <DialogTrigger asChild>
                      <Button
                        variant={booking.reviewGiven ? "outline" : "default"}
                        className="w-full"
                        onClick={() => handleOpenReviewModal(booking)}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        {booking.reviewGiven
                          ? "View/Edit Review"
                          : "Leave a Review"}
                      </Button>
                    </DialogTrigger>
                    {selectedTutorForReview &&
                      selectedTutorForReview.id === booking.id && (
                        <DialogContent className="sm:max-w-[425px]">
                          <DialogHeader>
                            <DialogTitle>
                              Review {selectedTutorForReview.name}
                            </DialogTitle>
                            <DialogDescription>
                              Share your experience to help others.
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <div>
                              <Label htmlFor="rating" className="block mb-2">
                                Rating
                              </Label>
                              <div className="flex space-x-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <Star
                                    key={star}
                                    className={`w-8 h-8 cursor-pointer ${
                                      reviewRating >= star
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-300"
                                    }`}
                                    onClick={() => setReviewRating(star)}
                                  />
                                ))}
                              </div>
                            </div>
                            <div>
                              <Label htmlFor="comment">
                                Comment (Optional)
                              </Label>
                              <Textarea
                                id="comment"
                                value={reviewComment}
                                onChange={(e) =>
                                  setReviewComment(e.target.value)
                                }
                                placeholder="Tell us more about your experience..."
                                className="mt-1"
                              />
                            </div>
                          </div>
                          <DialogFooter>
                            <Button
                              type="button"
                              variant="outline"
                              onClick={() => setSelectedTutorForReview(null)}
                            >
                              Cancel
                            </Button>
                            <Button
                              type="submit"
                              onClick={() => handleReviewSubmit(booking)}
                            >
                              Submit Review
                            </Button>
                          </DialogFooter>
                        </DialogContent>
                      )}
                  </Dialog>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <CalendarCheck2 className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground">
            No Booked Tutors Yet
          </h3>
          <p className="text-muted-foreground mt-2">
            Start by finding and booking a tutor.
          </p>
          <Link to="/find-tutors">
            <Button className="mt-4">Find Tutors</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
