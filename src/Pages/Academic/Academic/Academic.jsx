import { Helmet } from "react-helmet-async";
import AllClass from "../AllClass/AllClass";
import Teachers from "../Teachers/Teachers";


const Academic = () => {
    return (
      <div>
        <Helmet>
          <title>Academic | AMS</title>
        </Helmet>
        <AllClass />
        <Teachers />
      </div>
    );
};

export default Academic;