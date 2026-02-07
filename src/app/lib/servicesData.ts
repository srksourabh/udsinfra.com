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
    shortDesc: "Heavy structural foundations, bridges, and highways. We build the backbone of India.",
    mainImage: "/images/services/civil-construction.webp",
    detailTitle: "Heavy Civil Engineering & Structural Integrity",
    detailContent: [
      "As a new arm of the 16-year-old Ultimate Group, UDS Infrastructure inherits a legacy of robust execution. Our Civil division focuses on the heavy-lifting required for nation-building: highways, bridges, and deep-foundation industrial structures.",
      "We deploy a modern fleet of excavators, graders, and batching plants to ensure rapid project turnaround. Our expertise lies in navigating complex soil conditions across India, utilizing advanced piling and soil stabilization techniques.",
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
        description: "Bored piling, driven piles, and soil stabilization for challenging terrain conditions across India.",
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
      "Fire safety is an engineered guarantee, not an afterthought. UDS designs compliant hydraulic networks that meet strict National Building Code (NBC) and State Fire Services standards.",
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
  },
  {
    id: "07",
    slug: "mechanical-erection",
    title: "Mechanical (Erection & T&C)",
    icon: "Wrench",
    shortDesc: "Heavy mechanical erection, piping networks, and testing & commissioning for industrial plants.",
    mainImage: "/images/services/mechanical-erection.jpg",
    detailTitle: "Mechanical Erection & Commissioning",
    detailContent: [
      "UDS Infrastructure delivers end-to-end mechanical erection services for process plants, refineries, and heavy industrial facilities. Our teams handle structural steel erection, equipment installation, and precision alignment—ensuring every component meets OEM specifications.",
      "Our piping division executes complex networks including high-pressure steam lines, process piping, and utility headers. We employ certified welders and use radiographic testing (RT) to guarantee joint integrity across all pressure classes.",
      "Beyond installation, our Testing & Commissioning (T&C) teams conduct systematic pre-commissioning checks, loop testing, and performance trials to ensure every system delivers rated output from day one."
    ],
    features: [
      "Structural Steel & Equipment Erection",
      "Process & Utility Piping Networks",
      "Pre-Commissioning & Loop Testing",
      "Performance Guarantee Trials"
    ],
    gradient: "from-orange-600 to-orange-800",
    subServices: [
      {
        title: "Steel Erection",
        description: "Heavy structural steel erection, equipment installation, and precision alignment for industrial plants and refineries.",
        image: "/images/services/subservices/mechanical-erection.jpg"
      },
      {
        title: "Industrial Piping",
        description: "High-pressure process piping, utility headers, and steam line installation with certified welding and RT inspection.",
        image: "/images/services/subservices/mechanical-piping.jpg"
      },
      {
        title: "Testing & Commissioning",
        description: "Systematic pre-commissioning checks, loop testing, and performance trials to ensure rated output.",
        image: "/images/services/subservices/mechanical-commissioning.jpg"
      }
    ]
  },
  {
    id: "08",
    slug: "mep-hvac",
    title: "MEP (HVAC-AMC)",
    icon: "Wind",
    shortDesc: "Annual maintenance contracts for HVAC, chillers, and complete MEP systems.",
    mainImage: "/images/services/mep-hvac.jpg",
    detailTitle: "MEP & HVAC Maintenance Contracts",
    detailContent: [
      "UDS Infrastructure provides comprehensive Annual Maintenance Contracts (AMC) for Mechanical, Electrical, and Plumbing (MEP) systems. Our preventive maintenance programs extend equipment life, reduce energy consumption, and prevent costly unplanned breakdowns.",
      "Our HVAC specialists service all major chiller brands, AHUs, and VRF systems. We perform quarterly deep-cleaning, refrigerant top-ups, compressor health checks, and BMS calibration to maintain peak cooling efficiency year-round.",
      "Beyond HVAC, our MEP AMC covers electrical panels, DG sets, plumbing networks, and fire pump rooms—giving facility managers a single-window solution for all building services maintenance."
    ],
    features: [
      "Chiller & AHU Preventive Maintenance",
      "VRF/VRV System Servicing",
      "Ductwork Cleaning & Sanitization",
      "Energy Audit & Optimization"
    ],
    gradient: "from-sky-500 to-indigo-600",
    subServices: [
      {
        title: "Preventive Maintenance",
        description: "Scheduled maintenance programs for HVAC systems including quarterly deep-cleaning and performance audits.",
        image: "/images/services/subservices/mep-maintenance.jpg"
      },
      {
        title: "Chiller Plant Services",
        description: "Centrifugal and screw chiller servicing, refrigerant management, and compressor health monitoring.",
        image: "/images/services/subservices/mep-chiller.jpg"
      },
      {
        title: "Ductwork Services",
        description: "Duct fabrication, installation, cleaning, and sanitization for optimal indoor air quality.",
        image: "/images/services/subservices/mep-ductwork.jpg"
      }
    ]
  },
  {
    id: "09",
    slug: "instrumentation-control",
    title: "Instrumentation & Control",
    icon: "Gauge",
    shortDesc: "PLC/SCADA systems, field instrumentation, and industrial automation solutions.",
    mainImage: "/images/services/instrumentation-control.jpg",
    detailTitle: "Industrial Instrumentation & Automation",
    detailContent: [
      "UDS Infrastructure engineers end-to-end instrumentation and control solutions for process industries, power plants, and manufacturing facilities. We design and install field instruments—pressure transmitters, flow meters, level sensors, and temperature elements—with precision calibration.",
      "Our automation team programs PLC and DCS systems, builds SCADA interfaces, and integrates disparate subsystems into unified control architectures. We support all major platforms including Siemens, Allen-Bradley, ABB, and Honeywell.",
      "From control panel fabrication to MCC wiring and loop testing, we deliver turnkey automation projects that improve process reliability, reduce human error, and enable real-time decision-making from centralized control rooms."
    ],
    features: [
      "Field Instrument Installation & Calibration",
      "PLC/DCS Programming & Integration",
      "SCADA & HMI Development",
      "Control Panel Fabrication & Wiring"
    ],
    gradient: "from-indigo-500 to-violet-700",
    subServices: [
      {
        title: "Field Instrumentation",
        description: "Installation and calibration of pressure, flow, level, and temperature instruments for process plants.",
        image: "/images/services/subservices/ic-instrumentation.jpg"
      },
      {
        title: "Control Panels",
        description: "PLC panel fabrication, MCC wiring, and relay logic design for industrial automation systems.",
        image: "/images/services/subservices/ic-panels.jpg"
      },
      {
        title: "SCADA & HMI",
        description: "Supervisory control systems with real-time monitoring, alarm management, and historical data trending.",
        image: "/images/services/subservices/ic-scada.jpg"
      }
    ]
  },
  {
    id: "10",
    slug: "fleet-management",
    title: "Fleet Management & Logistics",
    icon: "Truck",
    shortDesc: "GPS-tracked fleet operations, supply chain logistics, and vehicle maintenance programs.",
    mainImage: "/images/services/fleet-management.jpg",
    detailTitle: "Fleet Operations & Logistics Management",
    detailContent: [
      "UDS Infrastructure operates a modern fleet of commercial vehicles and construction equipment, providing reliable logistics support for infrastructure projects across India. Our GPS-tracked vehicles ensure real-time visibility and on-time delivery of materials and equipment.",
      "Our logistics division manages end-to-end supply chains—from vendor coordination and material procurement to last-mile delivery at remote project sites. We optimize routes, consolidate shipments, and maintain cold-chain integrity where required.",
      "A dedicated vehicle maintenance program with preventive schedules, breakdown response teams, and compliance tracking ensures maximum fleet uptime and regulatory adherence across all states."
    ],
    features: [
      "GPS Fleet Tracking & Telematics",
      "Material Supply Chain Management",
      "Last-Mile Project Site Delivery",
      "Preventive Vehicle Maintenance"
    ],
    gradient: "from-lime-600 to-green-700",
    subServices: [
      {
        title: "GPS Fleet Tracking",
        description: "Real-time vehicle tracking with telematics, route optimization, and driver behavior monitoring.",
        image: "/images/services/subservices/fleet-tracking.jpg"
      },
      {
        title: "Supply Chain Logistics",
        description: "End-to-end material procurement, warehousing, and last-mile delivery for construction projects.",
        image: "/images/services/subservices/fleet-logistics.jpg"
      },
      {
        title: "Vehicle Maintenance",
        description: "Preventive maintenance programs, breakdown response, and regulatory compliance management.",
        image: "/images/services/subservices/fleet-maintenance.jpg"
      }
    ]
  },
  {
    id: "11",
    slug: "equipment-rentals",
    title: "Construction Equipment Rentals",
    icon: "Crane",
    shortDesc: "Excavators, cranes, scaffolding, and material handling equipment on flexible rental terms.",
    mainImage: "/images/services/equipment-rentals.jpg",
    detailTitle: "Construction Equipment Rental Solutions",
    detailContent: [
      "UDS Infrastructure maintains a diverse fleet of construction equipment available on daily, weekly, or project-based rental terms. From 20-ton excavators to tower cranes, we provide well-maintained machinery with trained operators to keep your project on schedule.",
      "Our material handling range includes forklifts, telehandlers, and pallet trucks for warehouse and construction site logistics. All equipment undergoes rigorous pre-dispatch inspections and comes with 24/7 breakdown support.",
      "We also supply scaffolding systems, formwork, and shoring solutions for high-rise and industrial projects. Our engineering team assists with scaffold design, load calculations, and safety compliance documentation."
    ],
    features: [
      "Heavy Earthmoving Equipment",
      "Cranes & Lifting Solutions",
      "Material Handling Equipment",
      "Scaffolding & Formwork Systems"
    ],
    gradient: "from-amber-600 to-yellow-800",
    subServices: [
      {
        title: "Heavy Equipment",
        description: "Excavators, backhoe loaders, bulldozers, and graders with trained operators for earthmoving projects.",
        image: "/images/services/subservices/rental-heavy.jpg"
      },
      {
        title: "Material Handling",
        description: "Forklifts, telehandlers, and pallet trucks for construction sites and warehouses with 24/7 support.",
        image: "/images/services/subservices/rental-material.jpg"
      },
      {
        title: "Scaffolding & Formwork",
        description: "Modular scaffolding systems, formwork, and shoring with engineering design and safety compliance.",
        image: "/images/services/subservices/rental-scaffolding.jpg"
      }
    ]
  },
  {
    id: "12",
    slug: "medical-equipment",
    title: "Medical Equipment Services",
    icon: "Heartbeat",
    shortDesc: "Hospital equipment supply, AMC contracts, and biomedical engineering support.",
    mainImage: "/images/services/medical-equipment.jpg",
    detailTitle: "Medical Equipment & Biomedical Services",
    detailContent: [
      "UDS Infrastructure extends its engineering expertise into the healthcare sector, providing end-to-end medical equipment services. We supply, install, and commission diagnostic imaging systems, patient monitoring equipment, and critical care devices for hospitals and clinics.",
      "Our biomedical engineering team offers comprehensive Annual Maintenance Contracts (AMC) covering preventive maintenance, calibration, and emergency repairs for all major OEM brands. We maintain detailed service logs and ensure uptime SLAs for mission-critical equipment.",
      "For hospitals looking to scale without heavy capital expenditure, we offer flexible equipment rental programs—from short-term ICU ventilator rentals to long-term imaging equipment leases—complete with operator training and consumable supply chains."
    ],
    features: [
      "Medical Equipment Supply & Installation",
      "Biomedical AMC & Calibration",
      "Equipment Rental & Leasing",
      "Operator Training & Support"
    ],
    gradient: "from-pink-500 to-rose-700",
    subServices: [
      {
        title: "Equipment Supply",
        description: "Procurement and installation of diagnostic imaging, patient monitoring, and critical care equipment.",
        image: "/images/services/subservices/medical-supply.jpg"
      },
      {
        title: "Biomedical AMC",
        description: "Preventive maintenance, calibration, and emergency repair contracts with guaranteed uptime SLAs.",
        image: "/images/services/subservices/medical-amc.jpg"
      },
      {
        title: "Equipment Rental",
        description: "Flexible short-term and long-term medical equipment leasing with operator training included.",
        image: "/images/services/subservices/medical-rental.jpg"
      }
    ]
  },
  {
    id: "13",
    slug: "facility-management",
    title: "Facility Management",
    icon: "Users",
    shortDesc: "Integrated facility management—technical maintenance, housekeeping, and security services.",
    mainImage: "/images/services/facility-management.jpg",
    detailTitle: "Integrated Facility Management (IFM)",
    detailContent: [
      "UDS Infrastructure provides single-window Integrated Facility Management (IFM) for corporate offices, IT parks, hospitals, and industrial campuses. Our model covers hard services (MEP maintenance, civil upkeep) and soft services (housekeeping, security, landscaping) under one SLA-driven contract.",
      "Our technical maintenance teams handle electrical systems, HVAC, plumbing, and fire safety equipment with preventive schedules that minimize downtime. Every task is logged in our digital CAFM platform for full transparency and audit trails.",
      "On the soft services front, we deploy trained housekeeping crews, uniformed security personnel with access control integration, and pantry management teams—ensuring your facility operates at peak efficiency while you focus on your core business."
    ],
    features: [
      "Technical & MEP Maintenance",
      "Housekeeping & Janitorial Services",
      "Security & Access Management",
      "CAFM Digital Platform"
    ],
    gradient: "from-blue-500 to-blue-700",
    subServices: [
      {
        title: "Technical Maintenance",
        description: "Preventive and breakdown maintenance for electrical, HVAC, plumbing, and fire safety systems.",
        image: "/images/services/subservices/facility-technical.jpg"
      },
      {
        title: "Housekeeping Services",
        description: "Trained cleaning crews with modern equipment for offices, hospitals, and industrial facilities.",
        image: "/images/services/subservices/facility-housekeeping.jpg"
      },
      {
        title: "Security Services",
        description: "Uniformed security personnel with access control integration and CCTV monitoring capabilities.",
        image: "/images/services/subservices/facility-security.jpg"
      }
    ]
  },
  {
    id: "14",
    slug: "pest-control",
    title: "Pest Control",
    icon: "Bug",
    shortDesc: "Commercial pest management, termite treatment, and fumigation services.",
    mainImage: "/images/services/pest-control.jpg",
    detailTitle: "Professional Pest Management Solutions",
    detailContent: [
      "UDS Infrastructure offers IPCA-certified pest management services for commercial buildings, warehouses, food processing units, and healthcare facilities. Our Integrated Pest Management (IPM) approach combines chemical, biological, and mechanical controls for long-term pest elimination.",
      "Our anti-termite division provides pre-construction and post-construction soil treatment using approved chemicals. We issue termite-free certificates recognized by major real estate developers and comply with IS 6313 standards for building protection.",
      "For warehouses and export facilities, we provide container fumigation, commodity fumigation, and heat treatment services compliant with ISPM-15 international standards. All treatments are documented with detailed reports for regulatory audits."
    ],
    features: [
      "Integrated Pest Management (IPM)",
      "Anti-Termite Soil Treatment (IS 6313)",
      "Container & Commodity Fumigation",
      "HACCP-Compliant Food Safety Pest Control"
    ],
    gradient: "from-green-600 to-emerald-800",
    subServices: [
      {
        title: "Commercial Pest Control",
        description: "IPM-based pest management for offices, hospitals, hotels, and food processing facilities.",
        image: "/images/services/subservices/pest-commercial.jpg"
      },
      {
        title: "Anti-Termite Treatment",
        description: "Pre and post-construction soil treatment with IS 6313 compliance and termite-free certification.",
        image: "/images/services/subservices/pest-termite.jpg"
      },
      {
        title: "Fumigation Services",
        description: "Container, commodity, and structural fumigation compliant with ISPM-15 international standards.",
        image: "/images/services/subservices/pest-fumigation.jpg"
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
