// Shared scope/deliverables/benefits, common to every engagement, shown on expand.
export const engagementStandard = {
  scope: [
    'Detailed assessment of client requirements and objectives',
    'Customized service plans and implementation roadmaps',
    'Ongoing monitoring, reporting, and performance evaluation',
    'Compliance with applicable accounting, auditing, and tax standards',
    'Risk identification and mitigation recommendations',
    'Process improvement and operational efficiency initiatives',
  ],
  deliverables: [
    'Professional reports and management summaries',
    'Financial analyses and compliance documentation',
    'Recommendations for business growth and risk reduction',
    'Action plans and implementation guidance',
  ],
  benefits: [
    'Improved financial transparency',
    'Stronger governance and controls',
    'Better decision-making through accurate information',
    'Reduced compliance and operational risks',
    'Scalable support for international growth',
  ],
}

export const categories = [
  {
    id: 'firm',
    label: 'Firm & Delivery',
    icon: 'Building2',
    tagline: 'How the practice is run, and how it reaches clients anywhere in the world.',
    services: [
      {
        title: 'Executive Summary',
        blurb: 'Professional accounting, auditing, and tax solutions for startups, SMEs, corporations, nonprofits, and international businesses.',
        icon: 'FileText',
      },
      {
        title: 'Firm Overview',
        blurb: 'Mission, values, quality standards, ethics, confidentiality, and client service philosophy.',
        icon: 'ShieldCheck',
      },
      {
        title: 'Global Service Delivery Model',
        blurb: 'Remote engagements, cloud collaboration, secure document management, and international support.',
        icon: 'Globe2',
      },
      {
        title: 'Industries Served & Client Engagement Process',
        blurb: 'Startups, SMEs, e-commerce, manufacturing, NGOs, healthcare, and professional services, with a clear engagement lifecycle.',
        icon: 'Users',
      },
    ],
  },
  {
    id: 'accounting',
    label: 'Accounting & Bookkeeping',
    icon: 'Calculator',
    tagline: 'End-to-end financial management, from daily transactions to CFO-level strategy.',
    services: [
      {
        title: 'Accounting Services Overview',
        blurb: 'End-to-end accounting and financial management services.',
        icon: 'BookOpenCheck',
      },
      {
        title: 'Bookkeeping Services',
        blurb: 'Transaction recording, reconciliations, ledgers, month-end close, and reporting.',
        icon: 'NotebookPen',
      },
      {
        title: 'Financial Statement Preparation',
        blurb: 'IFRS-compliant and management financial reporting.',
        icon: 'FileBarChart2',
      },
      {
        title: 'Management Accounting',
        blurb: 'Budgets, forecasts, KPI reporting, variance analysis, and business insights.',
        icon: 'LineChart',
      },
      {
        title: 'Accounts Payable Management',
        blurb: 'Vendor setup, invoice processing, payments, and controls.',
        icon: 'Receipt',
      },
      {
        title: 'Accounts Receivable Management',
        blurb: 'Invoicing, collections, aging reports, and credit control.',
        icon: 'HandCoins',
      },
      {
        title: 'Payroll Accounting Services',
        blurb: 'Payroll processing, benefits accounting, and compliance support.',
        icon: 'Wallet',
      },
      {
        title: 'Cash Flow Management',
        blurb: 'Cash forecasting, liquidity monitoring, and treasury support.',
        icon: 'Droplets',
      },
      {
        title: 'Virtual CFO Services',
        blurb: 'Strategic finance leadership and executive-level financial guidance.',
        icon: 'Crown',
      },
      {
        title: 'Accounting System Setup',
        blurb: 'Cloud accounting implementation and process optimization.',
        icon: 'Settings2',
      },
    ],
  },
  {
    id: 'audit',
    label: 'Audit & Assurance',
    icon: 'ClipboardCheck',
    tagline: 'Independent assurance, governance, and risk services built on ISA standards.',
    services: [
      {
        title: 'Audit & Assurance Overview',
        blurb: 'Independent assurance and governance-focused services.',
        icon: 'ClipboardCheck',
      },
      {
        title: 'Internal Audit Services',
        blurb: 'Risk-based audits, control testing, and audit reporting.',
        icon: 'SearchCheck',
      },
      {
        title: 'External Audit Support',
        blurb: 'Audit preparation, schedules, and auditor liaison support.',
        icon: 'FileSearch',
      },
      {
        title: 'Internal Controls Review',
        blurb: 'Design and assessment of financial and operational controls.',
        icon: 'Lock',
      },
      {
        title: 'Risk Management Services',
        blurb: 'Enterprise risk assessments and mitigation planning.',
        icon: 'ShieldAlert',
      },
      {
        title: 'Compliance Audits',
        blurb: 'Regulatory and policy compliance reviews.',
        icon: 'ListChecks',
      },
      {
        title: 'Fraud Risk Assessment',
        blurb: 'Fraud prevention, detection procedures, and investigation support.',
        icon: 'Fingerprint',
      },
      {
        title: 'Due Diligence Services',
        blurb: 'Financial and operational due diligence for investors and acquisitions.',
        icon: 'Search',
      },
    ],
  },
  {
    id: 'tax',
    label: 'Tax Advisory',
    icon: 'Landmark',
    tagline: 'Compliance and planning across corporate, cross-border, and indirect tax.',
    services: [
      {
        title: 'Tax Services Overview',
        blurb: 'Comprehensive tax compliance and advisory solutions.',
        icon: 'Landmark',
      },
      {
        title: 'Corporate Tax Services',
        blurb: 'Corporate tax compliance, planning, and advisory.',
        icon: 'Building',
      },
      {
        title: 'International Tax Services',
        blurb: 'Cross-border tax considerations and global tax support.',
        icon: 'Globe',
      },
      {
        title: 'VAT/GST & Indirect Tax Services',
        blurb: 'Registration, compliance, reporting, and advisory.',
        icon: 'Percent',
      },
      {
        title: 'Tax Planning & Optimization',
        blurb: 'Legally efficient tax strategies and forecasting.',
        icon: 'TrendingUp',
      },
      {
        title: 'Tax Audit & Dispute Support',
        blurb: 'Assistance with tax audits, notices, and documentation.',
        icon: 'Gavel',
      },
    ],
  },
]

export const caseStudy = {
  client: 'Confidential Insurance Client',
  industry: 'Insurance & Financial Services',
  summary:
    'Provided end-to-end audit, accounting and tax services ensuring compliance, risk mitigation and financial accuracy.',
  challenge: 'Regulatory complexity and high-risk financial estimates.',
  approach: 'Reviewed actuarial estimates, ensured IFRS compliance and validated disclosures.',
  results: ['Improved compliance', 'Reduced regulatory risk', 'Accurate financial reporting'],
  services: [
    { area: 'Audit', deliverables: 'Risk assessment, substantive testing, audit opinion' },
    { area: 'Accounting', deliverables: 'Financial statements, reconciliations, reporting' },
    { area: 'Tax', deliverables: 'Tax computation, compliance, advisory' },
  ],
  conclusion:
    'Engagement delivered in line with IFRS, ISAs and regulatory requirements, ensuring high-quality outcomes and client satisfaction.',
}
