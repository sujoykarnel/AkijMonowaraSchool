const Teacher = ({ teacher }) => {
  const { photo, name, designation, eduQualification, subject } = teacher;

  return (
    <div className="card bg-base-100 w-full shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <h2 className="font-bold">{designation}</h2>
        <h2 className="font-bold">{subject}</h2>
        <p className="">{eduQualification}</p>
        {/* <div className="card-actions">
          <button className="btn btn-primary">View Profile</button>
        </div> */}
      </div>
    </div>
  );
};

export default Teacher;
