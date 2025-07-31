// start get targetedSectorsData images
import ecommerceImage from "@/public/targetedSectorsImages/ecommerce.png";
import PromotingGenerosity from "@/public/targetedSectorsImages/PromotingGenerosity.png";
import educationalVideo from "@/public/targetedSectorsImages/educationalVideo.png";
import medical from "@/public/targetedSectorsImages/medicalApp.png";
import streamlinedShipment from "@/public/targetedSectorsImages/streamlinedShipment.png";

// end get targetedSectorsData images

export const industryOptions = [
  "Information Technology",
  "Finance",
  "Healthcare",
  "Manufacturing",
  "Retail",
  "Education",
  "Construction",
  "Hospitality",
  "Transportation",
  "Energy",
  "Telecommunications",
  "Agriculture",
  "Professional Services",
  "Real Estate",
  "Other",
];

export const intervalOptions = ["monthly", "yearly"];

export const voices = {
  "ar-XA": [
    "ar-XA-Standard-A",
    "ar-XA-Standard-B",
    "ar-XA-Standard-C",
    "ar-XA-Standard-D",
  ],
  "ar-SA": ["ar-SA-Wavenet-A", "ar-SA-Standard-A"],
  "en-US": [
    "en-US-Wavenet-A",
    "en-US-Wavenet-B",
    "en-US-Wavenet-C",
    "en-US-Wavenet-D",
    "en-US-Wavenet-E",
    "en-US-Wavenet-F",
    "en-US-Standard-A",
    "en-US-Standard-B",
    "en-US-Standard-C",
    "en-US-Standard-D",
    "en-US-Standard-E",
    "en-US-Standard-F",
    "en-US-Neural2-A",
    "en-US-Neural2-C",
    "en-US-Neural2-D",
    "en-US-Neural2-E",
    "en-US-Studio-B",
    "en-US-Studio-C",
  ],
  "en-GB": [
    "en-GB-Wavenet-A",
    "en-GB-Wavenet-B",
    "en-GB-Wavenet-C",
    "en-GB-Wavenet-D",
    "en-GB-Standard-A",
    "en-GB-Standard-B",
    "en-GB-Standard-C",
    "en-GB-Standard-D",
  ],
  "en-IN": ["en-IN-Wavenet-A", "en-IN-Standard-A"],
  "en-AU": [
    "en-AU-Wavenet-A",
    "en-AU-Wavenet-B",
    "en-AU-Wavenet-C",
    "en-AU-Wavenet-D",
    "en-AU-Standard-A",
    "en-AU-Standard-B",
    "en-AU-Standard-C",
    "en-AU-Standard-D",
  ],
  "en-KE": ["en-KE-Standard-A"],
  "en-TZ": ["en-TZ-Standard-A"],
  "en-NG": ["en-NG-Standard-A"],
  "en-ZA": ["en-ZA-Standard-A"],
  "en-PH": ["en-PH-Standard-A", "en-PH-Wavenet-A"],
  "en-IE": ["en-IE-Standard-A", "en-IE-Wavenet-A"],
};

export const targetedSectorsData = [
  {
    id: 1,
    title: "Clinics and Hospitals",
    description:
      "Provide a professional patient experience by automatically responding to booking appointments and medical reminders, reducing pressure on administrative staff. Automatically confirm and schedule appointments and reduce cancellations thanks to automated reminders.",
    icon: medical,
  },
  {
    id: 2,
    title: "Tourist facilities and hotels",
    description:
      "Manage customer calls about flights and reservations with a voice assistant. Respond to flight inquiries. • Confirm reservations and change appointments. • Providing promotions.",
    icon: streamlinedShipment,
  },
  {
    id: 3,
    title: "E-commerce and services companies",
    description: `
      Providing quick responses to bank customers, including daily inquiries and alerts.• Respond to balance inquiries.• Remind customers of payment dates.
• Transforming complex cases of human support.
• Voice verification support.`,
    icon: ecommerceImage,
  },
  {
    id: 4,
    title: "Training institutes",
    description: `
     Education platforms benefit from a smart assistant who manages inquiries, sends reminders, and relieves the burden on employees. This includes answering academic questions, confirming registration, and managing support tickets.`,
    icon: educationalVideo,
  },
  {
    id: 5,
    title: "charities and organizations",
    description:
      "Providing immediate support to professional clients, without pressure on teams. Respond to registration and assistance terms. Automatically register orders and follow up. Support in both languages to expand service and reduce late calls.",
    icon: PromotingGenerosity,
  },
];

export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
