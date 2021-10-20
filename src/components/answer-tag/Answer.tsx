import "./answer.css";

export interface AnswerProps {
  //A ReactNode is a ReactElement, a ReactFragment, a string, a number
  //or an array of ReactNodes, or null, or undefined, or a boolean
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  primary?: boolean;
  size?: "small" | "medium" | "large";
  value?: string;
}

export const Answer: React.FC<AnswerProps> = ({
  children,
  primary = true,
  size = "medium",
  ...props
}) => {
  const mode = primary
    ? "storybook-answer--primary"
    : "storybook-answer--secondary";
  return (
    <button
      className={["storybook-answer", `storybook-answer--${size}`, mode].join(
        " "
      )}
      {...props}
    >
      {children}
    </button>
  );
};
