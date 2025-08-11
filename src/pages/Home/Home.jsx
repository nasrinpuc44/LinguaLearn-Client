import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { motion } from "framer-motion";
import {
  Users,
  BookOpen,
  MessageSquare,
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  PlayCircle,
} from "lucide-react";
import StatsCounter from "../../components/Starts_counter";
import BannerImage from "../../assets/Banner.webp";


const languageCategories = [
  { name: "English", icon: Globe, tutors: 1200 },
  { name: "Spanish", icon: Globe, tutors: 950 },
  { name: "French", icon: Globe, tutors: 700 },
  { name: "German", icon: Globe, tutors: 600 },
  { name: "Mandarin", icon: Globe, tutors: 450 },
  { name: "Japanese", icon: Globe, tutors: 300 },
  { name: "Italian", icon: Globe, tutors: 250 },
  { name: "Russian", icon: Globe, tutors: 200 },
  { name: "Arabic", icon: Globe, tutors: 150 },
];


const testimonials = [
  {
    name: "Sarah L.",
    quote:
      "LinguaLearn helped me find the perfect French tutor. My confidence has soared!",
    avatar: "/placeholder.svg?width=50&height=50&text=SL",
  },
  {
    name: "John B.",
    quote:
      "The platform is so easy to use, and I started learning Spanish within days.",
    avatar: "/placeholder.svg?width=50&height=50&text=JB",
  },
  {
    name: "Maria K.",
    quote:
      "As a tutor, LinguaLearn has connected me with students worldwide. It's fantastic!",
    avatar: "/placeholder.svg?width=50&height=50&text=MK",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
  
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20 md:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
              Unlock Your World with{" "}
              <span className="text-primary">New Languages</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Connect with expert tutors, explore diverse cultures, and achieve
              fluency at your own pace. Start your language learning journey
              today!
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/find-tutors">
                <Button size="lg" className="w-full sm:w-auto">
                  Find a Tutor
                </Button>
              </Link>
              <Link to="/add-tutorial">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  Become a Tutor
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <img
              src={BannerImage}
              alt="Language Learning Illustration"
              width={500}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Join Our Growing Community
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatsCounter
              targetValue={5000}
              label="Active Tutors"
              icon={Users}
            />
            <StatsCounter
              targetValue={25000}
              label="Happy Students"
              icon={BookOpen}
            />
            <StatsCounter
              targetValue={50}
              label="Languages Offered"
              icon={Globe}
            />
            <StatsCounter
              targetValue={100000}
              label="Positive Reviews"
              icon={MessageSquare}
            />
          </div>
        </div>
      </section>

      
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Explore Languages
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {languageCategories.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/find-tutors?lang=${lang.name.toLowerCase()}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <lang.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                      <h3 className="text-xl font-semibold text-foreground mb-1">
                        {lang.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {lang.tutors.toLocaleString()} Tutors Available
                      </p>
                      <ArrowRight className="mt-3 h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/find-tutors">
              <Button size="lg" variant="outline">
                View All Languages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            How LinguaLearn Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: Users,
                title: "Find Your Tutor",
                description:
                  "Browse profiles, read reviews, and choose the perfect tutor for your learning style.",
              },
              {
                icon: PlayCircle,
                title: "Book a Session",
                description:
                  "Schedule lessons at times that work for you with our easy booking system.",
              },
              {
                icon: CheckCircle,
                title: "Start Learning",
                description:
                  "Connect with your tutor via video call and begin your language journey.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="p-6"
              >
                <step.icon className="h-16 w-16 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <img
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full mb-4"
                    />
                    <p className="text-muted-foreground italic mb-4">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
