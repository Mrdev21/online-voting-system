function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  className = "",
}) {
  const baseClasses =
    "cursor-pointer rounded-xl px-5 py-2.5 font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark",

    secondary:
      "bg-card text-white hover:bg-slate-700",

    outline:
      "border border-border text-white hover:border-accent hover:text-accent",

    danger:
      "bg-danger text-white hover:opacity-90",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;