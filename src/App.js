import React, { useState } from "react";
import "./App.css"; // Import the CSS file

function App() {
    const [text, setText] = useState("");
    const [result, setResult] = useState(null);

    const analyzeSentiment = async () => {
        if (!text.trim()) return; // Prevent empty requests

        const response = await fetch("https://fswd-bdy5.onrender.com/analyze", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ text })
        });

        const data = await response.json();
        setResult(data);
    };

    return (
        <div className="container">
            <div className="card">
                <h1>Sentiment Analysis</h1>
                <textarea 
                    rows="4"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text to analyze..."
                    className="input-box"
                />
                <button onClick={analyzeSentiment} className="analyze-btn">Analyze</button>

                {result && (
                    <div className="result-box">
                        <h2>Result:</h2>
                        <p><strong>Sentiment:</strong> {result.sentiment}</p>
                        <p><strong>Confidence Score:</strong> {result.score.toFixed(4)}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
