type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
};
const LinkButton: React.FC<LinkButtonProps> = ({ href, children }) => {
  return (
    <a href={href}>
      <div className="text-2xl text-center text-green-light border-green-light border-2 py-2 px-4 w-fit">
        {children}
      </div>
    </a>
  );
};

export default LinkButton;
