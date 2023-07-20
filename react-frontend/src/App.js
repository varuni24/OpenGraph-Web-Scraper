import React, { useState } from 'react';

function App() {
  const [URL, setURL] = useState("");
  const [extractedOGData, setExtractedOGData] = useState(null)
  const [clickedSearch, setClickedSearch] = useState(null);
  const [fetched, setFetched] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); 

  const handleExtraction = () => {
    setClickedSearch(true);
    setLoading(true); 

    fetch(`http://127.0.0.1:5000/scrape?url=${encodeURIComponent(URL)}`)
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

      {extractedOGData && (
        <div>
          <h2>OG DATA:</h2>
          <div>
            <p>Site Name: {extractedOGData.siteName}</p>
            <p>Title: {extractedOGData.itemTitle}</p>
            <p>Description: {extractedOGData.itemDescription}</p>
            <p>URL: <a href={extractedOGData.itemUrl}>{extractedOGData.itemUrl}</a> </p>
            <p>Price: {extractedOGData.itemCurrency} {extractedOGData.itemPrice}</p>
            <img src={extractedOGData.itemImage} alt="alternate-text" height={extractedOGData.itemImageHeight} width={extractedOGData.itemImageWidth} />
          </div>
        </div>
      )}

      {clickedSearch && fetched && !extractedOGData && <p>No OG tags found!</p>}
    </div>
  );
}

export default App;
