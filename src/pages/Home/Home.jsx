import React from 'react';
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Users, BookOpen, MessageSquare, Globe, ArrowRight, Star, CheckCircle, PlayCircle, Gift, Clock, ChevronDown, Mail, Award, CalendarDays } from "lucide-react";
import StatsCounter from "../../components/Starts_counter";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';
import 'swiper/css';
import 'swiper/css/autoplay';

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
  { name: "Portuguese", icon: Globe, tutors: 300 },
];

const testimonials = [
  {
    name: "Sarah L.",
    quote: "LinguaLearn helped me find the perfect French tutor. My confidence has soared!",
    avatar: "https://i.ibb.co.com/HfbpRGkn/l-profile.jpg",
  },
  {
    name: "John B.",
    quote: "The platform is so easy to use, and I started learning Spanish within days.",
    avatar: "https://i.ibb.co.com/ZRQsLgkZ/1.jpg",
  },
  {
    name: "Maria K.",
    quote: "As a tutor, LinguaLearn has connected me with students worldwide. It's fantastic!",
    avatar: "https://i.ibb.co.com/v4qDyGqD/bc66.jpg",
  },
];

const bannerSlides = [
  {
    image: "https://i.ibb.co.com/fdNr8h41/wallpaperflare-com-wallpaper-2.jpg",
    title: "Unlock Your World with",
    typewriterWords: ["New Languages", "Cultural Exchange", "Global Connections"],
    description: "Connect with expert tutors, explore diverse cultures, and achieve fluency at your own pace.",
    button1: "Find a Tutor",
    button2: "Become a Tutor",
    link1: "/find-tutors",
    link2: "/add-tutorial"
  },
  {
    image: "https://i.ibb.co.com/LhhG3SZT/wallpaperflare-com-wallpaper-3.jpg",
    title: "Learn",
    typewriterWords: ["English", "Spanish", "French", "German"],
    description: "Browse profiles, read reviews, and choose the perfect tutor for your learning style.",
    button1: "Find a Tutor",
    button2: "Become a Tutor",
    link1: "/find-tutors",
    link2: "/add-tutorial"
  },
  {
    image: "https://i.ibb.co.com/B5Y1xrG4/wallpaperflare-com-wallpaper-4.jpg",
    title: "Join Our Community of",
    typewriterWords: ["Students", "Tutors", "Language Lovers"],
    description: "Start your language learning journey today with our easy booking system.",
    button1: "Find a Tutor",
    button2: "Become a Tutor",
    link1: "/find-tutors",
    link2: "/add-tutorial"
  },
];

const faqs = [
  {
    question: "How do I choose the right tutor?",
    answer: "You can browse tutor profiles, read reviews from other students, and filter by language, price, and availability. Many tutors offer trial lessons so you can see if they're a good fit."
  },
  {
    question: "What technology do I need for lessons?",
    answer: "You'll need a device with a webcam and microphone (like a computer, tablet, or smartphone) and a stable internet connection. Lessons take place via our built-in video platform."
  },
  {
    question: "Can I change tutors if it's not working out?",
    answer: "Absolutely! You can switch tutors at any time. We want you to find the perfect match for your learning style and goals."
  },
  {
    question: "How are payments handled?",
    answer: "Payments are processed securely through our platform. You'll be charged after each completed lesson, or you can purchase lesson packages for discounts."
  },
  {
    question: "What if I need to cancel a lesson?",
    answer: "You can cancel or reschedule lessons up to 24 hours in advance without charge. Cancellations within 24 hours may be subject to fees depending on the tutor's policy."
  }
];

const featuredProducts = [
  {
    id: 1,
    name: "Intensive Spanish Course",
    description: "30-hour comprehensive course with native speakers",
    price: "$299",
    originalPrice: "$399",
    image: "https://i.ibb.co.com/KxmPV21h/photo-1460518451285-97b6aa326961.jpg",
    rating: 4.8,
    tag: "BESTSELLER"
  },
  {
    id: 2,
    name: "Business English Package",
    description: "20 lessons focused on professional communication",
    price: "$249",
    originalPrice: "$349",
    image: "https://i.ibb.co.com/fYYvtxRb/photo-1546410531-bb4caa6b424d.jpg",
    rating: 4.7,
    tag: "POPULAR"
  },
  {
    id: 3,
    name: "French for Travelers",
    description: "10 essential lessons for your next trip to France",
    price: "$149",
    originalPrice: "$199",
    image: "https://i.ibb.co.com/FL77mzXx/photo-1503917988258-f87a78e3c995.jpg",
    rating: 4.9,
    tag: "NEW"
  }
];

const recentProducts = [
  {
    id: 4,
    name: "Japanese Crash Course",
    description: "15 lessons to master basic Japanese conversation",
    price: "$179",
    image: "https://i.ibb.co.com/cSBwd3tx/photo-1492571350019-22de08371fd3.jpg",
    addedDate: "2 days ago"
  },
  {
    id: 5,
    name: "German Grammar Mastery",
    description: "Detailed grammar lessons with practice exercises",
    price: "$199",
    image: "https://i.ibb.co.com/qzj11Mz/552457.jpg",
    addedDate: "1 week ago"
  },
  {
    id: 6,
    name: "Italian Pronunciation Guide",
    description: "Perfect your accent with native speaker feedback",
    price: "$129",
    image: "https://i.ibb.co.com/mrxp3K98/photo-1499602211854-122b55ef8f5d.jpg",
    addedDate: "3 days ago"
  },
  {
    id: 7,
    name: "Russian Alphabet Course",
    description: "Master Cyrillic script in just 5 lessons",
    price: "$99",
    image: "https://i.ibb.co.com/bMcqZTY2/photo-1557200134-90327ee9fafa.jpg",
    addedDate: "5 days ago"
  }
];

