import LinkButton from "../components/LinkButton";
import LoadingLayout from "../layout/LoadingLayout";

const ErrorPage = () => {
  return (
    <LoadingLayout>
      <div className="flex justify-center align-middle flex-col">
        <div className="text-2xl text-green-light text-center pb-8">
          Errorcode 404
        </div>
        <div className="m-auto">
          <LinkButton href="/">Reboot</LinkButton>
        </div>
      </div>
    </LoadingLayout>
  );
};

export default ErrorPage;
