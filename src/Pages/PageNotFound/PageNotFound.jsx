import { Link } from "react-router-dom";
import logo_Img from "../../assets/others/logo.png";
const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="justify-items-center border-4 border-green-600 p-4 ">
        <img width={100} src={logo_Img} alt="" />
        <div className="text-center">
          <h2 className="text-4xl font-bold">Oops!</h2>
          <h2 className="text-3xl font-semibold">Page Not Found.</h2>
          <Link to="/">
            <button className="btn btn-sm btn-success text-white">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
