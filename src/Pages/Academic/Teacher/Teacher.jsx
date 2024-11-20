import imageNotFound from "../../../assets/others/imageNotFound.png";

const Teacher = ({ teacher }) => {
  const { photo, name, designation, eduQualification, subject } = teacher;

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photo ? photo : imageNotFound}
          alt="Tea"
          className="rounded-full border-2 border-green-300"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-extrabold text-green-700">{name}</h2>
        <h2 className="font-bold text-green-600">{designation}</h2>
        <h2 className="font-bold text-green-600">{subject}</h2>
        <p className="text-green-600">{eduQualification}</p>
        {/* <div className="card-actions">
          <button className="btn btn-primary">View Profile</button>
        </div> */}
      </div>
    </div>
  );
};

export default Teacher;
