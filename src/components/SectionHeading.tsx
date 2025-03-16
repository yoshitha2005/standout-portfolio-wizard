
import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  caption?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  caption,
  title,
  description,
  centered = false,
  className,
}) => {
  return (
    <div 
      className={cn(
        "mb-12",
        centered && "text-center",
        className
      )}
    >
      {caption && <div className="caption-top">{caption}</div>}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-subtitle">{description}</p>}
    </div>
  );
};

export default SectionHeading;
