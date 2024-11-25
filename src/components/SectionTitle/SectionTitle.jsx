const SectionTitle = ({ heading }) => {
  return (
    <div className="my-4 md:w-8/12 mx-auto text-center">
      <div>
        <h3 className="text-3xl border-y-4 border-black uppercase font-bold text-green-600 mx-10">
          {heading}
        </h3>
      </div>
    </div>
  );
};

export default SectionTitle;
