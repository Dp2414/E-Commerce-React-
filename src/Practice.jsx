import React, { useEffect, useState } from 'react'

const Practice = () => {
    const [joke, setJoke] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchJoke = async () => {
      setLoading(true);
      const res = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await res.json();
      setJoke(`${data.setup} 😄 ${data.punchline}`);
      setLoading(false);
    };
  // useEffect runs once when component loads
  useEffect(() => {
    fetchJoke();
  }, []);
  
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
    <h2>😂 Random Joke Generator</h2>
    {loading ? <p>Loading joke...</p> : <p>{joke}</p>}
    <button onClick={fetchJoke} style={{ marginTop: "10px" }}>
      Get Another Joke
    </button>
  </div>
  );
}

export default Practice
