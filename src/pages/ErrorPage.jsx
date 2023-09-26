import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex h-[80vh] justify-center items-center">
      <div className="text-center">
      <h2 className="text-3xl font-semibold">Opps!! Something went wrong</h2>
      <Link to="/">
        <button className=" bg-primaryRed text-white px-6 border-[0px] py-3 font-bold rounded-lg hover:scale-95 duration-200 mt-3">
          Go Home
        </button>
      </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
