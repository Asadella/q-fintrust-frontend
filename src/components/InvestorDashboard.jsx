import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import KpiCard from "./KpiCard.jsx";
import Table from "./Table.jsx";
import { investorMatches } from "../data/mockData.js";

export default function InvestorDashboard({ profiles }) {
  const rankedProfiles = [...profiles].sort((a, b) => b.compositeScore - a.compositeScore);
  const bestSme = rankedProfiles[0];

  const scatterData = profiles.map((sme) => ({
    name: sme.smeId,
    readiness: sme.readinessScore,
    credit: sme.creditScore,
    composite: sme.compositeScore
  }));

  return (
    <section className="dashboard">
      <div className="sectionHeader">
        <div>
          <p className="eyebrow">Investor View</p>
          <h2>Investor Decision-Support Dashboard</h2>
          <p className="muted">
            Compare SMEs by credit strength, readiness, ESG quality, verification status, and risk flags.
          </p>
        </div>
      </div>

      <div className="kpiGrid">
        <KpiCard title="Best Candidate" value={bestSme.businessName} subtitle={`Score ${bestSme.compositeScore}`} tone="positive" />
        <KpiCard title="Verified SMEs" value={profiles.filter((sme) => sme.blockchainVerified === "Yes").length} subtitle="Blockchain verified" tone="neutral" />
        <KpiCard title="Average Readiness" value={Math.round(profiles.reduce((sum, sme) => sum + sme.readinessScore, 0) / profiles.length)} subtitle="Across candidates" tone="neutral" />
        <KpiCard title="ESG Leaders" value={profiles.filter((sme) => sme.esgTier === "ESG Leader").length} subtitle="High ESG tier" tone="positive" />
      </div>

      <div className="twoColumn">
        <div className="panel">
          <h3>Q-FinTrust Composite Score Ranking</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={rankedProfiles}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="businessName" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar dataKey="compositeScore" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="panel">
          <h3>Risk-Readiness Map</h3>
          <ResponsiveContainer width="100%" height={280}>
            <ScatterChart>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="readiness" name="Readiness Score" domain={[0, 100]} />
              <YAxis dataKey="credit" name="Credit Score" domain={[300, 1000]} />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Scatter data={scatterData} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="panel">
        <h3>SME Candidate Comparison</h3>
        <Table
          columns={[
            { key: "smeId", label: "SME ID" },
            { key: "businessName", label: "Business" },
            { key: "sector", label: "Sector" },
            { key: "compositeScore", label: "Composite" },
            { key: "creditScore", label: "Credit" },
            { key: "riskTier", label: "Risk" },
            { key: "readinessScore", label: "Readiness" },
            { key: "esgScore", label: "ESG" },
            { key: "blockchainVerified", label: "Verified" },
            { key: "fraudFlag", label: "Fraud" },
            { key: "anomalyFlag", label: "Anomaly" }
          ]}
          rows={rankedProfiles}
        />
      </div>

      <div className="panel">
        <h3>Investor-SME Matching Example</h3>
        <Table
          columns={[
            { key: "rank", label: "Rank" },
            { key: "investorType", label: "Investor Type" },
            { key: "investmentRange", label: "Investment Range" },
            { key: "matchScore", label: "Match Score" },
            { key: "riskAppetite", label: "Risk Appetite" },
            { key: "preferredSectors", label: "Preferred Sectors" }
          ]}
          rows={investorMatches}
        />
      </div>
    </section>
  );
}
