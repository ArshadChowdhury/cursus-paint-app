export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseClasses =
    "font-medium rounded-lg transition-colors duration-200 flex items-center gap-2";
  const variants = {
    primary: "bg-amber-400 text-black hover:bg-amber-500",
    secondary: "bg-white text-black hover:bg-gray-100",
    outline:
      "border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black",
  };
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
