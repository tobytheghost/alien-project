import { useEffect, useRef, useState } from "react";
import { Portal } from "./Portal";

const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  title: string;
};

const Modal: React.FC<ModalProps> = ({
  children,
  isOpen,
  handleClose,
  title,
  ...props
}) => {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  useClickOutside(contentRef, handleClose);

  if (!open) return null;

  return (
    <Portal wrapperId="modal-root">
      <div className="fixed top-0 left-0 right-0 bottom-0">
        <div
          ref={contentRef}
          className="flex flex-col bg-green-dark text-green-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/3 border-2 border-green-light"
          {...props}
        >
          <div className="bg-green-light p-2 text-green-dark font-bold flex justify-between">
            <div>{title}</div>
            <button onClick={handleClose}>CLOSE</button>
          </div>
          <div className="p-2">{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
