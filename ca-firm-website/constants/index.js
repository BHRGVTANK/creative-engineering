
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  ShieldCheck, 
  Users, 
  Building2, 
  Briefcase, 
  Globe, 
  BarChart3,
  Scale
} from 'lucide-react';

export const SITE_CONFIG = {
  name: "CA Bhargav Tank & Associates",
  designation: "Chartered Accountants",
  email: "contact@cabhargavtank.com",
  phone: "+91 98765 43210",
  address: "405, Prestige Business Hub, MG Road, Bangalore, Karnataka - 560001",
  workingHours: "Mon - Sat: 10:00 AM - 7:00 PM",
  socials: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  }
};

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export const SERVICES = [
  {
    id: "audit-assurance",
    title: "Audit & Assurance",
    slug: "audit-assurance",
    icon: ShieldCheck,
    shortDescription: "Comprehensive statutory and internal audit services ensuring financial accuracy and regulatory compliance.",
    fullDescription: "Our Audit & Assurance services go beyond the numbers. We provide a rigorous evaluation of your financial statements, internal controls, and business processes to ensure transparency and build stakeholder trust.",
    features: [
      "Statutory Audit under Companies Act",
      "Internal Audit & Control Review",
      "Tax Audit under Income Tax Act",
      "Stock & Receivables Audit",
      "Forensic Audit Services"
    ],
    benefits: [
      "Enhanced financial credibility",
      "Risk identification and mitigation",
      "Compliance with all statutory norms",
      "Improved operational efficiency"
    ]
  },
  {
    id: "income-tax",
    title: "Income Tax Advisory",
    slug: "income-tax",
    icon: Calculator,
    shortDescription: "Strategic tax planning, filing, and litigation support for individuals and corporates.",
    fullDescription: "Navigate the complex landscape of direct taxation with our expert advisory. We help you optimize your tax liabilities while ensuring 100% compliance with the latest Income Tax regulations.",
    features: [
      "Corporate & Individual Tax Filing",
      "Tax Planning & Optimization",
      "Handling Scrutiny & Assessments",
      "TDS/TCS Compliance",
      "International Transfer Pricing"
    ],
    benefits: [
      "Minimized tax liability legally",
      "Timely compliance avoiding penalties",
      "Expert representation in litigations",
      "Stress-free tax season"
    ]
  },
  {
    id: "gst-compliance",
    title: "GST Compliance & Advisory",
    slug: "gst-compliance",
    icon: FileText,
    shortDescription: "End-to-end GST solutions including registration, filing, and advisory for seamless business operations.",
    fullDescription: "GST laws are dynamic and evolving. Our dedicated team ensures your business stays ahead of the curve with accurate filings, timely input tax credit reconciliation, and strategic advice on GST implications.",
    features: [
      "GST Registration & Amendments",
      "Monthly/Quarterly Return Filing",
      "GST Audits & Annual Returns",
      "E-Way Bill Advisory",
      "GST Refund Assistance"
    ],
    benefits: [
      "Seamless input tax credit flow",
      "Avoidance of interest and penalties",
      "Clarity on complex GST rates",
      "Smooth interstate trade operations"
    ]
  },
  {
    id: "roc-compliance",
    title: "ROC & Company Law",
    slug: "roc-compliance",
    icon: Building2,
    shortDescription: "Complete corporate secretarial services ensuring compliance with the Ministry of Corporate Affairs.",
    fullDescription: "From incorporation to winding up, we handle all your Registrar of Companies (ROC) compliances. We ensure your company governance meets the highest standards of the Companies Act, 2013.",
    features: [
      "Company Incorporation (Pvt Ltd, LLP, OPC)",
      "Annual Filing (MGT-7, AOC-4)",
      "Director KYC & Appointments",
      "Share Transfer & Allotment",
      "Strike-off & Liquidation"
    ],
    benefits: [
      "Legally compliant corporate structure",
      "Avoidance of heavy late fees",
      "Smooth fundraising & equity management",
      "Proper maintenance of statutory registers"
    ]
  },
  {
    id: "accounting-bookkeeping",
    title: "Accounting & Bookkeeping",
    slug: "accounting-bookkeeping",
    icon: Briefcase,
    shortDescription: "Professional accounting services to maintain accurate financial records and reports.",
    fullDescription: "Focus on your core business while we handle your books. We provide outsourced accounting services using modern software to give you real-time visibility into your financial health.",
    features: [
      "End-to-End Bookkeeping",
      "Payroll Processing",
      "Financial Statement Preparation",
      "Accounts Payable/Receivable Management",
      "MIS Reporting"
    ],
    benefits: [
      "Accurate financial data",
      "Cost-effective compared to in-house team",
      "Scalable support as you grow",
      "Ready-to-audit books at year-end"
    ]
  },
  {
    id: "business-advisory",
    title: "Business Advisory",
    slug: "business-advisory",
    icon: TrendingUp,
    shortDescription: "Strategic consulting to help businesses grow, restructure, and optimize performance.",
    fullDescription: "We partner with you to drive growth. Our advisory services cover business structuring, process improvement, and strategic planning to help you overcome challenges and seize opportunities.",
    features: [
      "Business Structuring & Restructuring",
      "Standard Operating Procedures (SOPs)",
      "Valuation Services",
      "Mergers & Acquisitions",
      "Due Diligence"
    ],
    benefits: [
      "Informed decision making",
      "Optimized business processes",
      "Successful deal closures",
      "Clear growth roadmap"
    ]
  },
  {
    id: "startup-services",
    title: "Startup & MSME Services",
    slug: "startup-services",
    icon: Users,
    shortDescription: "Specialized support for startups including registration, funding compliance, and MSME benefits.",
    fullDescription: "We understand the unique pulse of startups. Our package includes everything a founder needs to launch and scale, from DIPP recognition to compliance for fundraising.",
    features: [
      "Startup India Registration",
      "MSME/Udyam Registration",
      "Founders' Agreement Drafting",
      "Seed Funding Compliance",
      "ESOP Structuring"
    ],
    benefits: [
      "Access to government schemes",
      "Investor-ready compliance",
      "Protection of intellectual property",
      "Structured equity distribution"
    ]
  },
  {
    id: "financial-consulting",
    title: "Financial Consulting",
    slug: "financial-consulting",
    icon: BarChart3,
    shortDescription: "Expert financial planning, budgeting, and forecasting for sustainable wealth creation.",
    fullDescription: "Secure your financial future with our consulting services. We help businesses and high-net-worth individuals manage their wealth, plan investments, and secure financing.",
    features: [
      "Project Financing & Loan Syndication",
      "Cash Flow Management",
      "Budgeting & Forecasting",
      "Investment Advisory",
      "Debt Restructuring"
    ],
    benefits: [
      "Better liquidity management",
      "Access to capital at right rates",
      "Long-term wealth preservation",
      "Financial discipline"
    ]
  },
    {
    id: "virtual-cfo",
    title: "Virtual CFO Services",
    slug: "virtual-cfo",
    icon: Globe,
    shortDescription: "High-level financial strategy and leadership for growing businesses without the cost of a full-time CFO.",
    fullDescription: "Get the strategic guidance of a Chief Financial Officer at a fraction of the cost. We act as your strategic partner, guiding financial decisions, attending board meetings, and driving profitability.",
    features: [
      "Strategic Financial Planning",
      "Board Reporting & Presentation",
      "Investor Relations Management",
      "Cost Optimization Strategies",
      "Risk Management Framework"
    ],
    benefits: [
      "Strategic financial leadership",
      "Data-driven decision making",
      "Improved investor confidence",
      "Scalable financial oversight"
    ]
  },
  {
    id: "international-taxation",
    title: "International Taxation",
    slug: "international-taxation",
    icon: Scale,
    shortDescription: "Expert guidance on cross-border transactions, DTAA, and expatriate taxation.",
    fullDescription: "In a globalized economy, cross-border transactions require careful planning. We assist businesses and individuals in navigating international tax laws, double taxation avoidance agreements (DTAA), and transfer pricing.",
    features: [
      "DTAA Advisory",
      "Transfer Pricing Study & Report",
      "Expatriate Taxation",
      "FEMA Compliance",
      "Foreign Subsidiary Incorporation"
    ],
    benefits: [
      "Global compliance assurance",
      "Prevention of double taxation",
      "Smooth cross-border fund flow",
      "Regulatory adherence for FDI/ODI"
    ]
  }
];

