import { Fragment, useEffect, useState } from "react";
import { Header } from "./components/Header";
import Webfont from "webfontloader";
import ModalButton from "./components/ModalButton";
import Footer from "./components/Footer";
import { LinkContext } from "./LinkCoontext";
import DataTableGrid from "./components/DataTableGrid";

//creating link context

function App() {
  let [link, setLink] = useState(
    "http://localhost:8080/highradius_project/data"
  );

  useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto:300,400,500,700", "sans-serif"],
      },
    });
  }, []);

  return (
    <Fragment>
      <LinkContext.Provider value={{ link, setLink }}>
        <Header />

        <ModalButton />

        <DataTableGrid />
      </LinkContext.Provider>
      <Footer />
    </Fragment>
  );
}

export default App;
