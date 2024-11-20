import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import {
  FaPhoneVolume,
  FaSquareFacebook,
  FaLocationDot,
} from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";


const Address = () => {
  return (
    <div>
      <SectionTitle heading={"Campus & Address"} />
      <div className="md:flex md:columns-2 justify-center gap-4">
        <div className="w-full md:justify-items-center">
          <div>
            <h2 className="text-2xl font-bold">
              {" "}
              <FaLocationDot className="inline" /> Campus-1
            </h2>
            <p>Akij Food & Beverage Ltd. Compound</p>
            <p>Barobaria, Dhamrai, Dhaka-1800</p>
          </div>
        </div>
        <div className="w-full md:justify-items-center">
          <div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <p>
              <FaPhoneVolume className="inline" /> Mobile No: +8801733190417
            </p>
            <p>
              <GiRotaryPhone className="inline" /> Hotline No: +8801313014644
            </p>
            <p>
              <MdEmail className="inline" /> Email: ams@akijfood.com
            </p>
            <p>
              <FaSquareFacebook className="inline" /> Facebook: facebook.com/AkijMonowaraSchool
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
