import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DollarSign, LanguagesIcon, ImageIcon, User, Mail } from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";
import Getuser from "../../lib/GetUser.js";

const languagesToTeach = [
  "English",
  "Spanish",
  "French",
  "German",
  "Mandarin",
  "Japanese",
  "Italian",
  "Russian",
  "Arabic",
];

export default function AddTutorialPage() {
  const { user } = Getuser();

  
  const [formData, setFormData] = useState({
    tutorName: user.displayName, 
    email: user.email, 
    image: "", 
    language: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    if (
      !formData.image ||
      !formData.language ||
      !formData.price ||
      !formData.description
    ) {
   
      console.log("Hello");
      return;
    }

    console.log("Tutorial/Service Data:", formData);

    const responce = await axios.post("https://lingualearnsever.vercel.app/tutor", {
      ...formData,
      tutorName: user.displayName,
      email: user.email,
      reviews: 0,
    });

    console.log(responce);

    if (responce) {
      toast.success("Tutor Added Success!", {
        theme: "dark",
      });
    } else {
      toast.error("Something Wromg Please Try again!", {
        theme: "dark",
      });
    }

    // toast({
    //   title: "Service Listed!",
    //   description: `${formData.language} lessons by ${formData.tutorName} added successfully.`,
    // })
    // Reset form or redirect
    setFormData({
      tutorName: "",
      email: "",
      image: "",
      language: "",
      price: "",
      description: "",
    });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="max-w-2xl mx-auto shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">
              List Your Tutoring Service
            </CardTitle>
            <CardDescription>
              Share your language expertise with students worldwide.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="tutorName">
                    Your Display Name / Service Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="tutorName"
                      name="tutorName"
                      value={user.displayName}
                      placeholder="e.g., John D. Language Expert"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Contact Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={user.email}
                      placeholder="you@example.com"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Profile/Service Image URL</Label>
                <div className="relative">
                  <ImageIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                    placeholder="https://example.com/your-image.jpg"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="language">Language You Teach</Label>
                  <div className="relative">
                    <LanguagesIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Select
                      name="language"
                      onValueChange={(value) =>
                        handleSelectChange("language", value)
                      }
                      value={formData.language}
                    >
                      <SelectTrigger className="pl-10">
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent>
                        {languagesToTeach.map((lang) => (
                          <SelectItem key={lang} value={lang}>
                            {lang}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Price per Hour ($)</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="price"
                      name="price"
                      type="number"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="e.g., 25"
                      className="pl-10"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description of Your Service</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell students about your teaching style, experience, and what they will learn..."
                  rows={5}
                  required
                />
              </div>
              <Button type="submit" className="w-full" size="lg">
                List My Service
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
