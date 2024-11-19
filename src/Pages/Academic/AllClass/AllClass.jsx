import { key } from "localforage";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import SingleClass from "../SingleClass/SingleClass";

const AllClass = () => {
  const allClass = [
    { id: 1, name: "Play", section: 2, studentPerSection: 30 },
    { id: 2, name: "Nursery", section: 2, studentPerSection: 30 },
    { id: 3, name: "Class-1", section: 2, studentPerSection: 30 },
    { id: 4, name: "Class-2", section: 2, studentPerSection: 30 },
    { id: 5, name: "Class-3", section: 2, studentPerSection: 30 },
    { id: 6, name: "Class-4", section: 2, studentPerSection: 30 },
    { id: 7, name: "Class-5", section: 2, studentPerSection: 30 },
    {
      id: 8,
      name: "Class-6 (Vocational)",
      section: 2,
      studentPerSection: 30,
    },
  ];

  return (
    <div>
      <SectionTitle heading={"Our All Classes"} />
      <div className="grid md:grid-cols-3 gap-4 justify-items-center">
        {allClass.map((item) => {
          return <SingleClass key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default AllClass;
