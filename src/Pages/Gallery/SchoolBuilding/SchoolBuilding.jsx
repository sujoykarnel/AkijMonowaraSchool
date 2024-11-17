import SchoolBuildingPhoto from "../../../assets/gallery/SchoolBuilding.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const SchoolBuilding = () => {
  return (
    <div className="justify-items-center">
      <SectionTitle heading={"Future Building"} />
      <img src={SchoolBuildingPhoto} alt="" />
    </div>
  );
};

export default SchoolBuilding;
