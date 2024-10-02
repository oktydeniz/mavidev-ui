import { MainContext } from "components/MainContext";
import Welcome from "screen/Welcome";
import AddItem from "screen/AddItem";
import ShowItems from "screen/ShowItems";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            <Route path="items" element={<Layout />}>
              <Route index element={<ShowItems />} />
            </Route>
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
            <Route path="items" element={<ShowItems />} />
          </Route>
 * 
 * 
 * */