export const INDUSTRIES = [
  {
    title: "Startups & Tech",
    description: "SaaS, E-commerce, and Fintech companies requiring high-growth compliance and funding support."
  },
  {
    title: "Manufacturing",
    description: "Factories and production units needing rigorous inventory audits, GST compliance, and cost accounting."
  },
  {
    title: "Service Professionals",
    description: "Doctors, Architects, and Consultants needing simplified tax filing and wealth management."
  },
  {
    title: "Retail & Trading",
    description: "Wholesalers and retailers requiring stock audits, GST management, and working capital advisory."
  },
  {
    title: "Real Estate & Construction",
    description: "Developers and contractors needing RERA compliance, project financing, and specialized accounting."
  },
  {
    title: "Non-Profits (NGOs)",
    description: "Trusts and Societies requiring 12A/80G registration, FCRA compliance, and grant audits."
  }
];

export const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    role: "Founder, TechFlow Solutions",
    content: "CA Bhargav Tank's team helped us navigate the complex startup compliance landscape effortlessly. Their advice on ESOPs was invaluable."
  },
  {
    name: "Anita Desai",
    role: "Director, Desai Manufacturing",
    content: "We have been associated with them for 5 years. Their audit processes are thorough and have helped us plug several revenue leakages."
  },
  {
    name: "Dr. Sameer Patel",
    role: "Chief Surgeon, City Care Hospital",
    content: "Professional, prompt, and precise. They handle my personal and clinic taxes perfectly, letting me focus on my patients."
  }
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description: "We begin by understanding your business structure, pain points, and financial goals through a detailed consultation."
  },
  {
    number: "02",
    title: "Analysis",
    description: "Our team analyzes your current financial data, compliance status, and risks to identify gaps and opportunities."
  },
  {
    number: "03",
    title: "Strategy",
    description: "We develop a tailored roadmap addressing tax planning, compliance schedules, and growth strategies."
  },
  {
    number: "04",
    title: "Execution",
    description: "Our experts implement the plan with precision, handling all filings, audits, and documentation."
  },
  {
    number: "05",
    title: "Review",
    description: "Regular reviews and reports ensure you stay informed and aligned with your financial objectives."
  }
];

