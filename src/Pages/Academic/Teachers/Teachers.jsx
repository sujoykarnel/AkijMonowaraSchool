import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Teacher from "../Teacher/Teacher";

const Teachers = () => {
  // All Teachers list
  const allTeachers = [
    {
      id: 1,
      name: "Md. Abdul Kayum Khan",
      designation: "Assistant Teacher",
      eduQualification: "B.A. (Hons), M.A. (English) & B. Ed.",
      subject: "English",
      photo: "/src/assets/teachers/mdKayumKhan.jpg",
    },
    {
      id: 2,
      name: "Md. Shamsul Arefin",
      designation: "Assistant Teacher",
      eduQualification:
        "B.A. (Hons), M. A. (Arabic Language & Islamic Studies), Fazil  & Kamil (Hadith)",
      subject: "Spoken Arabic",
      photo: "/src/assets/teachers/mdSamsulArefin.jpg",
    },
    {
      id: 3,
      name: "Md. Mahadi Hasan",
      designation: "Assistant Teacher",
      eduQualification: "Hifzul Quran",
      subject: "Hifzul Quran",
      photo: "/src/assets/teachers/mdMahadiHasan.jpg",
    },
    {
      id: 4,
      name: "Mir Mufidul Alam",
      designation: "Assistant Teacher",
      eduQualification: "B.Sc (Hons), M.Sc ( Mathematics)",
      subject: "Mathematics",
      photo: "/src/assets/teachers/mirMufidulAlam.jpg",
    },
    {
      id: 5,
      name: "Md. Hasanat Reza Himel",
      designation: "Assistant Teacher",
      eduQualification: "Hifzul Quran, Dawra-e-Hadith",
      subject: "Maktab",
      photo: "/src/assets/teachers/mdHasanatReza.jpg",
    },
    {
      id: 6,
      name: "Md. Mostafijur Rahman",
      designation: "Assistant Teacher",
      eduQualification: "B.A. (Hons), M.A. (Arabic)",
      subject: "Islam & Moral Education",
      photo: "/src/assets/teachers/mdMostafijurRahman.jpg",
    },
    {
      id: 7,
      name: "Mehrab Hossain",
      designation: "Assistant Teacher",
      eduQualification: "B.Sc (Hons), M.Sc (Physics)",
      subject: "Science",
      photo: "/src/assets/teachers/mehrabHossain.jpg",
    },
    {
      id: 8,
      name: "Suraia Feardus",
      designation: "Assistant Teacher",
      eduQualification: "B.A. (Hons), M.A. (English)",
      subject: "English",
      photo: "/src/assets/teachers/suraiaFeardus.jpg",
    },
  ];
  return (
    <div>
      <SectionTitle heading={"Our All Teachers"} />
      <div className="grid md:grid-cols-3 gap-4 justify-items-center">
        {allTeachers.map((teacher) => {
          return <Teacher key={teacher.id} teacher={teacher} />;
        })}
      </div>
    </div>
  );
};

export default Teachers;
