import * as React from "react";
import { cn } from "../common/utils";

const Button = React.forwardRef(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("h-12 w-full rounded-full bg-orange-main hover:bg-orange-500 text-white font-bold rounded-full transition-colors duration-300", className)}
    {...props}
  />
));
Button.displayName = "Button";

export { Button };
