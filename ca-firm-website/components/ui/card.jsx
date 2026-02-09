
"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const Card = ({ children, className, hoverEffect = true, ...props }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }} // Polish: Reduced distance
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeInOut" }} // Polish: Smoother
      whileHover={hoverEffect ? { y: -2, transition: { duration: 0.3 } } : {}} // Polish: Subtle hover
      className={cn(
        "bg-white rounded-xl border border-slate-100 shadow-sm p-6 overflow-hidden", // Polish: Soft border
        hoverEffect && "hover:shadow-soft hover:border-slate-200 transition-all", // Polish: Soft shadow
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({ children, className }) => (
  <div className={cn("mb-4", className)}>{children}</div>
);

export const CardTitle = ({ children, className }) => (
  <h3 className={cn("text-xl font-bold text-slate-900", className)}>{children}</h3>
);

export const CardContent = ({ children, className }) => (
  <div className={cn("text-slate-600", className)}>{children}</div>
);

export default Card;
