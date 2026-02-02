export interface SubService {
  title: string;
  description: string;
  image: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  icon: string;
  shortDesc: string;
  mainImage: string;
  detailTitle: string;
  detailContent: string[];
  features: string[];
  gradient: string;
  isNew?: boolean;
  subServices: SubService[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    slug: "bms",
    title: "Building Management Systems",
    icon: "Cpu",
    shortDesc: "Integrated building intelligence. HVAC, Lighting, and Safety unified in one dashboard.",
    mainImage: "/images/services/bms.webp",
    detailTitle: "Cognitive Building Automation",
    detailContent: [
      "UDS Infrastructure brings the Ultimate Group's technological vision to life with world-class Building Management Systems (BMS). We move beyond simple automation to create 'Cognitive Buildings'—structures that actively monitor, analyze, and optimize their own performance.",
      "Our centralized command centers integrate diverse subsystems—HVAC, lighting, hydraulics, and energy metering—into a single glass-pane interface. This allows facility managers to reduce energy waste by up to 30% while ensuring optimal occupant comfort.",
      "From predictive maintenance algorithms that alert you before a chiller fails, to occupancy-based lighting that cuts costs in empty zones, our BMS solutions are the brain of your infrastructure."
    ],
    features: [
      "HVAC Optimization & Chiller Plant Manager",
      "Intelligent Lighting Control (DALI/0-10V)",
      "Energy Monitoring & Analytics Dashboards",
      "Third-party Integration (Modbus/BACnet/LonWorks)"
    ],
    gradient: "from-cyan-500 to-blue-600",
    subServices: [
      {
        title: "HVAC Optimization",
        description: "Advanced chiller plant management and air handling unit control for optimal climate comfort with 30% energy savings.",
        image: "/images/services/subservices/bms-hvac.jpg"
      },
      {
        title: "Intelligent Lighting",
        description: "DALI and 0-10V dimming protocols with occupancy sensors for automated, energy-efficient illumination.",
        image: "/images/services/subservices/bms-lighting.jpg"
      },
      {
        title: "Energy Analytics",
        description: "Real-time dashboards tracking consumption patterns, peak demand, and cost optimization opportunities.",
        image: "/images/services/subservices/bms-energy.jpg"
      }
    ]
  },
  {
    id: "02",
    slug: "civil-infrastructure",
    title: "Civil Infrastructure",
    icon: "HardHat",
    shortDesc: "Heavy structural foundations, bridges, and highways. We build the backbone of Bengal.",
    mainImage: "/images/services/civil-construction.webp",
    detailTitle: "Heavy Civil Engineering & Structural Integrity",
    detailContent: [
      "As a new arm of the 16-year-old Ultimate Group, UDS Infrastructure inherits a legacy of robust execution. Our Civil division focuses on the heavy-lifting required for nation-building: highways, bridges, and deep-foundation industrial structures.",
      "We deploy a modern fleet of excavators, graders, and batching plants to ensure rapid project turnaround. Our expertise lies in navigating the complex soil conditions of West Bengal, utilizing advanced piling and soil stabilization techniques.",
      "Whether it is a multi-lane state highway or the reinforced concrete (RCC) framework for a Grade-A IT Park, we prioritize safety, material quality, and architectural fidelity."
    ],
    features: [
      "Highway & Road Network Construction",
      "Deep Foundation Piling & Soil Testing",
      "Reinforced Cement Concrete (RCC) Structures",
      "Industrial Flooring & Warehousing Shells"
    ],
    gradient: "from-slate-600 to-slate-800",
    subServices: [
      {
        title: "Highway Construction",
        description: "Multi-lane highways and road networks with modern asphalt technology and drainage systems.",
        image: "/images/services/subservices/civil-highway.jpg"
      },
      {
        title: "Deep Foundation Piling",
        description: "Bored piling, driven piles, and soil stabilization for challenging Bengal terrain conditions.",
        image: "/images/services/subservices/civil-piling.jpg"
      },
      {
        title: "RCC Structures",
        description: "Reinforced concrete frameworks for commercial buildings, IT parks, and industrial facilities.",
        image: "/images/services/subservices/civil-rcc.jpg"
      }
    ]
  },
  {
    id: "03",
    slug: "electrical-transmission",
    title: "Electrical & T&D",
    icon: "Zap",
    shortDesc: "High-voltage transmission, substations, and smart metering networks.",
    mainImage: "/images/services/electrical-transmission.png",
    detailTitle: "Power Transmission & Distribution (T&D)",
    detailContent: [
      "Powering the grid of tomorrow requires precision today. UDS specializes in the end-to-end execution of high-voltage transmission and distribution networks. We bridge the critical gap between power generation and end-user consumption.",
      "Our teams are certified to handle high-tension (HT) and low-tension (LT) line installations, substation commissioning, and transformer setups. We adhere to strict safety protocols to ensure zero-accident project sites.",
      "Beyond traditional grids, we are pioneering the rollout of Smart Metering Infrastructure (AMI), enabling utility providers to track consumption in real-time and reduce aggregate technical and commercial (AT&C) losses."
    ],
    features: [
      "HT/LT Overhead Line Installation",
      "Substation Design & Commissioning",
      "Smart Metering (AMI) Deployment",
      "Transformer & Switchgear Setup"
    ],
    gradient: "from-yellow-500 to-amber-600",
    isNew: true,
    subServices: [
      {
        title: "HT/LT Transmission Lines",
        description: "High-tension and low-tension overhead line installation with certified safety protocols.",
        image: "/images/services/subservices/electrical-htlines.jpg"
      },
      {
        title: "Substation Engineering",
        description: "Complete substation design, transformer setup, and switchgear commissioning services.",
        image: "/images/services/subservices/electrical-substation.jpg"
      },
      {
        title: "Smart Metering (AMI)",
        description: "IoT-enabled Advanced Metering Infrastructure for real-time consumption tracking and AT&C loss reduction.",
        image: "/images/services/subservices/electrical-smartmeter.jpg"
      }
    ]
  },
  {
    id: "04",
    slug: "fire-safety",
    title: "Fire Protection",
    icon: "Flame",
    shortDesc: "NBC-compliant hydrant and sprinkler systems for maximum life safety.",
    mainImage: "/images/services/fire-safety-premium.png",
    detailTitle: "Advanced Fire Suppression Engineering",
    detailContent: [
      "Fire safety is an engineered guarantee, not an afterthought. UDS designs compliant hydraulic networks that meet strict National Building Code (NBC) and West Bengal Fire Services standards.",
      "We install comprehensive protection grids including wet risers, downcomers, and automated sprinkler systems. Our logic-driven approach ensures that pumps activate instantly upon pressure drops, providing immediate suppression capability.",
      "We also integrate passive firestops and intelligent detection systems that pinpoint thermal anomalies before they become infernos, protecting both human life and high-value assets."
    ],
    features: [
      "Hydrant & Wet Riser Systems",
      "Automated Sprinkler Networks",
      "Fire Pump Room Engineering",
      "Addressable Fire Alarm Systems (FAS)"
    ],
    gradient: "from-red-500 to-red-700",
    subServices: [
      {
        title: "Hydrant Systems",
        description: "NBC-compliant wet risers, downcomers, and fire hydrant networks for high-rise buildings.",
        image: "/images/services/subservices/fire-hydrant.jpg"
      },
      {
        title: "Sprinkler Networks",
        description: "Automated sprinkler systems with pressure-activated pumps for immediate fire suppression.",
        image: "/images/services/subservices/fire-sprinkler.jpg"
      },
      {
        title: "Fire Alarm Systems",
        description: "Addressable detection systems with smoke sensors and thermal anomaly detection.",
        image: "/images/services/subservices/fire-alarm.jpg"
      }
    ]
  },
  {
    id: "05",
    slug: "cctv-surveillance",
    title: "CCTV & Security",
    icon: "Eye",
    shortDesc: "AI-powered perimeter monitoring and IP camera networks.",
    mainImage: "/images/services/cctv-premium.png",
    detailTitle: "Intelligent Perimeter Security",
    detailContent: [
      "Modern security demands more than just recording; it demands intelligence. UDS deploys IP-based surveillance networks powered by Edge AI analytics.",
      "Our systems can differentiate between routine movement and security breaches, utilizing features like Line Crossing Detection, Loitering Alerts, and Automatic Number Plate Recognition (ANPR).",
      "We design robust command centers with video walls and NVR redundancy, ensuring that your facility has 24/7 eyes-on visibility with zero downtime."
    ],
    features: [
      "IP Camera Networks (4K/Night Vision)",
      "Video Analytics & Threat Detection",
      "Command Center Video Walls",
      "Cloud & Local NVR Storage"
    ],
    gradient: "from-violet-500 to-purple-700",
    subServices: [
      {
        title: "IP Camera Networks",
        description: "4K resolution cameras with night vision, PTZ capabilities, and weatherproof housing.",
        image: "/images/services/subservices/cctv-cameras.jpg"
      },
      {
        title: "Video Analytics",
        description: "AI-powered threat detection with line crossing, loitering alerts, and ANPR capabilities.",
        image: "/images/services/subservices/cctv-analytics.jpg"
      },
      {
        title: "Command Centers",
        description: "Video wall installations with NVR redundancy for 24/7 monitoring and zero downtime.",
        image: "/images/services/subservices/cctv-command.jpg"
      }
    ]
  },
  {
    id: "06",
    slug: "access-control",
    title: "Access Control",
    icon: "Lock",
    shortDesc: "Biometric and RFID secure entry logic for restricted zones.",
    mainImage: "/images/services/access-control-premium.png",
    detailTitle: "Biometric & RFID Access Logic",
    detailContent: [
      "Controlling who enters your facility is the first line of defense. UDS implements multi-factor authentication systems for high-security environments like server rooms, labs, and corporate HQs.",
      "We integrate Biometric (Fingerprint/Retina) scanners and RFID card readers directly with your HRMS payroll systems for seamless attendance tracking.",
      "Our flap barriers, turnstiles, and boom barriers are designed to handle high footfall while preventing tailgating and unauthorized entry."
    ],
    features: [
      "Biometric & Retina Scanners",
      "RFID & NFC Card Integration",
      "Flap Barriers & Turnstiles",
      "Visitor Management Systems (VMS)"
    ],
    gradient: "from-emerald-500 to-teal-600",
    subServices: [
      {
        title: "Biometric Systems",
        description: "Fingerprint and retina scanners with multi-factor authentication for high-security zones.",
        image: "/images/services/subservices/access-biometric.jpg"
      },
      {
        title: "RFID Integration",
        description: "Proximity card readers and NFC systems integrated with HRMS for attendance tracking.",
        image: "/images/services/subservices/access-rfid.jpg"
      },
      {
        title: "Barriers & Turnstiles",
        description: "Flap barriers, tripod turnstiles, and boom gates for high-footfall entry management.",
        image: "/images/services/subservices/access-turnstiles.jpg"
      }
    ]
  }
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find(service => service.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map(service => service.slug);
}
