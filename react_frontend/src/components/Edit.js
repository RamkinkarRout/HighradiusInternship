import {
  Button,
  Container,
  FormGroup,
  Modal,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, {
  Fragment,
  useContext,
  useState,
} from "react";
import { useAlert } from "react-alert";
import { LinkContext } from "../LinkCoontext";

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
const Edit = ({ editOpen, handleEditClose }) => {
  const { sl_no, invoice_id, setLink } =
    useContext(LinkContext);
  const alert = useAlert();
  const [cust_payment_terms, setCust_payment_terms] =
    useState("");
  const [invoice_currency, setinvoice_currency] =
    useState("");

  const handleEdit = async (e, sl_no, setLink) => {
    e.preventDefault();

    if (sl_no.length > 0) {
      if (
        invoice_id !== "" &&
        cust_payment_terms !== "" &&
        invoice_currency !== ""
      ) {
        alert.success("Data Updating ...");
        const { data } = await axios.post(
          `http://localhost:8080/highradius_project/editData?invoice_id=${invoice_id}&cust_payment_terms=${cust_payment_terms}&invoice_currency=${invoice_currency}`
        );
        setLink(
          `http://localhost:8080/highradius_project/searchData?invoice_id=${invoice_id}`
        );

        alert.success(data);
      }
    }

    handleEditClose();
  };

  return (
    <Fragment>
      <Container maxWidth={"sm"}>
        <Modal
          open={editOpen}
          onClose={handleEditClose}
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
              Edit Records
            </Typography>

            <FormGroup>
              <div className={"advFlex"}>
                {" "}
                <OutlinedInput
                  style={{
                    marginRight: "20px",
                    backgroundColor: "white",
                  }}
                  value={cust_payment_terms}
                  onChange={(e) =>
                    setCust_payment_terms(e.target.value)
                  }
                  placeholder='Cust Payment Terms'
                  required={true}
                />
                <OutlinedInput
                  style={{
                    backgroundColor: "white",
                  }}
                  value={invoice_currency}
                  onChange={(e) =>
                    setinvoice_currency(e.target.value)
                  }
                  placeholder='Invoice Currency'
                  required={true}
                />
              </div>
            </FormGroup>

            <div className='advFlexbtn'>
              <Button
                variant={
                  sl_no.length !== 0
                    ? "outlined"
                    : "disabled"
                }
                className='muiBtn'
                style={{ marginRight: "5px" }}
                onClick={(e) => {
                  handleEdit(e, sl_no, setLink);
                }}
              >
                Edit
              </Button>
              <Button
                className='muiBtn'
                variant='outlined'
                onClick={handleEditClose}
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

export default Edit;
