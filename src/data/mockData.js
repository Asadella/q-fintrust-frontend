export const smeProfiles = [
  {
    smeId: "SME_001",
    businessName: "Alpha Retail Co.",
    sector: "Retail",
    creditScore: 720,
    defaultProbability: 0.28,
    riskTier: "Low",
    readinessScore: 78,
    readinessTier: "Investment Ready",
    loanDecision: "APPROVE",
    fraudFlag: "No",
    anomalyFlag: "No",
    blockchainVerified: "Yes",
    esgScore: 74,
    esgTier: "ESG Compliant",
    rbacStatus: "SME access only / Investor consent required",
    compositeScore: 82
  },
  {
    smeId: "SME_002",
    businessName: "Beta Manufacturing Ltd.",
    sector: "Manufacturing",
    creditScore: 610,
    defaultProbability: 0.53,
    riskTier: "Medium",
    readinessScore: 58,
    readinessTier: "Developing",
    loanDecision: "CONDITIONAL REVIEW",
    fraudFlag: "No",
    anomalyFlag: "Yes",
    blockchainVerified: "Yes",
    esgScore: 52,
    esgTier: "ESG Developing",
    rbacStatus: "Investor view restricted",
    compositeScore: 61
  },
  {
    smeId: "SME_003",
    businessName: "Gamma Tech Services",
    sector: "Technology",
    creditScore: 790,
    defaultProbability: 0.18,
    riskTier: "Very Low",
    readinessScore: 86,
    readinessTier: "Investment Ready",
    loanDecision: "APPROVE",
    fraudFlag: "No",
    anomalyFlag: "No",
    blockchainVerified: "Yes",
    esgScore: 83,
    esgTier: "ESG Leader",
    rbacStatus: "Consent granted to matched investors",
    compositeScore: 91
  }
];

export const readinessBreakdown = [
  { dimension: "Financial Documentation", score: 80 },
  { dimension: "Business Maturity", score: 74 },
  { dimension: "Growth Trajectory", score: 82 },
  { dimension: "Governance & Structure", score: 70 },
  { dimension: "Debt Management", score: 76 }
];

export const forecastData = [
  { month: "Jan", readiness: 78, revenue: 52000 },
  { month: "Feb", readiness: 79, revenue: 53500 },
  { month: "Mar", readiness: 79, revenue: 54800 },
  { month: "Apr", readiness: 80, revenue: 56000 },
  { month: "May", readiness: 81, revenue: 57500 },
  { month: "Jun", readiness: 82, revenue: 59000 },
  { month: "Jul", readiness: 82, revenue: 60400 },
  { month: "Aug", readiness: 83, revenue: 62000 },
  { month: "Sep", readiness: 84, revenue: 64000 },
  { month: "Oct", readiness: 85, revenue: 65700 },
  { month: "Nov", readiness: 85, revenue: 67200 },
  { month: "Dec", readiness: 86, revenue: 69000 }
];

export const shapSummary = [
  {
    factor: "Debt-to-income ratio",
    value: "0.42",
    effect: "Decreases risk"
  },
  {
    factor: "Late payments in 12 months",
    value: "1",
    effect: "Slightly increases risk"
  },
  {
    factor: "Cash flow stability",
    value: "0.78",
    effect: "Decreases risk"
  },
  {
    factor: "Revenue volatility",
    value: "0.21",
    effect: "Decreases risk"
  },
  {
    factor: "Credit utilization",
    value: "0.36",
    effect: "Decreases risk"
  }
];

export const improvementPlan = [
  {
    problem: "Moderate leverage",
    rootCause: "Debt-to-income ratio is close to upper target",
    recommendation: "Reduce short-term liabilities and increase recurring revenue",
    targetMetric: "DTI <= 0.45"
  },
  {
    problem: "Documentation gap",
    rootCause: "Only partial audited financial documents available",
    recommendation: "Prepare audited financial statements for the last 2 fiscal years",
    targetMetric: "Documentation score >= 75"
  },
  {
    problem: "Payment history risk",
    rootCause: "One late payment detected in the last 12 months",
    recommendation: "Automate invoice reminders and improve payment cycle control",
    targetMetric: "0 late payments in next 6 months"
  }
];

export const loanMatches = [
  {
    rank: 1,
    lender: "Bank A",
    loanType: "SME Working Capital Loan",
    approvalProbability: "82%",
    interestRate: "8.5% p.a.",
    maxAmount: "$500,000"
  },
  {
    rank: 2,
    lender: "FinTech B",
    loanType: "Revenue-Based Financing",
    approvalProbability: "74%",
    interestRate: "12% p.a.",
    maxAmount: "$200,000"
  },
  {
    rank: 3,
    lender: "MFI C",
    loanType: "Microfinance SME Loan",
    approvalProbability: "68%",
    interestRate: "15% p.a.",
    maxAmount: "$50,000"
  }
];

export const investorMatches = [
  {
    rank: 1,
    investorType: "Impact Investment Fund",
    investmentRange: "$100K-$500K",
    matchScore: "91%",
    riskAppetite: "Medium",
    preferredSectors: "Tech, Agriculture, Services"
  },
  {
    rank: 2,
    investorType: "Angel Investor Network",
    investmentRange: "$50K-$200K",
    matchScore: "84%",
    riskAppetite: "High",
    preferredSectors: "Tech, Retail, Manufacturing"
  },
  {
    rank: 3,
    investorType: "Development Finance Institution",
    investmentRange: "$200K-$1M",
    matchScore: "76%",
    riskAppetite: "Low",
    preferredSectors: "All sectors, ESG-focused"
  }
];
