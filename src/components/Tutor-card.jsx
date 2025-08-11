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
import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function TutorCard({ tutor }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <CardHeader className="p-0">
          <img
            src={
              tutor.image ||
              `/placeholder.svg?width=300&height=200&text=${
                tutor.name.split(" ")[0]
              }`
            }
            alt={tutor.name}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
        </CardHeader>
        <CardContent className="p-4 flex-grow">
          <CardTitle className="text-xl mb-1">{tutor.name}</CardTitle>
          <CardDescription className="text-primary font-medium mb-2">
            {tutor.language}
          </CardDescription>
          <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
            {tutor.description}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>
              5 ({tutor.reviews} reviews)
            </span>
          </div>
          {tutor.location && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>{tutor.location}</span>
            </div>
          )}
        </CardContent>
        <CardFooter className="p-4 border-t">
          <Link to={`/tutors/${tutor._id}`} className="w-full">
            <Button className="w-full">View Details</Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
