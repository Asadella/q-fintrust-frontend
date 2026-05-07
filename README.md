# Q-FinTrust Frontend

This is a VSCode-ready React frontend for **Module R: SME Financial Readiness Dashboard & Unified Report**.

It includes:

- SME dashboard
- Investor dashboard
- Readiness score panels
- ESG panel
- 12-month forecast chart
- Fraud/anomaly/blockchain/RBAC status cards
- Loan matching table
- Investor matching table
- Mock data that can later be replaced with real module outputs

## How to run in VSCode

1. Open this folder in VSCode.
2. Open the terminal in VSCode.
3. Run:

```bash
npm install
npm run dev
```

4. Open the local URL shown in the terminal, usually:

```bash
http://localhost:5173
```

## Where to edit

Main files:

```text
src/App.jsx
src/data/mockData.js
src/components/SmeDashboard.jsx
src/components/InvestorDashboard.jsx
src/components/KpiCard.jsx
src/styles.css
```

## How to connect real backend/module outputs later

Replace the mock data in:

```text
src/data/mockData.js
```

with real outputs from:

- Module A: fraud flag
- Module B: anomaly flag
- Module C: credit score/default probability
- Module D: readiness score
- Module E: loan decision
- Module F: SHAP explanation
- Module G: improvement plan
- Module I: loan matching
- Module J: investor matching
- Module K: 12-month forecast
- Module L: ESG score
- Module P: RBAC/privacy status
- Module BC: blockchain verification status