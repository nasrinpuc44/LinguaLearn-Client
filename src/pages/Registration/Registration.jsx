import { Link, useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useState } from "react";
import GetUser from "../../lib/GetUser";
import { toast } from "react-toastify";
import { OctagonAlert } from "lucide-react";

export default function RegisterPage() {
  const Navigate = useNavigate();

  const [error, seterror] = useState(null);

  const { createUser, AddUserNameAndPhoto, logoutuser } = GetUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      photoUrl: e.target.photoUrl.value,
    };

    createUser(e.target.email.value, e.target.password.value)
      .then(() => {
        AddUserNameAndPhoto(e.target.name.value, e.target.photoUrl.value)
          .then(() => {
            toast("User Create Success, Now Login your Account", {
              theme: "dark",
            });
            logoutuser();
            Navigate("/Login");
          
            fetch("http://localhost:5000/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then((res) => res.json())
              .then((data) => console.log(data))
              .catch((err) => {
                console.log(err);
              });
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        seterror(err.code);
      });
    console.log("Registration submitted");
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full md:w-[400px] shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              Create an Account
            </CardTitle>
            <CardDescription>
              Join LinguaLearn and start your language adventure.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="photoUrl">Photo URL (Optional)</Label>
                <Input
                  id="photoUrl"
                  type="url"
                  placeholder="https://example.com/your-photo.jpg"
                />
              </div>
              {error && (
                <div className="flex items-center justify-start gap-2 text-red-500 bg-red-50 p-1 font-bold">
                  <OctagonAlert />{" "}
                  {error == "auth/email-already-in-use"
                    ? "User Allready Exits"
                    : error == "auth/weak-password"
                    ? "Please Provide a Srong Password"
                    : error}
                </div>
              )}
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                to="/Login"
                className="font-medium text-primary hover:underline"
              >
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
