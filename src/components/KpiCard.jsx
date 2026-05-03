export default function KpiCard({ title, value, subtitle, tone = "neutral" }) {
  return (
    <div className={`kpiCard ${tone}`}>
      <p>{title}</p>
      <h3>{value}</h3>
      {subtitle && <span>{subtitle}</span>}
    </div>
  );
}
