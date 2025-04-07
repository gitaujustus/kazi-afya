import { FileIcon, FirstRegIcon, ReferalIcon, CommunicationIcon, RecordIcon  } from "@/components/Icons";
import { CloudIcon, CloudOfflineIcon, ClockIcon, RingIcon, DocIcon  } from "@/components/Icons";
import { ReportIcon,
  ChartIcon,
  ScanIcon,
  CraimIcon,
  AutomationIcon,
  ExpiryIcon,
  AlertIcon,
  StocksIcon,
  PayrollIcon,
  Appointmenticon,
  PerformanceIcon,
  Timericon,
  DesktopIcon } from "@/components/Icons";



// Data for Section 1: Patient Management System Features
export const section1Data = {
    title: "Patient Management System Features",
    description:
      "The Kazi Afya system transforms healthcare management by offering a comprehensive set of tools designed to streamline processes, enhance patient care, and improve provider coordination. Its key features include:",
    imageSrc: "/assets/features/sect1.webp",
    imageAlt: "features",
    featuresRow1: [
      {
        icon: FileIcon,
        title: "Centralized Records:",
        description:
          "Securely stores and manages complete patient histories—such as diagnoses and treatment plans—allowing healthcare providers quick and easy access to critical information.",
      },
      {
        icon: FirstRegIcon,
        title: "Fast Registration:",
        description:
          "Streamlines onboarding with a quick, paperless registration process, reducing wait times and improving the overall patient experience.",
      },
    ],
    featuresRow2: [
      {
        icon: RecordIcon,
        title: "Electronic Medical Records:",
        description:
          "Enables easy retrieval of medical data to support accurate diagnoses and effective treatment plans, while fostering better coordination among healthcare providers through shared access.",
      },
      {
        icon: CommunicationIcon,
        title: "Patient Communication:",
        description:
          "Offers a secure messaging portal for sending appointment reminders and sharing test results, boosting patient engagement with timely notifications and follow-ups.",
      },
      {
        icon: ReferalIcon,
        title: "Referral Management:",
        description:
          "Seamlessly handles referrals between departments and external specialists, ensuring efficient communication and continuity of care for patients.",
      },
    ],
  };
  
  // Data for Section 2: Appointment Scheduling & Telemedicine
  export const section2Data = {
    title: "Appointment Scheduling & Telemedicine",
    description:
      "The Kazi Afya platform enhances healthcare management by integrating robust appointment scheduling and telemedicine capabilities, designed to improve efficiency, access, and patient satisfaction. This includes:",
    imageSrc: "/assets/features/sect2.webp",
    imageAlt: "appointment scheduling",
    featuresRow1: [
      {
        icon: CloudIcon, 
        title: "Online Booking:",
        description:
          "Patients can conveniently schedule appointments via web or mobile access to healthcare services.",
      },
      {
        icon: CloudOfflineIcon, 
        title: "Staff Scheduling:",
        description:
          "Staff can manually book appointments for walk-in patients, enabling flexibility in person.",
      },
    ],
    featuresRow2: [
      {
        icon: ClockIcon, 
        title: "Doctor Scheduling:",
        description:
          "Real-time availability tracking ensures efficient appointment allocation for doctors.",
      },
      {
        icon: RingIcon, 
        title: "Patient Reminders:",
        description:
          "Patients receive notifications via SMS, email, and app to keep them well-informed about their appointments.",
      },
      {
        icon: DocIcon, 
        title: "Patient Flow Optimization:",
        description:
          "A system to improve patient scheduling to reduce wait times and enhance the overall experience.",
      },
    ],
  };
  

  // Data for Section 3: Billing & Payments
  export const section3Data = {
    title: "Billing & Payments",
    description:
      "The Kazi Afya platform revolutionizes healthcare management by incorporating an advanced billing and payment system that enhances efficiency, accuracy, and patient satisfaction. Its key features include:",
    imageSrc: "/assets/features/sect3.webp", 
    imageAlt: "billing and payments",
    featuresRow1: [
      {
        icon: ReportIcon, 
        title: "Financial Reporting:",
        description:
          "Integrates with patient records for efficient and transparent billing and dispensing, enhancing efficiency and providing detailed financial insights.",
      },
      {
        icon: ChartIcon,
        title: "Diverse Payment Options:",
        description:
          "Offers split billing and flexible payment methods, ensuring accessibility and convenience.",
      },
    ],
    featuresRow2: [
      {
        icon: ScanIcon, 
        title: "Barcode Scanning:",
        description:
          "Scans batch numbers and expiry dates of medications, reducing waste, ensuring safety, and streamlining inventory management.",
      },
      {
        icon: CraimIcon,
        title: "Claims Management:",
        description:
          "Integrates directly with insurance providers to simplify the claims process, accelerating reimbursements and reducing administrative burdens.",
      },
      {
        icon: AutomationIcon, 
        title: "Automated Invoicing:",
        description:
          "Automatically generates customized invoices for services and consultations, minimizing manual errors and saving time for staff.",
      },
    ],
  };
  
  // Data for Section 4: Inventory & Pharmacy Management
  export const section4Data = {
    title: "Inventory & Pharmacy Management",
    description:
      "The Kazi Afya platform revolutionizes healthcare management with an advanced inventory and pharmacy management system designed to optimize efficiency, ensure patient safety, and maintain seamless operations. Its key features include:",
    imageSrc: "/assets/features/sect4.webp", 
    imageAlt: "inventory and pharmacy management",
    featuresRow1: [
      {
        icon: FileIcon, 
        title: "Financial Reporting:",
        description:
          "Integrates with patient records for precise dispensing of medications, enhancing efficiency and accuracy.",
      },
      {
        icon: ScanIcon, 
        title: "Barcode Scanning:",
        description:
          "Employs barcode technology to streamline medication tracking and dispensing, speeding up operational speed.",
      },
    ],
    featuresRow2: [
      {
        icon: ExpiryIcon, 
        title: "Batch & Expiry Management:",
        description:
          "Monitors batch numbers and expiry dates to reduce waste, safeguard patient health, and maintain stock quality.",
      },
      {
        icon: AlertIcon, 
        title: "Auto Reordering Alerts:",
        description:
          "Configures alerts for low stock levels, automatically triggering supplier requests to guarantee timely restocking and continuity of supply.",
      },
      {
        icon: StocksIcon, 
        title: "Real-Time Stock Monitoring:",
        description:
          "Tracks availability of medications, equipment, and consumables in real time, preventing shortages and ensuring resource readiness.",
      },
    ],
  };

  // Data for Section 7: Staff, Payroll & HR Management
