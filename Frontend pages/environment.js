import { useState } from "react";

export default function Environment() {
  const [location, setLocation] = useState("");
  const [concern, setConcern] = useState("");
  const [result, setResult] = useState(null);

  async function handleSubmit() {
    const res = await fetch("/api/environment", {
      method: "POST",
      body: JSON.stringify({ location, concern })
    });
    const data = await res.json();
    setResult(data);
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>Environment Advisor</h2>

      <input placeholder="Location" onChange={e => setLocation(e.target.value)} />
      <select onChange={e => setConcern(e.target.value)}>
        <option value="">Select Concern</option>
        <option value="heat">Heat</option>
        <option value="air">Air Quality</option>
        <option value="storm">Storm</option>
      </select>

      <button onClick={handleSubmit}>Analyze</button>

      {result && (
        <div style={{ marginTop: 20 }}>
          <h3>Risk Level: {result.risk}</h3>
          <p>{result.recommendation}</p>
          <small>{result.explanation}</small>
        </div>
      )}
    </div>
  );
}
