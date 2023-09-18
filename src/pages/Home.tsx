import { useEffect, useState } from "react";
import WeylandLogo from "../assets/WeylandLogo";
import LoadingLayout from "../layout/LoadingLayout";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [login, setLogin] = useState(false);
  const [barWidth, setBarWidth] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (!login) return;
    const setWidthInterval = setInterval(() => {
      return setBarWidth((prev) => {
        if (prev >= 100) {
          clearInterval(setWidthInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(setWidthInterval);
  }, [login]);

  useEffect(() => {
    if (barWidth < 100) return;
    navigate("/dashboard");
  }, [barWidth, navigate]);

  return (
    <LoadingLayout>
      <div className="flex flex-col justify-center align-middle m-auto w-1/2">
        <div>
          <WeylandLogo />
        </div>
        <div className="pb-8 -mt-8">
          {!login ? (
            <div className="flex w-full justify-center align-middle mb-9">
              <Button onClick={() => setLogin(true)}>Login</Button>
            </div>
          ) : (
            <div>
              <div className="border-2 border-green-light w-full">
                <div
                  className="h-8 bg-green-light"
                  style={{ width: `${barWidth}%` }}
                ></div>
              </div>
              <div className="text-3xl text-center text-green-light mt-4">
                Loading ...
              </div>
            </div>
          )}
        </div>
      </div>
    </LoadingLayout>
  );
};

export default Home;
