import { Fragment, useEffect } from "react";
import { Header } from "./components/Header";
import Webfont from "webfontloader";
import ModalButton from "./components/ModalButton";
import DataTableGrid from "./components/DataTableGrid";
function App() {
  useEffect(() => {
    Webfont.load({
      google: {
        families: ["Roboto:300,400,500,700", "sans-serif"],
      },
    });
  }, []);

  return (
    <Fragment>
      <Header />
      <ModalButton />
      <DataTableGrid />
    </Fragment>
  );
}

export default App;
