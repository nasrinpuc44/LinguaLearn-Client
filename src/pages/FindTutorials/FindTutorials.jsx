import TutorCard from "@/components/tutor-card";
import { Label } from "@/components/ui/label";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Search, Filter } from "lucide-react";
import { useState, useEffect } from "react";
import axios from "axios";


const allTutors = [
  {
    id: "1",
    name: "Elena Petrova",
    image: "/placeholder.svg?width=300&height=200&text=Elena",
    language: "Russian",
    description:
      "Native Russian speaker with 5+ years of experience. Focus on conversational skills.",
    rating: 4.9,
    reviews: 120,
    price: 25,
    location: "Moscow, Russia",
  },
  {
    id: "2",
    name: "Kenji Tanaka",
    image: "/placeholder.svg?width=300&height=200&text=Kenji",
    language: "Japanese",
    description:
      "JLPT N1 certified tutor. Specializes in business Japanese and exam preparation.",
    rating: 4.8,
    reviews: 95,
    price: 30,
    location: "Tokyo, Japan",
  },
  {
    id: "3",
    name: "Maria Rodriguez",
    image: "/placeholder.svg?width=300&height=200&text=Maria",
    language: "Spanish",
    description:
      "Friendly and patient tutor from Spain. All levels welcome, from beginner to advanced.",
    rating: 4.9,
    reviews: 210,
    price: 22,
    location: "Madrid, Spain",
  },
  {
    id: "4",
    name: "John Smith",
    image: "/placeholder.svg?width=300&height=200&text=John",
    language: "English",
    description:
      "TEFL certified. Experienced in teaching IELTS and TOEFL. British English.",
    rating: 4.7,
    reviews: 150,
    price: 28,
    location: "London, UK",
  },
  {
    id: "5",
    name: "Aisha Khan",
    image: "/placeholder.svg?width=300&height=200&text=Aisha",
    language: "Arabic",
    description:
      "Modern Standard Arabic and Egyptian dialect. Cultural insights included.",
    rating: 4.8,
    reviews: 70,
    price: 26,
    location: "Cairo, Egypt",
  },
  {
    id: "6",
    name: "Pierre Dubois",
    image: "/placeholder.svg?width=300&height=200&text=Pierre",
    language: "French",
    description:
      "Parisian French tutor. Focus on pronunciation and real-life conversation.",
    rating: 4.9,
    reviews: 180,
    price: 27,
    location: "Paris, France",
  },
];

const languages = [
  "All",
  "Russian",
  "Japanese",
  "Spanish",
  "English",
  "Arabic",
  "French",
  "German",
  "Mandarin",
  "Italian",
];
const ratings = ["Any Rating", "4.5+", "4.0+", "3.5+"];

export default function FindTutorsPage() {


  const initialLang = "All";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(initialLang);
  const [selectedRating, setSelectedRating] = useState("Any Rating");
  const [filteredTutors, setFilteredTutors] = useState(allTutors);

  const [TutorsData, setTutorsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://lingualearnsever.vercel.app/tutors")
      .then((data) => setTutorsData(data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Find Your Perfect Tutor
        </h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Browse our extensive list of qualified language tutors.
        </p>
      </header>

     
      <div className="mb-8 p-6 bg-muted/50 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          <div className="relative">
            <Label
              htmlFor="search-tutor"
              className="block text-sm font-medium text-muted-foreground mb-1"
            >
              Search by Name or Keyword
            </Label>
            <Input
              id="search-tutor"
              type="text"
              placeholder="e.g., John Doe, conversational"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 transform h-5 w-5 text-muted-foreground mt-3" />
          </div>
          <div>
            <Label
              htmlFor="language-filter"
              className="block text-sm font-medium text-muted-foreground mb-1"
            >
              Language
            </Label>
            <Select
              value={selectedLanguage}
              onValueChange={setSelectedLanguage}
            >
              <SelectTrigger id="language-filter">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang} value={lang}>
                    {lang}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label
              htmlFor="rating-filter"
              className="block text-sm font-medium text-muted-foreground mb-1"
            >
              Minimum Rating
            </Label>
            <Select value={selectedRating} onValueChange={setSelectedRating}>
              <SelectTrigger id="rating-filter">
                <SelectValue placeholder="Select Rating" />
              </SelectTrigger>
              <SelectContent>
                {ratings.map((rate) => (
                  <SelectItem key={rate} value={rate}>
                    {rate}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <Button
            className="w-full md:w-auto"
            onClick={() => {
              
            }}
          >
            <Filter className="mr-2 h-4 w-4" /> Apply Filters
          </Button>
        </div>
      </div>

      
      {filteredTutors.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TutorsData.filter(
            (data) =>
              data.description
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase()) 
          ).map((tutor) => (
            <TutorCard key={tutor.id} tutor={tutor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Search className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h3 className="text-xl font-semibold text-foreground">
            No Tutors Found
          </h3>
          <p className="text-muted-foreground mt-2">
            Try adjusting your filters or search terms.
          </p>
        </div>
      )}
    </div>
  );
}
