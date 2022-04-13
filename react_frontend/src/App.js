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

  let [sl_no, setSl_no] = useState([]);
  const [invoice_id, setInvoice_id] = useState("");

  useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto:300,400,500,700", "sans-serif"],
      },
    });
  }, []);

  return (
    <Fragment>
      <LinkContext.Provider
        value={{
          link,
          setLink,
          sl_no,
          setSl_no,
          invoice_id,
          setInvoice_id,
        }}
      >
        <Header />

        <ModalButton />

        <DataTableGrid />
      </LinkContext.Provider>
      <Footer />
    </Fragment>
  );
}

export default App;
