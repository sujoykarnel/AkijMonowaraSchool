import { Helmet } from "react-helmet-async";
import AimOfSchool from "../AimOfSchool/AimOfSchool";
import SchoolUnits from "../SchoolUnits/SchoolUnits";


const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>About Us | AMS</title>
            </Helmet>
            <AimOfSchool />
            <SchoolUnits/>
        </div>
    );
};

export default AboutUs;