export default function HomePage() {
  const [expandedFaq, setExpandedFaq] = React.useState(null);
  const [email, setEmail] = React.useState("");

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(`Thank you for subscribing with ${email}!`);
    setEmail("");
  };

  return (
    <div className="flex flex-col">
      {/* 1. Hero Banner Section (Full-width slider) */}
      <section className="rounded-t-none rounded-b-3xl">
        <Swiper
          modules={[Autoplay]}
          autoplay={{ 
            delay: 3000,
            disableOnInteraction: false 
          }}
          loop={true}
          speed={800}
        >
          {bannerSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className={`relative h-screen max-h-[700px] rounded-b-3xl bg-cover bg-center`}
                style={{
                  backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
                }}
              >
                <div className="text-white w-[90vw] mx-auto pt-32">
                  <motion.h1 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
                  >
                    {slide.title}{' '}
                    <span className="text-primary">
                      <Typewriter
                        words={slide.typewriterWords}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={60}
                        delaySpeed={1500}
                      />
                    </span>
                  </motion.h1>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-lg max-w-2xl mb-8"
                  >
                    {slide.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <Link to={slide.link1}>
                      <Button 
                        size="lg" 
                        className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 font-bold shadow-lg px-8 py-4"
                      >
                        {slide.button1}
                      </Button>
                    </Link>
                    <Link to={slide.link2}>
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto bg-transparent text-white border-white hover:bg-white/20 font-bold px-8 py-4"
                      >
                        {slide.button2}
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 2. Stats Counter Section (Community numbers) */}
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Join Our Growing Community
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
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

      {/* 3. Featured Courses Section (Highlighted products) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Featured Courses
            </h2>
            <Link to="/courses" className="inline-block mt-4">
             
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden group">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {product.tag && (
                      <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        {product.tag}
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-2">
                        {product.rating}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-foreground">
                          {product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm line-through text-muted-foreground ml-2">
                            {product.originalPrice}
                          </span>
                        )}
                      </div>
                      <Button size="sm">Enroll Now</Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Language Categories Section (Grid of languages) */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Explore Languages
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {languageCategories.map((lang, index) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <Link to={`/find-tutors?lang=${lang.name.toLowerCase()}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300 cursor-pointer group">
                    <CardContent className="h-full p-4 flex flex-col items-center text-center">
                      <lang.icon className="h-10 w-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
                      <h3 className="text-lg font-semibold text-foreground mb-1">
                        {lang.name}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {lang.tutors.toLocaleString()} Tutors
                      </p>
                      <ArrowRight className="mt-2 h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/find-tutors">
              <Button size="lg" variant="outline">
                View All Languages <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. How It Works Section (3-step process) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            How LinguaLearn Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Find Your Tutor",
                description: "Browse profiles, read reviews, and choose the perfect tutor for your learning style.",
              },
              {
                icon: PlayCircle,
                title: "Book a Session",
                description: "Schedule lessons at times that work for you with our easy booking system.",
              },
              {
                icon: CheckCircle,
                title: "Start Learning",
                description: "Connect with your tutor via video call and begin your language journey.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="h-full"
              >
                <Card className="h-full">
                  <CardContent className="h-full p-6 flex flex-col items-center text-center">
                    <step.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. New Courses Section (Recently added) */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Newly Added Courses
            </h2>
            <Link to="/courses" className="inline-block mt-4">
             
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {recentProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full overflow-hidden group">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 object-cover"
                    />
                    <div className="absolute bottom-2 left-2 bg-background/80 text-xs font-medium px-2 py-1 rounded">
                      {product.addedDate}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold mb-1 text-foreground">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-foreground">
                        {product.price}
                      </span>
                      <Button size="sm" variant="outline">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Section (User reviews) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="h-full"
              >
                <Card className="h-full">
                  <CardContent className="h-full p-6 flex flex-col items-center text-center">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="rounded-full mb-4 object-cover w-20 h-20"
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

      {/* 8. Promotion Section (Special offer) */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <div className="flex items-center mb-4">
                <Gift className="h-8 w-8 mr-2" />
                <span className="text-xl font-bold">LIMITED TIME OFFER</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get 30% Off Your First 10 Lessons</h2>
              <p className="text-lg mb-6">Sign up today and receive a special discount for new students. Offer valid until August 31st.</p>
              <div className="flex items-center mb-6">
                <Clock className="h-5 w-5 mr-2" />
                <span>Offer ends in: 14 days 6 hours 23 minutes</span>
              </div>
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-bold">
                Claim Your Discount
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://i.ibb.co.com/Lh9WmZJ0/photo-1541178735493-479c1a27ed24.jpg" 
                alt="Language learning promotion" 
                className="rounded-lg shadow-xl w-full h-auto max-h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Newsletter Section (Email signup) */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-blue-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Mail className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Stay Updated with Language Tips
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for language learning tips, special offers, and updates on new courses.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="px-6 py-3">
                Subscribe
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}