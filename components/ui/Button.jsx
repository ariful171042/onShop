import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva("", {
  variants: {
    variant: {
      defauelt: "",
    },
    size: {
      auto: "",
      full: "",
    },
  },
  defaultVariants: {
    variant: "defauelt",
    size: auto,
  },
});

const Button = () => {
  return <div>Button</div>;
};

export default Button;
