import React, { createContext, useContext, useState, useEffect } from "react";

const GraphTokenContext = createContext(null);

export const GraphTokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  // Example: load token from MSAL or fetch API
  useEffect(() => {
    const fetchToken = async () => {
      try {
        // Replace with your real token logic
        const dummyToken = "sample-graph-access-token";
        setToken(dummyToken);
      } catch (err) {
        console.error("Error fetching Graph token:", err);
      }
    };
    fetchToken();
  }, []);

  const getToken = () => token;

  return (
    <GraphTokenContext.Provider value={{ getToken }}>
      {children}
    </GraphTokenContext.Provider>
  );
};

export const useGraphToken = () => {
  const context = useContext(GraphTokenContext);
  if (!context) {
    throw new Error("useGraphToken must be used inside GraphTokenProvider");
  }
  return context;
};
