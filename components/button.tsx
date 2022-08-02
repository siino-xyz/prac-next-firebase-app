import * as React from "react";

const Button = ({
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
}) => {
  return (
    <button
      className="px-4 py-2 rounded-full bg-blue-500 text-white shadow"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