export const section7Data = {
    title: "Staff, Payroll & HR Management",
    description:
      "The Kazi Afya platform enhances healthcare management with a powerful reporting and business intelligence system, delivering actionable insights, predictive analytics, and regulatory compliance. Its key features include:",
    imageSrc: "/assets/features/sect7.webp", 
    imageAlt: "staff payroll and hr management",
    featuresRow1: [
      {
        icon: PayrollIcon, 
        title: "Automated Payroll:",
        description:
          "Streamlines salary processing with automated calculations for deductions and benefits, ensuring timely payments to staff with minimal manual intervention.",
      },
      {
        icon: Appointmenticon, 
        title: "Attendance Monitoring:",
        description:
          "Tracks employee attendance accurately to ensure compliance with work policies. Generates reports on attendance patterns for better workforce management.",
      },
    ],
    featuresRow2: [
      {
        icon: PerformanceIcon, 
        title: "Performance Management:",
        description:
          "Evaluates staff performance through data-driven insights and efficiency metrics. Facilitates feedback and development plans to enhance employee growth.",
      },
      {
        icon: Timericon, 
        title: "Shift Tracking:",
        description:
          "Monitors employee work hours in real-time to optimize staffing levels. Easily manage shift schedules to prevent overstaffing or understaffing.",
      },
      {
        icon: DesktopIcon, 
        title: "Access Control:",
        description:
          "Implements role-based access to sensitive information and systems. Assigns different permissions to staff based on their roles and responsibilities.",
      },
    ],
}
