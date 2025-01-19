import Banner from "@/components/Home/Banner/Banner";
import OmnichannelMessaging from "@/components/Home/OmnichannelMessaging/OmnichannelMessaging";
import Our_Service from "@/components/Home/OurService/Our_Service";
import WhyChooseUniengage from "@/components/Home/WhyChooseUniengage/WhyChooseUniengage";

export default function Home() {
  return (
    <div className="space-y-10 md:space-y-24 pb-20">
      <Banner />
      <Our_Service />
      <WhyChooseUniengage />
      <OmnichannelMessaging />
    </div>
  );
}
