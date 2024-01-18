import "./App.css";

import { HashRouter as Router } from "react-router-dom";
import { useContext } from "react";

import "@fontsource/roboto";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/400-italic.css";

import { ThemeContext } from "./components/ThemeContext";
import AppRoutes from "./Routes/AppRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import './db/db';
//import useWindowHeight from "./utils/useWindowHeight";

function App() {
  const { theme } = useContext(ThemeContext);
  // const windowHeight = useWindowHeight();
  // document.documentElement.style.setProperty('--window-height', `${useWindowHeight()}px`);

  // useWindowHeight();

  return (
    <div className={`App App-${theme}`}>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
