import { MainContext } from "components/MainContext";
import Welcome from "screen/Welcome";
import AddItem from "screen/AddItem";
import ShowItems from "screen/ShowItems";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Layout from "components/Layout";
import WelcomeLayout from "components/WelcomeLayout";

function App() {
  const [methods, setMethods] = useState({});

  const appendMethods = (newMethods) =>
    setMethods((prev) => ({ ...prev, ...newMethods }));
  const contextValue = { appendMethods, methods };

  return (
    <MainContext.Provider value={contextValue}>
      <Router>
        <Routes>
            <Route path="/" element={<WelcomeLayout />}>
              <Route index element={<Welcome />} />
            </Route>
            <Route path="item" element={<Layout />}>
              <Route index element={<AddItem />} />
            </Route>
            <Route path="records" element={<Layout />}>
              <Route index element={<ShowItems />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </MainContext.Provider>
  );
}

export default App;

/**
 * 
 * 
 * <Route path="/" element={<Layout />}>
            <Route index element={<Welcome />} />
            <Route path="item" element={<AddItem />} />
            <Route path="records" element={<ShowItems />} />
          </Route>
 * 
 * 
 * */
