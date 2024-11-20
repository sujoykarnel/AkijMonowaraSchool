import { Helmet } from "react-helmet-async";
import SchoolBuilding from "../SchoolBuilding/SchoolBuilding";

const Gallery = () => {
  return (
    <div>
      <Helmet>
        <title>Gallery | AMS</title>
      </Helmet>
      <SchoolBuilding />
    </div>
  );
};

export default Gallery;
