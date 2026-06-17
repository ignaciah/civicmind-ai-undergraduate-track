import { useState } from "react";

export default function Environment() {
  const [location, setLocation] = useState("");
  const [concern, setConcern] = useState("");
  const [result, setResult] = useState(null);

  async function analyze() {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/environment`,
      {
        method: "POST",
        body: JSON.stringify({ location, concern })
      }
    );
    setResult(await res.json());
  }

  return (
    <main style={{ padding: 40 }}>
      <h2>Environment Advisor</h2>

      <input placeholder="Location" onChange={e => setLocation(e.target.value)} />
      <select onChange={e => setConcern(e.target.value)}>
        <option value="">Select concern</option>
        <option value="heat">Heat</option>
        <option value="air">Air Quality</option>
        <option value="storm">Storm</option>
      </select>

      <button onClick={analyze}>Analyze</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Risk: {result.risk}</h3>
          <p>{result.recommendation}</p>
          <small>{result.explanation}</small>
        </div>
      )}
    </main>
  );
}
