type ButtonProps = {
  onClick: React.DOMAttributes<HTMLButtonElement>["onClick"];
  children: React.ReactNode;
};
const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      <div className="text-2xl text-center text-green-light border-green-light border-2 py-2 px-4 w-fit">
        {children}
      </div>
    </button>
  );
};

export default Button;
