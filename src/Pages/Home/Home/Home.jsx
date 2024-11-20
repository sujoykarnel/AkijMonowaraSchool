import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Welcome from "../Welcome/Welcome";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Akij-Monowara School</title>
      </Helmet>
      <Banner />
      <Welcome />
    </div>
  );
};

export default Home;
