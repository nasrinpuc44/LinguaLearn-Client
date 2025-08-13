import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import {
  Card,
  CardContent,
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
} from "@/components/ui/dialog";
import {
  Edit,
  Trash2,
  PlusCircle,
  Eye,
  DollarSign,
  LanguagesIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import axios from "axios";
import Getuser from "../../lib/GetUser.js";
import { Label } from "../../components/ui/label.jsx";
import { toast } from "react-toastify";




export default function MyTutorialsPage() {
  const [myTutorials, setMyTutorials] = useState([]);
  const [tutorialToDelete, setTutorialToDelete] = useState(null);
  const [tutorialToEdit, setTutorialToEdit] = useState(null);
  const [editFormData, setEditFormData] = useState({
    language: "",
    price: "",
    description: "",
  });

  const { user } = Getuser();
  console.log(myTutorials);
  useEffect(() => {
    axios
      .get(`https://lingualearnsever.vercel.app/userTutor/${user?.email}`)
      .then((data) => setMyTutorials(data.data))
      .catch((err) => console.log(err));

    return () => {};
  }, [user?.email]);

  const handleDeleteConfirmation = (tutorial) => {
    setTutorialToDelete(tutorial);
  };

  const handleDeleteTutorial = () => {
    if (!tutorialToDelete) return;

    axios
      .delete(`https://lingualearnsever.vercel.app/tutor/${tutorialToDelete._id}`) // Assuming tutorial has `_id`
      .then((res) => {
        setMyTutorials((prev) =>
          prev.filter((tut) => tut._id !== tutorialToDelete._id)
        );
        toast.success("Tutorial Deleted success!", {
          theme: "dark",
        });
      })
      .catch((err) => {
        console.error("Error deleting tutorial:", err);
      })
      .finally(() => {
        setTutorialToDelete(null); 
      });
  };

  const handleEditClick = (tutorial) => {
    setTutorialToEdit(tutorial);
    setEditFormData({
      language: tutorial.language,
      price: tutorial.price,
      description: tutorial.description,
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateTutorial = (e) => {
    e.preventDefault();
    if (!tutorialToEdit) return;

    console.log(editFormData);

    axios
      .patch(`https://lingualearnsever.vercel.app/tutor/${tutorialToEdit._id}`, editFormData)
      .then((res) => {
     
        const updatedTutorial = res.data;
        setMyTutorials((prev) =>
          prev.map((tut) =>
            tut._id === tutorialToEdit._id ? { ...tut, ...editFormData } : tut
          )
        );
        toast("Tutor Update Successfully!", {
          theme: "dark",
        });
        setTutorialToEdit(null); 
      })
      .catch((err) => {
        console.error("Error updating tutorial:", err);
        toast.error("Something Wrong Please Try again ", {
          theme: "dark",
        });
      });
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8 flex flex-col sm:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            My Listed Services
          </h1>
          <p className="mt-2 text-lg text-muted-foreground">
            Manage your tutoring services and track their performance.
          </p>
        </div>
      </header>

      {myTutorials.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myTutorials.map((tutorial, index) => (
            <motion.div
              key={tutorial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="p-0 relative">
                  <img
                    src={tutorial.image || "/placeholder.svg"}
                    alt={tutorial.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-contain rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-xs">
                    {tutorial.rating}★ ({tutorial.reviews} reviews)
                  </div>
                </CardHeader>
                <CardContent className="p-4 flex-grow">
                  <CardTitle className="text-xl mb-1">
                    {tutorial.name}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                    <LanguagesIcon className="w-4 h-4 text-primary" />{" "}
                    {tutorial.language}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <DollarSign className="w-4 h-4 text-primary" /> $
                    {tutorial.price}/hour
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {tutorial.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4 border-t grid grid-cols-2 gap-2">
                
                  <Button
                    variant="outline"
                    onClick={() => handleEditClick(tutorial)}
                  >
                    <Edit className="mr-2 h-4 w-4" /> Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => handleDeleteConfirmation(tutorial)}
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Delete
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Eye className="mx-auto h-12 w-12 text-muted-foreground mb-4" />{" "}
     
          <h3 className="text-xl font-semibold text-foreground">
            No Services Listed Yet
          </h3>
          <p className="text-muted-foreground mt-2">
            Add your first tutoring service to get started.
          </p>
          <Link href="/add-tutorial">
            <Button className="mt-4">
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Service
            </Button>
          </Link>
        </div>
      )}

   
      <Dialog
        open={!!tutorialToDelete}
        onOpenChange={(isOpen) => !isOpen && setTutorialToDelete(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete the service "
              {tutorialToDelete?.name}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setTutorialToDelete(null)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleDeleteTutorial}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

  
      <Dialog
        open={!!tutorialToEdit}
        onOpenChange={(isOpen) => !isOpen && setTutorialToEdit(null)}
      >
        <DialogContent className="sm:max-w-[480px]">
          <DialogHeader>
            <DialogTitle>Edit Service</DialogTitle>
            <DialogDescription>
              Make changes to your service details below. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleUpdateTutorial} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="language" className="text-right">
                Language
              </Label>
              <Input
                id="language"
                name="language"
                value={editFormData.language}
                onChange={handleFormChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="price" className="text-right">
                Price ($)
              </Label>
              <Input
                id="price"
                name="price"
                type="number"
                value={editFormData.price}
                onChange={handleFormChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="description" className="text-right pt-2">
                Description
              </Label>
              <Textarea
                id="description"
                name="description"
                value={editFormData.description}
                onChange={handleFormChange}
                className="col-span-3"
                rows={4}
              />
            </div>
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setTutorialToEdit(null)}
              >
                Cancel
              </Button>
              <Button type="submit">Save Changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