export const ARTICLES = [
  {
    id: "tax-update-fy-2023-24",
    slug: "key-changes-income-tax-fy-2023-24",
    category: "Tax Update",
    date: "Oct 15, 2023",
    title: "Key Changes in Income Tax for FY 2023-24",
    excerpt: "Understanding the new tax regime and its impact on salaried employees and professionals.",
    icon: FileText,
    content: `
      <p>The Union Budget 2023-24 introduced significant changes to the personal income tax regime, aiming to simplify the tax structure and provide relief to taxpayers. One of the most notable changes is the revision of the slab rates under the New Tax Regime, which has now become the default regime.</p>
      
      <h3>Key Highlights:</h3>
      <ul>
        <li><strong>New Tax Slabs:</strong> The basic exemption limit has been increased to ₹3 lakh from ₹2.5 lakh. The income tax slabs have been reduced to five.</li>
        <li><strong>Rebate under Section 87A:</strong> The rebate limit has been increased to ₹7 lakh from ₹5 lakh in the new regime. This means individuals with income up to ₹7 lakh will not have to pay any tax.</li>
        <li><strong>Standard Deduction:</strong> The standard deduction of ₹50,000, which was previously available only under the old regime, has now been extended to the new tax regime as well.</li>
        <li><strong>Surcharge Rate:</strong> The highest surcharge rate on personal income tax has been reduced from 37% to 25% for high net worth individuals (HNIs) in the new tax regime.</li>
      </ul>

      <h3>Impact on Taxpayers</h3>
      <p>These changes are designed to encourage more taxpayers to shift to the new regime. However, the old regime still retains exemptions like HRA, LTA, and Section 80C deductions, which are not available in the new regime. Taxpayers should carefully evaluate both options to determine which one is more beneficial for their specific financial situation.</p>
    `
  },
  {
    id: "gst-annual-return-mistakes",
    slug: "gst-annual-return-common-mistakes",
    category: "Compliance",
    date: "Sep 28, 2023",
    title: "GST Annual Return: Common Mistakes to Avoid",
    excerpt: "A comprehensive guide to filing GSTR-9 and GSTR-9C correctly to avoid penalties.",
    icon: Users,
    content: `
      <p>Filing the GST Annual Return (GSTR-9) and Reconciliation Statement (GSTR-9C) is a critical compliance activity for businesses. Errors in these filings can lead to hefty penalties and prolonged litigation. Here are some common mistakes businesses make and how to avoid them.</p>

      <h3>1. Incorrect Input Tax Credit (ITC) Claims</h3>
      <p>One of the most common errors is claiming ITC that is ineligible or not reflected in GSTR-2A/2B. Ensure that you reconcile your purchase register with GSTR-2B before filing the annual return.</p>

      <h3>2. Mismatch in Turnover</h3>
      <p>Discrepancies between the turnover reported in the financial statements and the turnover declared in GSTR-9 can trigger notices. It is essential to reconcile these figures and provide a valid explanation for any differences in GSTR-9C.</p>

      <h3>3. Ignoring Reverse Charge Mechanism (RCM)</h3>
      <p>Many businesses fail to report RCM liabilities correctly. Ensure that all RCM liabilities are identified, paid, and reported in the annual return.</p>

      <h3>4. Reporting under Wrong Heads</h3>
      <p>Classifying supplies under incorrect tax heads (IGST vs. CGST/SGST) is a frequent mistake. While this can sometimes be adjusted, it is better to ensure accuracy at the source.</p>
    `
  },
  {
    id: "startup-india-registration",
    slug: "startup-india-registration-benefits-process",
    category: "Startups",
    date: "Sep 10, 2023",
    title: "Startup India Registration: Benefits & Process",
    excerpt: "How to register your startup with DPIIT and avail tax holidays and angel tax exemptions.",
    icon: Building2,
    content: `
      <p>The Startup India initiative by the Government of India offers numerous benefits to eligible startups, including tax exemptions, easier compliance, and access to funding. However, many founders are unaware of the registration process and the specific benefits they can claim.</p>

      <h3>Benefits of DPIIT Recognition</h3>
      <ul>
        <li><strong>Tax Holiday:</strong> Eligible startups can apply for a tax exemption under Section 80-IAC of the Income Tax Act for 3 consecutive years out of their first 10 years.</li>
        <li><strong>Angel Tax Exemption:</strong> Recognized startups can claim exemption from angel tax on investments above fair market value.</li>
        <li><strong>Self-Certification:</strong> Startups can self-certify compliance with several labor and environmental laws for a period of 3 to 5 years.</li>
        <li><strong>Patent & Trademark Rebates:</strong> Startups are eligible for an 80% rebate in patent filing fees and a 50% rebate in trademark filing fees.</li>
      </ul>

      <h3>Registration Process</h3>
      <p>The registration process is entirely online. Startups need to submit an application on the Startup India portal along with documents such as the Certificate of Incorporation, a brief description of the business, and proof of concept.</p>
    `
  }
];
