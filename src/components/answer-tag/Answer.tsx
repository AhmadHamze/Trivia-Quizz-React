import "./answer.css";

export interface AnswerProps {
  //A ReactNode is a ReactElement, a ReactFragment, a string, a number
  //or an array of ReactNodes, or null, or undefined, or a boolean
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  state?: "neutral" | "correct" | "false";
  value?: string;
}

export const Answer: React.FC<AnswerProps> = ({
  children,
  state = "neutral",
  ...props
}) => {
  return (
    <button className={["answer", "size", state].join(" ")} {...props}>
      {children}
    </button>
  );
};
