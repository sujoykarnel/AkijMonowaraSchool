import { Link } from "react-router-dom";
import logo from "../../../assets/LOGO.png";
import { FaPhoneVolume, FaSquareFacebook } from "react-icons/fa6";
import { GiRotaryPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-green-600 text-black p-10">
        <aside>
          <img width={100} src={logo} alt="" />
          <p>
            Akij-Monowara School
            <br />
            Providing reliable education since 2024
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Class</h6>
          <a className="link link-hover">Play</a>
          <a className="link link-hover">Nursery</a>
          <a className="link link-hover"> Class-1 to Class-5</a>
          <a className="link link-hover">Class 6 (Vocational)</a>
        </nav>
        <nav>
          <h6 className="footer-title">Go To</h6>
          <Link to="/aboutUs" className="link link-hover">
            About us
          </Link>
          <Link to="/admission" className="link link-hover">
            Admission
          </Link>
          <Link to="/gallery" className="link link-hover">
            Gallery
          </Link>
          <Link to="/contact" className="link link-hover">
            Contact
          </Link>
        </nav>
        <nav>
          <h6 className="footer-title">Contact</h6>
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
            <FaSquareFacebook className="inline" /> Facebook: Akij-Monowara
            School
          </p>
        </nav>
      </footer>
      <footer className="footer footer-center bg-base-300 text-base-content p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by
            AFBL-MIS
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
