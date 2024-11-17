import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Map = () => {
  return (
    <div>
      <SectionTitle heading={"Find us in map"} />
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d729.2265286085723!2d90.06939494281079!3d23.910088636953823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjPCsDU0JzM2LjUiTiA5MMKwMDQnMTAuNiJF!5e1!3m2!1sen!2sbd!4v1731821871791!5m2!1sen!2sbd"
          width="100%"
          height="500"
          allowfullscreen
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
