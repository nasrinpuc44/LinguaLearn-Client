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
  Calendar,
  DollarSign,
  Award,
  Clock,
  Gift,
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
    avatar: "https://i.ibb.co.com/HfbpRGkn/l-profile.jpg",
  },
  {
    name: "John B.",
    quote:
      "The platform is so easy to use, and I started learning Spanish within days.",
    avatar: "https://i.ibb.co.com/ZRQsLgkZ/1.jpg",
  },
  {
    name: "Maria K.",
    quote:
      "As a tutor, LinguaLearn has connected me with students worldwide. It's fantastic!",
    avatar: "https://i.ibb.co.com/v4qDyGqD/bc66.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
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

      {/* Stats Section */}
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

      {/* Featured Tutors Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Featured Tutors of the Month
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Md. Hasan",
                language: "Spanish",
                rating: 4.9,
                students: 320,
                image: "https://i.ibb.co.com/WmSMrf4/5ea705974f54209a843f0946993ffcc9-w.jpg",
              },
              {
                name: "Nadim Bin Hossain",
                language: "French",
                rating: 4.8,
                students: 280,
                image: "https://i.ibb.co.com/B5yLNKWr/educator-giving-lecture-illustration-nomivdttrz0fo7tb.png",
              },
              {
                name: "Autandrila Chakraborty",
                language: "Mandarin",
                rating: 4.95,
                students: 410,
                image: "https://i.ibb.co.com/ks9mzNMb/7d885d604d5f249a589d95ac17a950a2-w.jpg",
              },
            ].map((tutor, index) => (
              <motion.div
                key={tutor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      width={120}
                      height={120}
                      className="rounded-full mb-4 object-cover w-30 h-30"
                    />
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {tutor.name}
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Teaches: {tutor.language}
                    </p>
                    <div className="flex items-center mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(tutor.rating) ? 'text-yellow-400 fill-current' : 'text-muted-foreground'}`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-muted-foreground">
                        {tutor.rating}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {tutor.students.toLocaleString()} students taught
                    </p>
                    <Link to={`/tutor/${tutor.name.toLowerCase().replace(' ', '-')}`}>
                      <Button className="w-full">
                        Book Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-16 md:py-24 bg-background">
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

      {/* Why Learn With Us Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Why Learn with Us?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Clock,
                title: "Flexible Scheduling",
                description: "Learn at your convenience with 24/7 availability"
              },
              {
                icon: DollarSign,
                title: "Affordable Pricing",
                description: "Quality lessons at competitive prices for all budgets"
              },
              {
                icon: Award,
                title: "Experienced Tutors",
                description: "Certified professionals with years of teaching experience"
              },
              {
                icon: Globe,
                title: "Learn Anywhere",
                description: "Take lessons from the comfort of your home"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-background rounded-lg text-center"
              >
                <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
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

      {/* Success Stories Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Success Stories
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Nasrin Sultana",
                achievement: "Learned Spanish in just 6 months!",
                image: "https://i.ibb.co.com/zhWBXK9G/Whats-App-Image-2025-06-28-at-22-58-10-a15653a6.jpg"
              },
              {
                name: "Heung Min",
                achievement: "Became fluent in Japanese for his new job",
                image: "https://i.ibb.co.com/PZ71xp4Z/BFA-2023-2-Heung-Min-Son-cropped-jpg.webp"
              },
              {
                name: "Emma Johnson",
                achievement: "Passed her French DELF exam with honors",
                image: "https://i.ibb.co.com/spvY7m8T/professional-profile-pictures-1427-x-1920-txfewtw6mcg0y6hk.webp"
              }
            ].map((story, index) => (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-lg text-center"
              >
                <img
                  src={story.image}
                  alt={story.name}
                  width={100}
                  height={100}
                  className="rounded-full mx-auto mb-4 object-cover w-24 h-24"
                />
                <p className="text-lg italic text-muted-foreground mb-4">
                  "{story.achievement}"
                </p>
                <h4 className="font-semibold text-foreground">
                  - {story.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
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

      {/* Special Offers Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Special Offers & Discounts
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "First Lesson Free",
                description: "Get your first 30-minute lesson with any tutor for free",
                icon: Gift
              },
              {
                title: "Refer & Earn",
                description: "Invite friends and earn $10 credit for each signup",
                icon: Users
              },
              {
                title: "Back to School",
                description: "20% off all packages for students this season",
                icon: BookOpen
              }
            ].map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
              >
                <offer.icon className="h-10 w-10 text-white mb-4" />
                <h3 className="text-xl font-semibold mb-2 text-white">
                  {offer.title}
                </h3>
                <p className="text-white/80">{offer.description}</p>
                <Button variant="outline" className="mt-4 text-primary bg-white hover:bg-white/90">
                  Claim Offer
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}