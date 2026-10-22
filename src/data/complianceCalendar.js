/**
 * Compliance Calendar statutory deadlines data structure.
 * Clean, structured static records that can be updated each financial year.
 */

export const COMPLIANCE_DEADLINES = [
  {
    id: "gstr-1-monthly",
    category: "GST",
    title: "GSTR-1 Monthly Return",
    code: "GSTR-1",
    dayOfMonth: "11th",
    nextUpcoming: "11th of every month",
    frequency: "Monthly",
    description: "Details of outward supplies (sales invoices) for taxpayers with turnover > ₹5 Crores or monthly filers.",
    penaltyNote: "Late fee of ₹50/day (₹20/day for nil return) + blocking of subsequent GSTR-3B generation.",
    importance: "Critical"
  },
  {
    id: "gstr-1-iff-qrmp",
    category: "GST",
    title: "GSTR-1 IFF (QRMP Scheme)",
    code: "IFF / QRMP",
    dayOfMonth: "13th",
    nextUpcoming: "13th of month following M1 & M2",
    frequency: "Monthly (Optional)",
    description: "Invoice Furnishing Facility (IFF) for B2B invoices by quarterly taxpayers under QRMP.",
    penaltyNote: "Optional facility; missed invoices must be passed in quarterly GSTR-1, delaying buyer ITC.",
    importance: "Recommended"
  },
  {
    id: "epf-esi-remittance",
    category: "Payroll",
    title: "EPF & ESI Monthly Remittance",
    code: "ECR / ESIC",
    dayOfMonth: "15th",
    nextUpcoming: "15th of every month",
    frequency: "Monthly",
    description: "Electronic deposit of Provident Fund and Employee State Insurance contributions for preceding month.",
    penaltyNote: "Damages under Sec 14B up to 25% p.a. + employee deduction disallowance under Sec 36(1)(va).",
    importance: "Critical"
  },
  {
    id: "gstr-3b-monthly",
    category: "GST",
    title: "GSTR-3B Summary Return & Tax Payment",
    code: "GSTR-3B",
    dayOfMonth: "20th",
    nextUpcoming: "20th of every month",
    frequency: "Monthly",
    description: "Consolidated monthly return of outward supplies, input tax credit claimed, and net tax liability deposit.",
    penaltyNote: "Mandatory ₹50/day late fee + 18% p.a. interest on cash tax liability [VERIFY WITH CA].",
    importance: "Critical"
  },
  {
    id: "tds-challan-281",
    category: "Income Tax",
    title: "TDS / TCS Deposit (Challan 281)",
    code: "Challan ITNS 281",
    dayOfMonth: "7th",
    nextUpcoming: "7th of every month (April 30 for March)",
    frequency: "Monthly",
    description: "Deposit of tax deducted at source (TDS on contractor payments, rent, professional fees, salaries).",
    penaltyNote: "Interest of 1.5% per month or part of month for failure to deposit deducted tax.",
    importance: "Critical"
  },
  {
    id: "tds-quarterly-return",
    category: "Income Tax",
    title: "TDS Quarterly Return (Form 24Q / 26Q)",
    code: "Form 26Q & 24Q",
    dayOfMonth: "31st",
    nextUpcoming: "31st July, 31st Oct, 31st Jan, 31st May",
    frequency: "Quarterly",
    description: "Quarterly statement of tax deducted on salaries (24Q) and non-salary payments (26Q).",
    penaltyNote: "Mandatory fee of ₹200 per day under Section 234E until return is filed + Sec 271H penalty.",
    importance: "High"
  },
  {
    id: "advance-tax-installments",
    category: "Income Tax",
    title: "Advance Tax Installments",
    code: "Sec 208 / 211",
    dayOfMonth: "15th",
    nextUpcoming: "15 June (15%), 15 Sept (45%), 15 Dec (75%), 15 March (100%)",
    frequency: "Quarterly",
    description: "Payment of estimated annual income tax in prescribed percentages if tax liability exceeds ₹10,000.",
    penaltyNote: "Interest under Section 234C (1% per month for deferment) and Section 234B (for shortfall).",
    importance: "High"
  },
  {
    id: "itr-non-audit",
    category: "Income Tax",
    title: "Income Tax Return (Non-Audit Cases)",
    code: "ITR-1 to ITR-5",
    dayOfMonth: "31st July",
    nextUpcoming: "31st July of Assessment Year",
    frequency: "Annual",
    description: "Annual return for individuals, salaried, professionals, and MSMEs not subject to Tax Audit.",
    penaltyNote: "Late fee under Sec 234F up to ₹5,000 + loss of business loss carry-forward [VERIFY WITH CA].",
    importance: "Critical"
  },
  {
    id: "itr-tax-audit",
    category: "Income Tax",
    title: "Tax Audit Report & ITR (Audit Cases)",
    code: "Form 3CD & ITR-5/6",
    dayOfMonth: "30th Sept / 31st Oct",
    nextUpcoming: "TAR by 30th Sept; ITR by 31st Oct [VERIFY WITH CA]",
    frequency: "Annual",
    description: "Filing of Tax Audit Report by certifying CA and corporate/firm ITR for audited entities.",
    penaltyNote: "0.5% of turnover or ₹1,50,000 under Sec 271B for non-compliance with tax audit deadline.",
    importance: "Critical"
  },
  {
    id: "mca-aoc-4-mgt-7",
    category: "MCA",
    title: "Annual Corporate ROC Filings (AOC-4 & MGT-7)",
    code: "AOC-4 & MGT-7",
    dayOfMonth: "30 / 60 days post AGM",
    nextUpcoming: "Within 30/60 days of Annual General Meeting",
    frequency: "Annual",
    description: "Financial statements (AOC-4) and Annual Return (MGT-7/7A) submission with Registrar of Companies.",
    penaltyNote: "Statutory additional fee of ₹100 per day of delay without ceiling for both forms.",
    importance: "High"
  }
];
