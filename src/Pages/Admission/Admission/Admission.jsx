import { Helmet } from "react-helmet-async";
import AdmissionBanner from "../AdmissionBanner/AdmissionBanner";
import Forms from "../Forms/Forms";

const Admission = () => {
    return (
      <div>
        <Helmet>
          <title>Admission | AMS</title>
        </Helmet>
        <AdmissionBanner />
        <Forms />
      </div>
    );
};

export default Admission;