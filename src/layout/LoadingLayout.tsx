type LoadingProps = {
  children: React.ReactNode;
};
const LoadingLayout: React.FC<LoadingProps> = ({ children }) => {
  return (
    <div className="bg-green-dark flex flex-col h-screen w-screen flex-wrap justify-center">
      {children}
    </div>
  );
};

export default LoadingLayout;
