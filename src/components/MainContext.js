import { createContext, useContext, useState, useEffect } from "react";

const MainContext = createContext();

const useMainContext = () => useContext(MainContext);

const MainProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
  }, []);

  return (
    <MainContext.Provider value={{ data, loading, error }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainProvider, useMainContext };