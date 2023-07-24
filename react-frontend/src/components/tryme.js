import { useState } from "react";

export default function TryMe() {
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
            {extractedOGData.siteName && <p>Site Name: {extractedOGData.siteName}</p>}
            {extractedOGData.itemTitle && <p>Title: {extractedOGData.itemTitle}</p>}
            {extractedOGData.itemDescription && <p>Description: {extractedOGData.itemDescription}</p>}
            {extractedOGData.itemUrl && (
              <p>
                URL: <a href={extractedOGData.itemUrl}>{extractedOGData.itemUrl}</a>
              </p>
            )}
            {extractedOGData.itemCurrency && extractedOGData.itemPrice && (
              <p>
                Price: {extractedOGData.itemCurrency} {extractedOGData.itemPrice}
              </p>
            )}
            {extractedOGData.itemImage && (
              <img
                src={extractedOGData.itemImage}
                alt="alternate-text"
                height={extractedOGData.itemImageHeight}
                width={extractedOGData.itemImageWidth}
              />
            )}
          </div>
        </div>
      )}

      {clickedSearch && fetched && !extractedOGData && <p>No OG tags found!</p>}
    </div>
  );
}