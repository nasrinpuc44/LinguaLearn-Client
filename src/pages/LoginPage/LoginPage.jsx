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
import { Chrome, OctagonAlert } from "lucide-react"; // Using Chrome icon for Google
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "react-toastify";
import GetUser from "../../lib/GetUser";
export default function LoginPage() {
  const { loginuser, loginwithgoogle } = GetUser();
  const [IsLoading, setIsLoading] = useState(false);
  const [error, seterror] = useState(null);
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    loginuser(e.target.email.value, e.target.password.value)
      .then(() => {
        toast("User Login Success", {
          theme: "dark",
        });

        fetch("http://localhost:5000/Login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: e.target.email.value,
            password: e.target.password.value,
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("Token", data.token);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });

        Navigate("/");
      })
      .catch((err) => {
        seterror(err.code);
        setIsLoading(false);
      });

    console.log("Login submitted");
  };

  const handleGoogleLogin = () => {
    loginwithgoogle()
      .then((data) => {
        console.log(data.user);

        const userData = {
          name: data.user.displayName,
          email: data.user.email,
          photoUrl: data.user.photoURL,
        };

        toast("User Login Success", {
          theme: "dark",
        });
        fetch("http://localhost:5000/Google-login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("Token", data.token);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
        Navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-7xl mx-auto flex items-center justify-center min-h-[calc(100vh-10rem)] py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full md:w-[400px] shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Welcome Back!</CardTitle>
            <CardDescription>
              Sign in to continue your learning journey.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
              {error && (
                <div className="flex items-center justify-start gap-2 text-red-500 bg-red-50 p-2 font-bold">
                  <OctagonAlert />{" "}
                  {error == "auth/invalid-credential"
                    ? "invalid Email or Password"
                    : error == "auth/weak-password"
                    ? "Please Provide a Srong Password"
                    : error}
                </div>
              )}
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
            <div className="mt-6 relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button
              variant="outline"
              className="w-full mt-6"
              onClick={handleGoogleLogin}
            >
              <Chrome className="mr-2 h-4 w-4" /> Login with Google
            </Button>
          </CardContent>
          <CardFooter className="justify-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                to="/Registration"
                className="font-medium text-primary hover:underline"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
