import React from 'react';
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AlertTriangle, Home, ArrowRight } from "lucide-react";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full space-y-6"
            >
                <div className="flex justify-center">
                    <img 
                        src="https://i.ibb.co.com/4wk20ysL/Oops-404-Error-with-a-broken-robot-cuate.png" 
                        alt="404 Error with broken robot"
                        className="w-64 h-64 object-contain"
                    />
                </div>
                
                
                <h2 className="text-2xl font-semibold text-muted-foreground">
                    Page Not Found
                </h2>
                
                <p className="text-muted-foreground">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Link to="/">
                        <Button className="w-full sm:w-auto">
                            <Home className="mr-2 h-4 w-4" />
                            Go Home
                        </Button>
                    </Link>
                    
                    <Link to="/find-tutors">
                        <Button variant="outline" className="w-full sm:w-auto">
                            Find Tutors
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFoundPage;