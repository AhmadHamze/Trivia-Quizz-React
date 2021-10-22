import "./Button.css";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  navigation: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  navigation,
  children,
}) => {
  return (
    <button
      className={`button ${navigation ? "navigation" : "start"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
