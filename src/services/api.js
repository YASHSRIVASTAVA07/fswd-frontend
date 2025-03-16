const API_URL = "https://fswd-bdy5.onrender.com"; 

export async function analyzeSentiment(text) {
    const response = await fetch(`${API_URL}/analyze`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
    });

    if (!response.ok) {
        throw new Error("Failed to fetch sentiment analysis");
    }

    return response.json();
}
