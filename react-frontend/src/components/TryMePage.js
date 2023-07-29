import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

function TryMePage() {
  const [URL, setURL] = useState("");
  const [extractedOGData, setExtractedOGData] = useState(null);
  const [clickedSearch, setClickedSearch] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [viewMode, setViewMode] = useState("clean");
  const [error, setError] = useState("");

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && URL.trim() !== "") {
      handleExtraction();
    }
  };

  const handleExtraction = () => {
    setExtractedOGData(null);
    setClickedSearch(true);
    setLoading(true);

    const isValidURL = /^(ftp|http|https):\/\/[^ "]+$/.test(URL);

    if (!isValidURL) {
      setLoading(false);
      setError("Please enter a valid URL.");
      return;
    }

    fetch(
      `https://venv-six-omega.vercel.app/scrape?url=${encodeURIComponent(URL)}`
    )
      .then((response) => response.json())
      .then((data) => {
        setFetched(true);
        setExtractedOGData(data);
        setLoading(false);
        setURL("");
        setError("");
      })
      .catch((err) => {
        console.log("error in fetching = ", err);
        setLoading(false);
        setExtractedOGData(null);
        setError("Error occurred while fetching data. Please try again.");
      });
  };

  return (
    <div>
      <div className="bg-indigo-400 py-10 px-4 sm:px-6 lg:px-8 flex justify-center">
        <div className="h-screen w-screen p-6 space-y-6 font-mono" style={{ fontFamily: "Montserrat, sans-serif" }}>
          <div className="text-center">
            <p className="my-10 py-3 text-4xl font-bold text-violet-950	font-serif">
              Try the OpenGraph Web Scraper!
            </p>
          </div>

          <div className="flex flex-row items-center space-x-4 place-content-center">
            <input
              type="text"
              value={URL}
              onKeyPress={handleKeyPress}
              onChange={(e) => setURL(e.target.value)}
              className="bg-white block w-7/12 px-3 py-3 border border-indigo-500 rounded-3xl shadow-sm text-md placeholder-gray-500"
              placeholder="Enter your URL here"
            />
            <BsSearch
              onClick={handleExtraction}
              className="text-white text-3xl cursor-pointer hover:text-gray-300"
            />
          </div>

          {extractedOGData && (
            <div className="bg-transparent text-white p-4 flex justify-center rounded-md">
              <div className="flex">
                <button
                  className={`px-4 py-2 rounded-md ${
                    viewMode === "clean"
                      ? "bg-white text-indigo-500 font-bold"
                      : "bg-transparent text-white"
                  }`}
                  onClick={() => setViewMode("clean")}
                >
                  Clean
                </button>

                <span className="border border-white mx-2"></span>

                <button
                  className={`px-4 py-2 rounded-md ${
                    viewMode === "raw"
                      ? "bg-white text-indigo-500 font-bold"
                      : "bg-transparent text-white"
                  }`}
                  onClick={() => setViewMode("raw")}
                >
                  Raw
                </button>
              </div>
            </div>
          )}

          {loading && clickedSearch && (
            <div className="flex justify-center mt-6">
              <div className="animate-spin rounded-full border-t-4 border-t-indigo-100 border-gray-300 h-24 w-24"></div>
            </div>
          )}

          {fetched && extractedOGData && (
            <div
              className="p-6 border-4 border-transparent rounded-md max-h-96 max-w-96 text-blue-300 bg-stone-900 whitespace-pre-wrap"
              style={{
                boxShadow:
                  "0 0 10px #000000, 0 0 20px #000000, 0 0 40px #5D3FD3, 0 0 80px #5D3FD3",
                marginLeft: "4rem",
                marginRight: "4rem",
              }}
            >
              {viewMode === "clean" ? (
                <pre
                style={{
                  whiteSpace: "pre-wrap",
                  overflowWrap: "break-word",
                  maxHeight: "80vh",
                  maxWidth: "90vw",
                }}
                >
                  {Object.entries(extractedOGData).map(([key, value]) => (
                    <div key={key} className="flex mb-3">
                      <div className="w-1/4 text-indigo-500 font-bold">
                        {key}:
                      </div>
                      <div className="w-3/4">{JSON.stringify(value)}</div>
                    </div>
                  ))}
                </pre>
              ) : (
                <code
                  style={{
                    whiteSpace: "pre-wrap",
                    overflowWrap: "break-word",
                    maxHeight: "80vh",
                    maxWidth: "95vw",
                  }}
                >
                  {JSON.stringify(extractedOGData, null, 2)}
                </code>
              )}
            </div>
          )}

          {clickedSearch && !extractedOGData && !loading && (
            <div className="text-center mt-6">
              <p className="text-lg text-black">{error}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TryMePage;
