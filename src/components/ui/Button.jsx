import React from "react";
import clsx from "clsx"; // if you want class merging, otherwise use simple template strings

const Button = ({
  children,
  variant = "solid", // "solid" or "outline"
  size = "md",       // "sm", "md", "lg"
  className = "",
  ...props
}) => {

  const baseStyles = "rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center justify-center";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };

  const variantStyles = {
    solid: "bg-gold text-gold-foreground hover:bg-gold/90 shadow-glow",
    outline: "border border-gold text-gold hover:bg-gold hover:text-gold-foreground"
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
