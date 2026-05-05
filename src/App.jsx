import { useState } from "react";
import { Building2, Landmark, ShieldCheck } from "lucide-react";
import SmeDashboard from "./components/SmeDashboard.jsx";
import InvestorDashboard from "./components/InvestorDashboard.jsx";
import { smeProfiles } from "./data/mockData.js";

export default function App() {
  const [view, setView] = useState("sme");
  const [selectedSmeId, setSelectedSmeId] = useState(smeProfiles[0].smeId);

  const selectedSme = smeProfiles.find((sme) => sme.smeId === selectedSmeId);

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brandIcon">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h1>Q-FinTrust</h1>
          </div>
        </div>

        <nav className="nav">
          <button
            className={view === "sme" ? "navButton active" : "navButton"}
            onClick={() => setView("sme")}
          >
            <Building2 size={18} />
            SME Dashboard
          </button>

          <button
            className={view === "investor" ? "navButton active" : "navButton"}
            onClick={() => setView("investor")}
          >
            <Landmark size={18} />
            Investor Dashboard
          </button>
        </nav>

        <div className="sidebarCard">
          <label htmlFor="sme-select">Selected SME</label>
          <select
            id="sme-select"
            value={selectedSmeId}
            onChange={(event) => setSelectedSmeId(event.target.value)}
          >
            {smeProfiles.map((sme) => (
              <option key={sme.smeId} value={sme.smeId}>
                {sme.businessName}
              </option>
            ))}
          </select>
        </div>

        <div className="note">
          <strong>Prototype status:</strong>
          <span>
            This frontend uses placeholder integrated data. Replace mock data
            with real module outputs later.
          </span>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">Blockchain-Anchored QML Framework</p>
            <h2>SME Financing Readiness & Investor Trust Dashboard</h2>
          </div>
          <div className="presentationBadge">Class Demo Prototype</div>
        </header>

        {view === "sme" ? (
          <SmeDashboard sme={selectedSme} />
        ) : (
          <InvestorDashboard profiles={smeProfiles} />
        )}
      </main>
    </div>
  );
}
