import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import akijUddinPhoto from "../../../assets/others/akijUddin.jpg";
import { FaQuoteLeft } from "react-icons/fa";

const AimOfSchool = () => {
  return (
    <div>
      <SectionTitle heading={"আকিজ-মনোয়ারা স্কুল প্রতিষ্ঠার উদ্দেশ্য"} />
      <div className="grid md:grid-cols-2 gap-4">
        <div className="justify-items-center">
          <img className="w-full rounded-xl" src={akijUddinPhoto} alt="" />
        </div>
        <div className="flex items-center">
          <div className="text-justify justify-items-center">
            <FaQuoteLeft className="text-8xl" />
            <p>
              আঠারো বছর বয়স পর্যন্ত একজন এতিমের অভিভাবক হিসেবে দায়িত্ব গ্রহণ
              করা, ঠিক যেমনটি আমাদের প্রিয় নবী হযরত মুহাম্মদ (সা.) করেছেন। এই
              সুন্নত আদায়ের উদ্দেশ্যে অত্র প্রতিষ্ঠানটি প্রতিষ্ঠা করা হয়েছে।
              একজন এতিমকে সুশিক্ষায় শিক্ষিত করার জন্য সার্বিক ব্যবস্থা গ্রহণের
              সর্বাত্মক চেষ্টা করা একজন তত্ত্বাবধায়কের দায়িত্ব আর সে দায়িত্ববোধ
              থেকেই অত্র প্রতিষ্ঠানটি প্রতিষ্ঠা করা হয়েছে।
            </p>
            <h2 className="text-center text-xl font-extrabold">------- শেখ আকিজ উদ্দিন</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AimOfSchool;
