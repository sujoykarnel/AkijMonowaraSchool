import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaFileDownload } from "react-icons/fa";

const AdmissionForms = () => {
  const allAdmissionForms = [
    {
      id: 1,
      name: "ভর্তি ফর্ম (সাধারণদের জন্য)",
      filePath: "/src/assets/files/Admission_Form.pdf",
      uploadDate: "2024-11-19",
    },
    {
      id: 2,
      name: "ভর্তি ফর্ম (এতিমদের জন্য)",
      filePath: "/src/assets/files/Admission_Form_Orphan.pdf",
      uploadDate: "2024-11-19",
    },
  ];

  return (
    <div>
      <SectionTitle heading={"Admission Form"} />
      <div className="justify-items-center">
        <table className="border-collapse border border-green-400 ">
          <thead className=" bg-green-400 ">
            <tr>
              <th className="border border-green-300 md:columns-2 ">SL</th>
              <th className="border border-green-300 md:columns-6 ">
                Form Name
              </th>
              <th className="border border-green-300 md:columns-2 ">
                Upload Date
              </th>
              <th className="border border-green-300 md:columns-2">File</th>
            </tr>
          </thead>
          <tbody>
            {allAdmissionForms.map((row, index) => {
              return (
                <tr key={row.id} className="ps-4">
                  <td className="border border-green-300 ">{index + 1}</td>
                  <td className="border border-green-300 ">{row.name}</td>
                  <td className="border border-green-300 ">{row.uploadDate}</td>
                  <td className="border border-green-300 content-center">
                    <Link to={row.filePath} target="_blank">
                      <FaFileDownload className="text-3xl" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionForms;
