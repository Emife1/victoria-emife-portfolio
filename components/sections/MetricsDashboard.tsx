export default function MetricsDashboard() {
  return (
    <section className="p-12 text-white bg-black">
      <h2 className="text-2xl font-semibold mb-4">Impact Metrics</h2>
      <div className="grid grid-cols-2 gap-4 opacity-80">
        <div>Engagement Growth</div>
        <div>Campaign Performance</div>
        <div>Operational Efficiency</div>
        <div>Brand Reach</div>
      </div>
    </section>
  );
}