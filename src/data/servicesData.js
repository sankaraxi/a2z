/**
 * Comprehensive service definitions for A2Z Associates, Coimbatore.
 * Formatted with clear categorization, documents checklist, process steps, and CA notes.
 */

export const SERVICE_CATEGORIES = [
  { id: "tax-compliance", label: "Tax & Compliance" },
  { id: "accounting-audit", label: "Accounting & Audit" },
  { id: "business-setup", label: "Business Setup & Advisory" }
];

export const SERVICES = [
  {
    id: "gst-registration",
    slug: "gst-registration",
    title: "GST Registration",
    shortTitle: "GST Registration",
    category: "tax-compliance",
    categoryLabel: "Tax & Compliance",
    oneLineBenefit: "End-to-end filing with zero jurisdictional rejection risk.",
    summary: "Mandatory statutory registration for traders, manufacturers, e-commerce sellers, and service providers with biometric verification and jurisdiction mapping.",
    whoItsFor: [
      "Goods suppliers crossing ₹40 Lakhs annual turnover [VERIFY WITH CA]",
      "Service providers crossing ₹20 Lakhs annual turnover [VERIFY WITH CA]",
      "Interstate traders and sellers on Amazon, Flipkart, or Meesho",
      "New businesses seeking formal bank credit and GST input tax credit (ITC)"
    ],
    keyDeliverables: [
      "Jurisdictional state/central office verification",
      "HSN/SAC code classification for your goods and services",
      "GSTIN certificate generation with ARN tracking",
      "Immediate onboarding assistance for tax invoice templates"
    ],
    documentsRequired: [
      { category: "Identity & PAN", items: ["PAN Card of Proprietor / Partners / Directors", "Aadhaar Card with linked mobile number"] },
      { category: "Premises Proof", items: ["Electricity bill or municipal tax receipt (< 2 months old)", "Registered Rent / Lease Agreement & NOC from owner (if rented)"] },
      { category: "Banking Proof", items: ["Cancelled cheque or first page of bank passbook / statement with IFSC"] },
      { category: "Constitutional Docs", items: ["Partnership Deed / Certificate of Incorporation (for LLP / Pvt Ltd)"] }
    ],
    processSteps: [
      { step: "01", title: "Preliminary Assessment", description: "Review business structure, turnover threshold, and applicable HSN/SAC classifications." },
      { step: "02", title: "Document Authentication", description: "Validate premises proof and verify electricity bill consumer numbers against TNEB records." },
      { step: "03", title: "Portal Submission & Aadhaar OTP", description: "Submit Form REG-01 with biometric OTP authentication to bypass physical inspection." },
      { step: "04", title: "GSTIN Issuance & Handover", description: "Receive official GST registration certificate (REG-06) within 3–7 working days." }
    ],
    statutoryTimeline: "3 to 7 working days (subject to portal processing and Aadhaar authentication)",
    pricingNote: "Transparent one-time professional filing fee [PLACEHOLDER - ₹1,499 - ₹2,999 + Govt charges]. Clear quotation provided upfront with zero hidden add-ons.",
    faqs: [
      {
        question: "Is physical verification of business premises required for GST?",
        answer: "If Aadhaar authentication of the proprietor or primary director succeeds, physical inspection is generally waived by the department. If Aadhaar authentication fails or discrepancies exist in TNEB bills, the GST officer may conduct a physical visit [VERIFY WITH CA]."
      },
      {
        question: "Can I register GST on a residential address in Coimbatore?",
        answer: "Yes, residential premises can be registered as the principal place of business provided you possess a valid electricity bill, property tax receipt, and an NOC from the property owner."
      },
      {
        question: "What happens if our turnover is below ₹40 Lakhs? Can we still register?",
        answer: "Yes, voluntary GST registration is permitted and widely adopted by Coimbatore manufacturers and sub-contractors so that business customers can claim Input Tax Credit on purchases."
      }
    ]
  },
  {
    id: "gst-filing",
    slug: "gst-filing",
    title: "GST Filing & Reconciliation",
    shortTitle: "GST Filing",
    category: "tax-compliance",
    categoryLabel: "Tax & Compliance",
    oneLineBenefit: "GSTR-1, 3B & 2B reconciliations done before deadline, every month.",
    summary: "Systematic monthly and quarterly return filing, automated GSTR-2B purchase reconciliation to safeguard Input Tax Credit, and instant notice handling.",
    whoItsFor: [
      "Registered proprietary, partnership, and corporate taxpayers in Tamil Nadu",
      "Manufacturers and traders claiming substantial monthly Input Tax Credit (ITC)",
      "Businesses receiving DRC-01B / DRC-01C mismatch notices from the GST portal",
      "Exporters claiming GST refunds on LUT (Letter of Undertaking)"
    ],
    keyDeliverables: [
      "Monthly GSTR-1 outward sales return generation",
      "Monthly GSTR-3B tax calculation and liability offset",
      "Purchase register vs GSTR-2B deep-dive reconciliation (zero lost ITC)",
      "Annual return GSTR-9 and reconciliation statement GSTR-9C advisory",
      "LUT (Letter of Undertaking) renewal for export businesses"
    ],
    documentsRequired: [
      { category: "Sales Data", items: ["Monthly sales invoices or sales register Excel / Tally backup", "Credit notes, debit notes, and export shipping bills (if any)"] },
      { category: "Purchase Data", items: ["Vendor purchase invoices and purchase register", "RCM (Reverse Charge Mechanism) expense vouchers"] },
      { category: "Bank & Tax Ledgers", items: ["Monthly current account bank statement for tax reconciliation", "Challan receipts of advance GST deposits"] }
    ],
    processSteps: [
      { step: "01", title: "Data Collection by 5th", description: "Collect sales and purchase ledgers digitally or via physical ledger pickup in Gandhipuram." },
      { step: "02", title: "GSTR-2B ITC Matching", description: "Cross-verify vendor filings against purchase bills to identify non-compliant suppliers." },
      { step: "03", title: "Tax Computation & Client Sign-off", description: "Calculate net payable tax after adjusting valid ITC and share liability statement for approval." },
      { step: "04", title: "Timely Filing & ARN Confirmation", description: "Submit returns prior to the 11th (GSTR-1) and 20th (GSTR-3B) with instant filing receipts." }
    ],
    statutoryTimeline: "Monthly recurring cycle: GSTR-1 by 11th, GSTR-3B by 20th of every month",
    pricingNote: "Custom monthly retainer based on invoice volume [PLACEHOLDER - ₹999 to ₹4,999/month]. Covers monthly filing, GSTR-2B matching, and routine notice defense.",
    faqs: [
      {
        question: "What is the penalty for filing GSTR-3B after the 20th?",
        answer: "The government levies a statutory late fee of ₹50 per day of delay (₹20/day for nil returns) plus 18% per annum interest calculated on the net cash tax liability [VERIFY WITH CA]."
      },
      {
        question: "How do you protect our firm from vendor tax defaults?",
        answer: "We perform automated monthly 2B matching before your GSTR-3B is filed. If a vendor hasn't filed their GSTR-1, we flag it immediately so you can hold payment until they comply, preventing ineligible ITC penalties."
      },
      {
        question: "Can you assist with pending DRC-01B and DRC-01C compliance notices?",
        answer: "Yes, our team drafts precise legal reconciliations explaining mathematical differences, invoice timing variations, or supplier revisions directly through the GST portal."
      }
    ]
  },
  {
    id: "income-tax-filing",
    slug: "income-tax-filing",
    title: "Income Tax Filing & Assessment",
    shortTitle: "Income Tax Filing",
    category: "tax-compliance",
    categoryLabel: "Tax & Compliance",
    oneLineBenefit: "Calculated tax optimization with meticulous audit-trail documentation.",
    summary: "Comprehensive ITR filing for individuals, professionals, partnership firms, LLPs, and companies under old and new tax regimes with AIS/TIS reconciliation.",
    whoItsFor: [
      "Business owners, manufacturers, and traders filing ITR-3, ITR-4 (Presumptive), or ITR-5",
      "Private limited companies and LLPs filing ITR-6",
      "High-net-worth individuals, doctors, and IT consultants in Coimbatore",
      "Entities with capital gains from real estate, mutual funds, or equity shares"
    ],
    keyDeliverables: [
      "Annual Information Statement (AIS) & Taxpayer Information Summary (TIS) audit",
      "Form 26AS TDS & TCS credit reconciliation",
      "Regime comparison (Old vs New) with computed net tax liability",
      "Depreciation schedules for machinery, plant, and commercial vehicles",
      "Computation sheet with official ITR acknowledgment (ITR-V)"
    ],
    documentsRequired: [
      { category: "Tax Statements", items: ["PAN card and Aadhaar card", "Form 16 (for salaried) or Form 16A (for TDS deducted on contracts/interest)"] },
      { category: "Financials", items: ["Profit & Loss account, Balance Sheet, and Trial Balance (for businesses)", "Bank statements of all active accounts for FY (April 1 to March 31)"] },
      { category: "Investments & Assets", items: ["Home loan interest certificates, life/health insurance premium receipts", "Property purchase/sale deeds for capital gains computation"] }
    ],
    processSteps: [
      { step: "01", title: "Financial & AIS Extraction", description: "Download and cross-check portal AIS, TIS, and 26AS data against physical records." },
      { step: "02", title: "Regime & Deduction Optimization", description: "Model liabilities under Section 115BAC (New) vs traditional regime to minimize tax lawfully." },
      { step: "03", title: "Draft Computation Review", description: "Present the structured tax computation and advance tax adjustments for your confirmation." },
      { step: "04", title: "E-Filing & Verification", description: "Submit return to CPC Bengaluru and execute e-verification via Aadhaar OTP or net banking." }
    ],
    statutoryTimeline: "Non-audit cases: July 31st; Audit cases: October 31st / November 30th [VERIFY WITH CA]",
    pricingNote: "Fixed tiered pricing: Individual/Salaried from ₹999, Business Presumptive (44AD/ADA) from ₹2,499, Full Financials from ₹4,999 [PLACEHOLDER].",
    faqs: [
      {
        question: "Should Coimbatore businesses opt for Presumptive Taxation under Sec 44AD?",
        answer: "Eligible businesses with turnover under ₹2 Crore (or ₹3 Crore if digital receipts exceed 95%) can declare profit at 6% or 8% without maintaining complex books of accounts [VERIFY WITH CA]. We evaluate whether this or regular books yields lower tax."
      },
      {
        question: "How do you handle AIS/TIS mismatches with actual bank records?",
        answer: "We reconcile every high-value cash deposit, stock transaction, and interest entry in your AIS. Where discrepancies exist, we submit formal online feedback on the Income Tax portal prior to filing."
      },
      {
        question: "What is the penalty if I miss the July 31 ITR deadline?",
        answer: "Belated returns can be filed up to December 31 with a late fee under Section 234F of up to ₹5,000 (₹1,000 for income below ₹5 Lakhs), accompanied by interest on unpaid tax under Section 234A [VERIFY WITH CA]."
      }
    ]
  },
  {
    id: "bookkeeping-accounting",
    slug: "bookkeeping-accounting",
    title: "Bookkeeping & Corporate Accounting",
    shortTitle: "Bookkeeping",
    category: "accounting-audit",
    categoryLabel: "Accounting & Audit",
    oneLineBenefit: "Clean, audit-ready books updated weekly on Tally Prime / Zoho Books.",
    summary: "Dedicated accounts team handling day-to-day vouchers, sales/purchase ledger entries, bank reconciliations, inventory tracking, and monthly management reports.",
    whoItsFor: [
      "Small and medium enterprises lacking an in-house full-time senior accountant",
      "Engineering, pump, and foundry manufacturers in Coimbatore needing job-work accounting",
      "Retail establishments and distributors managing thousands of monthly SKUs",
      "Startups wanting investor-ready, GAAP-compliant balance sheets"
    ],
    keyDeliverables: [
      "Daily/weekly transaction posting in Tally Prime, Zoho Books, or QuickBooks",
      "Fortnightly multi-account bank reconciliation (BRS)",
      "Accounts receivable (debtors ageing) and payable (creditors ageing) reports",
      "Monthly Profit & Loss, Balance Sheet, and cash flow MIS statements",
      "Pre-audit file preparation for your statutory chartered accountant"
    ],
    documentsRequired: [
      { category: "Primary Vouchers", items: ["Sales invoices and customer delivery challans", "Vendor purchase invoices and transport bilti receipts"] },
      { category: "Banking & Petty Cash", items: ["Bank statements in PDF and Excel format", "Petty cash expense receipts and employee conveyance logs"] },
      { category: "Payroll Records", items: ["Monthly employee attendance and salary register"] }
    ],
    processSteps: [
      { step: "01", title: "Workflow Setup", description: "Standardize chart of accounts, cost centers, and ledger heads tailored to your business." },
      { step: "02", title: "Voucher Ingestion", description: "Receive digital scans via encrypted WhatsApp/cloud drive, or physical pickup in Coimbatore." },
      { step: "03", title: "Ledger Posting & BRS", description: "Post double-entry vouchers and reconcile bank, GST, and supplier ledgers systematically." },
      { step: "04", title: "Monthly MIS Dispatch", description: "Deliver management reports highlighting gross margins, overheads, and pending debtor collections." }
    ],
    statutoryTimeline: "Continuous weekly updates; Monthly financials finalized by the 7th of the subsequent month",
    pricingNote: "Monthly retainers starting at ₹3,500/month for small businesses, scaling with voucher volume [PLACEHOLDER]. Fraction of the cost of hiring a full-time accountant.",
    faqs: [
      {
        question: "Can our accounting be maintained on cloud software like Zoho Books?",
        answer: "Yes, we work fluently with Tally Prime (desktop or cloud), Zoho Books, QuickBooks, and customized ERP systems. You maintain real-time access from your phone or laptop."
      },
      {
        question: "Do you visit our office in Coimbatore to pick up bills?",
        answer: "For clients in Gandhipuram, RS Puram, Peelamedu, Saibaba Colony, and Ganapathy, our team can arrange scheduled physical pickup of vouchers, or you can send scanned copies via WhatsApp/email."
      },
      {
        question: "Will our books be ready for our Chartered Accountant during audit?",
        answer: "Yes, our bookkeeping is supervised by experienced tax practitioners. We prepare full trial balances, depreciation schedules, and ledger confirmations, saving your CA time and lowering audit overhead."
      }
    ]
  },
  {
    id: "audit",
    slug: "audit",
    title: "Statutory & Tax Audit Liaison",
    shortTitle: "Audit Liaison",
    category: "accounting-audit",
    categoryLabel: "Accounting & Audit",
    oneLineBenefit: "Flawless audit-trail documentation and independent CA representation.",
    summary: "Complete liaison and pre-audit dossier preparation for statutory corporate audits, Tax Audits under Section 44AB, GST audits, and internal inventory controls.",
    whoItsFor: [
      "Proprietors and firms crossing the ₹1 Cr (cash) or ₹10 Cr (digital) business turnover threshold [VERIFY WITH CA]",
      "Professionals crossing ₹50 Lakhs / ₹75 Lakhs gross receipts [VERIFY WITH CA]",
      "Private Limited Companies and LLPs requiring annual statutory audit under Companies Act",
      "Businesses seeking bank working capital enhancements (CC/OD limits)"
    ],
    keyDeliverables: [
      "Tax Audit Form 3CA/3CB and Form 3CD schedules preparation",
      "Statutory audit working papers, fixed asset register, and voucher testing",
      "Section 40A(2) related-party transaction and 43B statutory dues reconciliation",
      "Stock inventory valuation certificates in coordination with empaneled CAs",
      "Direct coordination with independent Chartered Accountants for timely signing"
    ],
    documentsRequired: [
      { category: "Financial Ledgers", items: ["Final audited/provisional Trial Balance, P&L, and Balance Sheet", "General ledger dumps and bank statements with year-end BRS"] },
      { category: "Statutory Proofs", items: ["PF, ESI, TDS, and GST payment challans verifying compliance with Sec 43B", "Form 26AS, AIS, and GSTR-9/9C reconciliation sheets"] },
      { category: "Legal & Corporate", items: ["Board resolutions, director disclosures, and loan agreement copies"] }
    ],
    processSteps: [
      { step: "01", title: "Pre-Audit Health Check", description: "Identify missing vouchers, Sec 40A(3) cash payments, and statutory payment delays." },
      { step: "02", title: "Schedule Preparation", description: "Compile detailed 3CD schedules, depreciation calculations, and related party disclosures." },
      { step: "03", title: "Auditor Coordination", description: "Facilitate sample testing and clarify transactional queries with the certifying Chartered Accountant." },
      { step: "04", title: "Portal Upload & Filing", description: "Ensure Form 3CA-3CD is filed on the e-filing portal before September 30 / October 31." }
    ],
    statutoryTimeline: "Tax audit filing deadline: September 30th (or extended CBDT date); MCA statutory filings within 30 days of AGM",
    pricingNote: "Custom project quotation based on turnover scale and transaction complexity [PLACEHOLDER - ₹7,500 to ₹35,000+].",
    faqs: [
      {
        question: "When is a Tax Audit mandatory under Section 44AB?",
        answer: "A tax audit is mandatory if total sales/turnover exceeds ₹1 Crore. However, if cash receipts and payments do not exceed 5% of total transactions (i.e. 95% digital transactions), the threshold is elevated to ₹10 Crores [VERIFY WITH CA]."
      },
      {
        question: "What is the penalty for failure to complete a Tax Audit on time?",
        answer: "Under Section 271B, the penalty is 0.5% of total sales/turnover or ₹1,50,000, whichever is less [VERIFY WITH CA]."
      },
      {
        question: "Does A2Z Associates provide both accounting and audit services?",
        answer: "We prepare your accounts, assemble audit dossiers, and liaise directly with qualified, independent Chartered Accountants to ensure full statutory compliance while respecting professional independence codes."
      }
    ]
  },
  {
    id: "epf-esi",
    slug: "epf-esi",
    title: "EPF & ESI Compliance & Payroll",
    shortTitle: "EPF & ESI",
    category: "tax-compliance",
    categoryLabel: "Tax & Compliance",
    oneLineBenefit: "Accurate monthly wage computation, challans by 15th, zero labour penalties.",
    summary: "Establishment registration, UAN generation, monthly contribution computation, ECR challan generation, and annual returns under EPF and ESI Acts.",
    whoItsFor: [
      "Factories, textile spinning/weaving units, and engineering mills in Coimbatore",
      "Commercial establishments reaching 20+ employees (EPF) or 10+ employees (ESI)",
      "IT companies and service firms offering formal employee statutory benefits",
      "Contractors requiring labour compliance certificates for tenders"
    ],
    keyDeliverables: [
      "New establishment code registration on Shram Suvidha / Unified Portal",
      "New employee UAN generation and Aadhaar KYC seeding",
      "Monthly ECR (Electronic Challan cum Return) preparation for EPF",
      "Monthly ESI contribution filing and TIC (Temporary Identity Certificate) generation",
      "Handling employee PF withdrawal, transfer, and pension claims"
    ],
    documentsRequired: [
      { category: "Establishment Proofs", items: ["GST Registration Certificate & Shop Act / Factory License", "Lease agreement and electricity bill of premises", "Cancelled cheque of employer bank account"] },
      { category: "Employer Info", items: ["PAN and Aadhaar of Directors / Partners / Proprietor with DSC"] },
      { category: "Employee Register", items: ["List of employees with Date of Joining, Gross Wages, Aadhaar, PAN, and Bank details"] }
    ],
    processSteps: [
      { step: "01", title: "Registration & Portal Setup", description: "Acquire official EPFO and ESIC establishment codes on the unified labour portal." },
      { step: "02", title: "Monthly Wage Processing", description: "Calculate basic pay, DA, and compute employer/employee shares (EPF 12%, ESI 0.75% / 3.25%)." },
      { step: "03", title: "ECR Challan Generation", description: "Generate TRRN challans on the EPFO portal and ESI portal on or before the 12th of each month." },
      { step: "04", title: "Remittance & Records", description: "Assist with bank payment before the 15th deadline and archive inspection-ready compliance registers." }
    ],
    statutoryTimeline: "Monthly remittance deadline: 15th of every calendar month",
    pricingNote: "Establishment setup from ₹2,999; Monthly payroll & ECR compliance starting at ₹1,500/month based on employee headcount [PLACEHOLDER].",
    faqs: [
      {
        question: "What is the wage ceiling for mandatory EPF and ESI coverage?",
        answer: "EPF is generally mandatory for employees drawing basic + DA up to ₹15,000 per month (optional above that). ESI is mandatory for employees with gross monthly wages up to ₹21,000 (₹25,000 for persons with disabilities) [VERIFY WITH CA]."
      },
      {
        question: "Can an establishment register for EPF voluntarily before reaching 20 employees?",
        answer: "Yes, voluntary EPF registration is permitted when the employer and majority of employees agree, which helps attract skilled talent seeking provident fund benefits."
      },
      {
        question: "What are the consequences of late payment of PF/ESI contributions?",
        answer: "Delayed remittances attract damages under Section 14B (up to 25% p.a.) and penal interest under Section 7Q (12% p.a.). Additionally, delayed employee share deposits are disallowed as business expense under Section 36(1)(va) of the Income Tax Act."
      }
    ]
  },
  {
    id: "company-registration",
    slug: "company-registration",
    title: "Company & LLP Registration",
    shortTitle: "Company Setup",
    category: "business-setup",
    categoryLabel: "Business Setup",
    oneLineBenefit: "Incorporation in 7–10 days with PAN, TAN, GST & Bank account ready.",
    summary: "Form Private Limited, LLP, One Person Company (OPC), Section 8, or Partnership firms with MCA SPICe+ filing, DIN, MOA/AOA drafting, and start-up advisory.",
    whoItsFor: [
      "Entrepreneurs launching new ventures in Coimbatore, Tirupur, and Erode",
      "Proprietors converting existing businesses to Private Limited for liability protection",
      "Tech startups preparing for angel/seed investment or DPIIT startup recognition",
      "Joint venture partners structuring commercial equity ratios"
    ],
    keyDeliverables: [
      "Name reservation via RUN / SPICe+ Part A",
      "Digital Signature Certificates (Class 3 DSC) for 2 directors",
      "Drafting customized Memorandum (MOA) and Articles of Association (AOA)",
      "Certificate of Incorporation (COI), Corporate PAN, TAN, and EPFO/ESIC codes",
      "Guidance on opening corporate bank current account and initial capital deposit (INC-20A)"
    ],
    documentsRequired: [
      { category: "Directors / Partners", items: ["Self-attested PAN card & Aadhaar card of all promoters", "Passport size photograph and active mobile/email", "Bank statement or electricity bill (< 2 months old) as address proof"] },
      { category: "Registered Office", items: ["Electricity bill or gas bill of registered office premises", "NOC from property owner & Rent agreement copy"] }
    ],
    processSteps: [
      { step: "01", title: "Name Availability Search", description: "Conduct MCA trademark and company name search to ensure unique, approvable naming." },
      { step: "02", title: "Class 3 DSC Procurement", description: "Issue encrypted Digital Signature Certificates with video verification for all subscribers." },
      { step: "03", title: "SPICe+ Part B Filing", description: "Submit incorporation bundle including DIN, PAN, TAN, AGILE-PRO-S to Central Registration Centre." },
      { step: "04", title: "Incorporation & Post-Setup", description: "Receive Certificate of Incorporation and assist with Form INC-20A (Commencement of Business)." }
    ],
    statutoryTimeline: "7 to 10 working days upon receipt of verified documents",
    pricingNote: "All-inclusive incorporation packages starting at ₹6,999 + Govt stamp duty based on authorized capital [PLACEHOLDER]. Zero hidden post-incorporation charges.",
    faqs: [
      {
        question: "How much minimum capital is required to start a Private Limited Company?",
        answer: "There is no minimum paid-up capital requirement under current Companies Act rules. You can incorporate with nominal authorized capital (e.g., ₹1,00,000) and issue shares as needed [VERIFY WITH CA]."
      },
      {
        question: "What is the difference between an LLP and a Private Limited Company?",
        answer: "An LLP has lower recurring compliance costs, no mandatory statutory audit if turnover is under ₹40 Lakhs / capital under ₹25 Lakhs, and no dividend distribution taxes. However, Private Limited is preferred if you plan to raise equity venture capital."
      },
      {
        question: "Do you assist with post-incorporation filings like Form INC-20A?",
        answer: "Yes, filing Form INC-20A (Declaration of Commencement of Business within 180 days) is included in our advisory to protect directors from disqualification."
      }
    ]
  },
  {
    id: "trademark-registration",
    slug: "trademark-registration",
    title: "Trademark Registration & IP",
    shortTitle: "Trademark",
    category: "business-setup",
    categoryLabel: "Business Setup",
    oneLineBenefit: "Secure exclusive brand rights with comprehensive class search & filing.",
    summary: "Brand name, logo, and slogan protection across 45 statutory classes with search clearance, TM application filing, objection replies, and opposition defense.",
    whoItsFor: [
      "Brand owners and product manufacturers in Coimbatore building customer loyalty",
      "Textile brands, food manufacturers, and retail shops with unique trading names",
      "Startups and e-commerce brands needing Amazon Brand Registry protection",
      "Businesses receiving cease-and-desist or conflicting mark notices"
    ],
    keyDeliverables: [
      "Comprehensive clearance search on the Controller General (CGPDTM) database",
      "Correct Class selection (Class 1 to 34 for goods; Class 35 to 45 for services)",
      "Form TM-A drafting and filing with priority claims",
      "Right to use the ™ symbol immediately upon receiving official filing receipt",
      "Continuous tracking for examiner examination reports and journal publication"
    ],
    documentsRequired: [
      { category: "Applicant Info", items: ["PAN and Aadhaar of Proprietor / Certificate of Incorporation", "MSME / Udyam Registration Certificate (provides 50% govt fee rebate)"] },
      { category: "Brand Assets", items: ["High-resolution logo / brand artwork in JPEG format", "User affidavit with date of first commercial use and invoice evidence (if claiming prior use)"] }
    ],
    processSteps: [
      { step: "01", title: "Trademark Search", description: "Analyze phonetically and visually similar marks to prevent objections under Sec 9 and 11." },
      { step: "02", title: "Application Drafting", description: "Formulate precise goods/services specifications matching international NICE classification." },
      { step: "03", title: "E-Filing with MSME Rebate", description: "File Form TM-A electronically to secure application number and immediate ™ usage right." },
      { step: "04", title: "Prosecution & Registration", description: "Handle examination responses and track progress to final Certificate of Registration (® symbol)." }
    ],
    statutoryTimeline: "Filing receipt: 24–48 hours (™ symbol); Final registration: 6 to 12 months (® symbol)",
    pricingNote: "Professional filing fee [PLACEHOLDER - ₹2,499] + Official Govt fees (₹4,500 for MSME/Individuals, ₹9,000 for non-MSME companies).",
    faqs: [
      {
        question: "When can I legally start using the ™ and ® symbols?",
        answer: "You can start using the ™ (Trademark) symbol immediately once your application is filed and an application number is generated. The ® (Registered) symbol can only be used once the Trademark Registry issues the official Certificate of Registration."
      },
      {
        question: "Why should we register Udyam (MSME) before filing a trademark?",
        answer: "The Government of India grants a 50% fee concession on official trademark filing fees for Udyam-registered MSMEs and individuals (₹4,500 govt fee instead of ₹9,000). We register your Udyam first at no extra hassle."
      },
      {
        question: "How long is a registered trademark valid in India?",
        answer: "A registered trademark is valid for 10 years from the date of application and can be renewed indefinitely every 10 years upon payment of renewal fees."
      }
    ]
  },
  {
    id: "iso-certification",
    slug: "iso-certification",
    title: "ISO Certification Consulting",
    shortTitle: "ISO Certification",
    category: "business-setup",
    categoryLabel: "Business Setup",
    oneLineBenefit: "Internationally recognized standards for tenders and enterprise vendors.",
    summary: "Complete advisory for ISO 9001:2015 (Quality Management), ISO 14001, ISO 27001, and ISO 45001 certifications with gap analysis, documentation, and audit readiness.",
    whoItsFor: [
      "Precision engineering, machine tool, and foundry units in Coimbatore",
      "Manufacturers competing for government tenders, PSU contracts, and defence bids",
      "Exporters looking to satisfy international European/US buyer compliance audits",
      "Service providers seeking standardized operational workflows and QA benchmarks"
    ],
    keyDeliverables: [
      "Operational gap analysis against ISO standards",
      "Standard Operating Procedures (SOPs) and Quality Manual documentation",
      "Internal auditor training for core departmental supervisors",
      "Liaison with accredited international certification bodies (IAF / Non-IAF)",
      "Surveillance audit schedule and renewal tracking"
    ],
    documentsRequired: [
      { category: "Firm Credentials", items: ["Company / Firm registration certificate & GST certificate", "Factory license or municipal commercial permit"] },
      { category: "Operations", items: ["List of machinery, test instruments, and calibration certificates", "Organization hierarchy chart and scope of business activities"] }
    ],
    processSteps: [
      { step: "01", title: "Diagnostic Assessment", description: "Audit current shop-floor and office workflows against ISO 9001 quality clauses." },
      { step: "02", title: "Documentation & SOPs", description: "Author quality policies, process flowcharts, risk registers, and non-conformance logs." },
      { step: "03", title: "Internal Audit Mock Run", description: "Conduct a trial internal audit to verify staff adherence and rectify deviations." },
      { step: "04", title: "External Audit & Certification", description: "Coordinate with accredited certification auditors for Stage 1 & Stage 2 audits." }
    ],
    statutoryTimeline: "Typically 2 to 4 weeks depending on organization size and readiness",
    pricingNote: "Fixed project consulting fees starting at ₹7,999 [PLACEHOLDER - includes documentation, training, and certification fee coordination].",
    faqs: [
      {
        question: "What is the difference between IAF and Non-IAF ISO certification?",
        answer: "IAF (International Accreditation Forum) certificates are globally recognized and mandatory for government tenders, defence contracts, and exports. Non-IAF certificates are suitable for basic marketing and internal quality benchmarks. We advise the right one for your goals."
      },
      {
        question: "Is ISO 9001 certification useful for Coimbatore small manufacturing units?",
        answer: "Yes, most Tier-1 automotive and industrial OEMs require their Tier-2 and Tier-3 suppliers to possess valid ISO 9001 certification to be empaneled as approved vendors."
      },
      {
        question: "How long is an ISO 9001 certificate valid?",
        answer: "The certificate is valid for 3 years, subject to successful annual surveillance audits in year 1 and year 2."
      }
    ]
  }
];
