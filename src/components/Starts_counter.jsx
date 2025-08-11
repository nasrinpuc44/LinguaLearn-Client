import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function StatsCounter({
  targetValue,
  label,
  icon: IconComponent,
  duration = 2,
}) {
  const [count, setCount] = useState(0);
  const spring = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    spring.set(targetValue);
  }, [targetValue, spring]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setCount(Math.round(latest));
    });
    return unsubscribe;
  }, [spring]);

  return (
    <motion.div
      className="flex flex-col items-center p-6 bg-card rounded-lg shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {IconComponent && (
        <IconComponent className="h-12 w-12 text-primary mb-4" />
      )}
      <div className="text-4xl font-bold text-foreground">
        {count.toLocaleString()}
      </div>
      <p className="text-muted-foreground mt-2">{label}</p>
    </motion.div>
  );
}
