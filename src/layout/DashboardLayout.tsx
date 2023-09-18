import { useState } from "react";
import Modal from "../components/Modal";

const FOLDERS = [
  {
    url: "/dashboard/personnel",
    name: "PERSONNEL",
    restricted: true,
  },
  {
    url: "/dashboard/shared",
    name: "SHARED",
    restricted: true,
  },
  {
    url: "/dashboard/archive",
    name: "ARCHIVE",
    restricted: true,
  },
  {
    url: "/dashboard/trash",
    name: "TRASH",
    restricted: true,
  },
];

type DashboardProps = {
  children: React.ReactNode;
};
const DashboardLayout: React.FC<DashboardProps> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="bg-green-dark flex flex-col h-screen w-screen flex-wrap">
      <div className="bg-green-light text-green-dark font-bold text-xl p-2 flex justify-between">
        <span>PERSONAL TERMINAL</span>
        <a href="/">LOG OUT</a>
      </div>
      <div className="flex p-2 flex-grow">
        <div className="w-1/4 mt-24">
          <div className="text-green-light font-bold text-xl pb-4">FOLDERS</div>
          <div>
            {FOLDERS.map(({ url, name, restricted }) => {
              if (restricted) {
                return (
                  <button
                    key={name}
                    className="border-2 border-green-light p-2 pb-8 mb-4 w-full flex hover:border-white cursor-pointer justify-between"
                    onClick={() => setModalOpen(true)}
                  >
                    <div>{name}</div>
                    <div className="ml-2">[RESTRICTED]</div>
                  </button>
                );
              }
              return (
                <a
                  key={name}
                  href={url}
                  className="border-2 border-green-light p-2 pb-8 mb-4 w-auto flex hover:border-white cursor-pointer"
                >
                  {name}
                </a>
              );
            })}
          </div>
        </div>
        <div className="w-full pl-4 flex flex-col">{children}</div>
      </div>
      <Modal
        title="ACCESS DENIED"
        isOpen={isModalOpen}
        handleClose={() => setModalOpen(false)}
      >
        Access Denied. <br />
        <br />
        User missing required privileges.
      </Modal>
    </div>
  );
};

export default DashboardLayout;
