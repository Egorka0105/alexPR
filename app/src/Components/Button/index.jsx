import cn from "classnames";

import s from "./button.module.scss";

export const Button = ({ children, additionalClass, ...props }) => (
  <button className={cn(s.button, additionalClass)} {...props}>
    {children}
  </button>
);
