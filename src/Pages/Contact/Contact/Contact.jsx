import { Helmet } from "react-helmet-async";
import Address from "../Address/Address";
import Map from "../Map/Map";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Contact | AMS</title>
      </Helmet>
      <Map />
      <Address />
    </div>
  );
};

export default Contact;
