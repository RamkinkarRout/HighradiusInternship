import {
  Box,
  Button,
  Container,
  FormGroup,
  Modal,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, {
  Fragment,
  useContext,
  useState,
} from "react";
import { useAlert } from "react-alert";
import { LinkContext } from "../LinkCoontext";
import "./advanceSearch.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#182933",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  color: "white",
};

const AdvanceSearch = ({ handleAdvClose, open }) => {
  let { link, setLink } = useContext(LinkContext);

  const alert = useAlert();

  const [doc_id, setDoc_id] = useState("");
  const [cust_number, setCust_number] = useState("");
  const [invoice_id, setInvoice_id] = useState("");
  const [buisness_year, setBuisness_year] = useState("");

  const handleSubmit = (e, link, setLink) => {
    e.preventDefault();

    if (
      doc_id !== "" &&
      cust_number !== "" &&
      invoice_id !== "" &&
      buisness_year !== ""
    ) {
      alert.success("Data Searcheing ...");
      setLink(
        `http://localhost:8080/highradius_project/advanceSearch?doc_id=${doc_id}&cust_number=${cust_number}&invoice_id=${invoice_id}&buisness_year=${buisness_year}`
      );
    } else {
      alert.error("Please fill all the fields");
      setLink(
        `http://localhost:8080/highradius_project/data`
      );
    }

    console.log(link);
    handleAdvClose();
  };

  return (
    <Fragment>
      <Container maxWidth={"sm"}>
        <Modal
          open={open}
          onClose={handleAdvClose}
          aria-labelledby='modal-modal-title'
          aria-describedby='modal-modal-description'
        >
          <Box sx={style}>
            <Typography
              variant='h6'
              id='modal-modal-title'
              style={{
                marginBottom: "20px",
                paddingBottom: "20px",
              }}
            >
              Advance Search
            </Typography>

            <FormGroup>
              <div className={"advFlex"}>
                {" "}
                <OutlinedInput
                  style={{
                    marginRight: "20px",
                    backgroundColor: "white",
                  }}
                  value={doc_id}
                  onChange={(e) =>
                    setDoc_id(e.target.value)
                  }
                  placeholder='Document Id'
                  required={true}
                />
                <OutlinedInput
                  style={{
                    backgroundColor: "white",
                  }}
                  value={invoice_id}
                  onChange={(e) =>
                    setInvoice_id(e.target.value)
                  }
                  placeholder='Invoice Id'
                  required={true}
                />
              </div>
              <div className={"advFlex"}>
                {" "}
                <OutlinedInput
                  style={{
                    marginRight: "20px",
                    backgroundColor: "white",
                  }}
                  value={cust_number}
                  onChange={(e) =>
                    setCust_number(e.target.value)
                  }
                  placeholder='Customer Number'
                  required={true}
                />
                <OutlinedInput
                  style={{
                    backgroundColor: "white",
                  }}
                  value={buisness_year}
                  onChange={(e) =>
                    setBuisness_year(e.target.value)
                  }
                  placeholder='Bussiness Year'
                  required={true}
                />
              </div>
            </FormGroup>

            <div className='advFlexbtn'>
              <Button
                variant='outlined'
                className='muiBtn'
                style={{ marginRight: "5px" }}
                onClick={(e) => {
                  handleSubmit(e, link, setLink);
                }}
              >
                Search
              </Button>
              <Button
                className='muiBtn'
                variant='outlined'
                onClick={handleAdvClose}
              >
                Cancel
              </Button>
            </div>
          </Box>
        </Modal>
      </Container>
    </Fragment>
  );
};

export default AdvanceSearch;
