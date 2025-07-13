import React from "react";
import clsx from "clsx";

export default function Badge({ 
  className = "", 
  variant = "solid", 
  children 
}) {
  const baseStyles = "inline-block text-xs font-semibold px-2 py-1 rounded-full transition-colors duration-300";
  const variantStyles = variant === "outline" 
    ? "border border-gold/30 text-gold hover:bg-gold hover:text-gold-foreground"
    : "bg-gold text-gold-foreground";

  return (
    <span className={clsx(baseStyles, variantStyles, className)}>
      {children}
    </span>
  );
}
    