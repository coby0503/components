import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  return <button ref={ref} {...props}></button>;
});
export default Button;
