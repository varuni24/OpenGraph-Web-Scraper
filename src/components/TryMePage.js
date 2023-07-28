import React, { useState } from "react";

function TryMePage() {
  const [URL, setURL] = useState("");
  const [extractedOGData, setExtractedOGData] = useState(null);
  const [clickedSearch, setClickedSearch] = useState(null);
  const [fetched, setFetched] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleExtraction = () => {
    setClickedSearch(true);
    setLoading(true);

    fetch(`http://127.0.0.1:5000/scrape?url=${URL}`)
      .then((response) => response.json())
      .then((data) => {
        setFetched(true);
        setExtractedOGData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  return (
    <div>
      <input type="text" value={URL} onChange={(e) => setURL(e.target.value)} />
      <button onClick={handleExtraction}>Search</button>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {extractedOGData && <pre>{JSON.stringify(extractedOGData, null, 2)}</pre>}

      {clickedSearch && fetched && !extractedOGData && <p>No OG tags found!</p>}
    </div>
  );
}

export default TryMePage;
