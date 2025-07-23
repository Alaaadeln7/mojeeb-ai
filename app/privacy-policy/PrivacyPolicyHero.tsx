import Image from "next/image";
import image from "@/public/privacy-policy.png";
import { Button } from "@/components/ui/button";
export default function PrivacyPolicyHero() {
  return (
    <div className="flex items-center justify-around text-center p-8">
      <div className="max-w-2xl text-start">
        <h1 className="text-3xl font-bold">سياسات مُجيب AI </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          لوريم إيبسوم دولور سيت أميت كونسيكتتور. فولتباتي تيمبوس دوي بوسير أميت
          برايسنت فيغوات. ساجيتيس تيمبور إت إيجستاس فيليت سيت. ديام مي أوت كوام
          أركو. نيسي إيجستاس تيلوس فاوبيس إنيم سيد آت.
        </p>
        <Button
          variant="default"
          className="btn-primary rounded-4xl my-5 w-1/3"
        >
          اتصل بنا
        </Button>
      </div>
      <Image src={image} alt={"Privacy Policy"} className="" />
    </div>
  );
}
