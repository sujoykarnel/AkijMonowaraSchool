const SingleClass = ({ item }) => {
  const { name, section, studentPerSection } = item;
  return (
    <div className="border-4 border-green-600 min-w-full rounded-xl p-4 bg-green-300 text-center">
      <h2 className="text-3xl font-bold">{name}</h2>
      <h2>Total Section : {section}</h2>
      <h2>Total Seat : {studentPerSection * section}</h2>
    </div>
  );
};

export default SingleClass;
