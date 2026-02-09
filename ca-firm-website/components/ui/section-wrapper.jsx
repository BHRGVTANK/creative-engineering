
import { cn } from "@/lib/utils";

const SectionWrapper = ({ children, className, id, background = "white" }) => {
  const bgClasses = {
    white: "bg-white",
    gray: "bg-slate-50",
    blue: "bg-primary text-white",
    dark: "bg-slate-900 text-white"
  };

  return (
    <section 
      id={id} 
      className={cn(
        "py-20 md:py-28 px-4 sm:px-6 lg:px-8", // Polish: Increased vertical spacing for rhythm
        bgClasses[background], 
        className
      )}
    >
      <div className="max-w-7xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
