import { Fragment, useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import Webfont from "webfontloader";
import ModalButton from "./components/ModalButton";

function App() {
  useEffect(() => {
    Webfont.load({
      google: {
        families: [
          "montserrat:400,500,600,700",
          "sans-serif",
        ],
      },
    });
  }, []);

  return (
    <Fragment>
      <Header />

      <ModalButton />
    </Fragment>
  );
}

export default App;
