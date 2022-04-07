import {
  Box,
  Button,
  FormGroup,
  Modal,
  OutlinedInput,
  Typography,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import React, { Fragment, useState } from "react";
import "./addModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#182933",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  px: 2,
  pt: 2,
  pb: 6,
  width: "60%",
  height: "40%",
  color: "white",
};

const AddModal = ({ addOpen, handleAddClose }) => {
  const [business_code, setBusiness_code] = useState("");
  const [cust_number, setCust_number] = useState("");
  const [clear_date, setClear_date] = useState(new Date());
  const [buisness_year, setBuisness_year] = useState("");
  const [doc_id, setDoc_id] = useState("");
  const [posting_date, setPosting_date] = useState("");
  const [document_create_date, setDocument_create_date] =
    useState("");
  const [due_in_date, setDue_in_date] = useState("");
  const [invoice_currency, setInvoice_currency] =
    useState("");
  const [document_type, setDocument_type] = useState("");
  const [posting_id, setPosting_id] = useState("");
  const [total_open_amount, setTotal_open_amount] =
    useState("");
  const [baseline_create_date, setBaseline_create_date] =
    useState("");
  const [cust_payment_terms, setCust_payment_terms] =
    useState("");
  const [invoice_id, setInvoice_id] = useState("");

  return (
    <Fragment>
      <Modal
        open={addOpen}
        onClose={handleAddClose}
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
            Add
          </Typography>

          <FormGroup>
            {/* --------1st Row -------- */}
            <div className={"advFlex"}>
              <OutlinedInput
                style={{
                  width: "100%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={business_code}
                onChange={(e) =>
                  setBusiness_code(e.target.value)
                }
                placeholder='Business Code'
              />
              <OutlinedInput
                style={{
                  width: "100%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={cust_number}
                onChange={(e) =>
                  setCust_number(e.target.value)
                }
                placeholder='Customer Number'
              />

              <LocalizationProvider
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  label='Clear Date'
                  mask='____/__/__'
                  value={clear_date}
                  onChange={(newValue) =>
                    setClear_date(newValue)
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      style={{
                        width: "100%",

                        marginRight: "20px",
                        backgroundColor: "white",
                        color: "white",
                      }}
                    />
                  )}
                />
              </LocalizationProvider>

              <OutlinedInput
                style={{
                  width: "100%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={buisness_year}
                onChange={(e) =>
                  setBuisness_year(e.target.value)
                }
                placeholder='Business Year'
              />
            </div>

            {/* -------2ndRow------- */}
            <div className={"advFlex"}>
              <OutlinedInput
                style={{
                  width: "100%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={doc_id}
                onChange={(e) => setDoc_id(e.target.value)}
                placeholder='Document Id'
              />
              <OutlinedInput
                style={{
                  width: "100%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={posting_date}
                onChange={() => {}}
                placeholder='Posting Date'
              />
              <OutlinedInput
                style={{
                  width: "100%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={document_create_date}
                onChange={() => {}}
                placeholder='Document Create Date'
              />
              <OutlinedInput
                style={{
                  width: "100%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={due_in_date}
                onChange={() => {}}
                placeholder='Due In Date'
              />
            </div>

            {/* --------3rd Row-------- */}

            <div className={"advFlex"}>
              <OutlinedInput
                style={{
                  width: "100%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={invoice_currency}
                onChange={(e) =>
                  setInvoice_currency(e.target.value)
                }
                placeholder='Invoice Currency'
              />
              <OutlinedInput
                style={{
                  width: "100%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={document_type}
                onChange={(e) =>
                  setDocument_type(e.target.value)
                }
                placeholder='Document Type'
              />
              <OutlinedInput
                style={{
                  width: "100%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={posting_id}
                onChange={(e) =>
                  setPosting_id(e.target.value)
                }
                placeholder='Posting Id'
              />
              <OutlinedInput
                style={{
                  width: "100%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={total_open_amount}
                onChange={(e) =>
                  setTotal_open_amount(e.target.value)
                }
                placeholder='Total Open Amount'
              />
            </div>

            {/* --------4th Row-------- */}
            <div className={"advFlexLast"}>
              <OutlinedInput
                style={{
                  width: "49%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={baseline_create_date}
                onChange={() => {}}
                placeholder='Baseline Create Date'
              />
              <OutlinedInput
                style={{
                  width: "49%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={cust_payment_terms}
                onChange={(e) =>
                  setCust_payment_terms(e.target.value)
                }
                placeholder='Customer Payment Terms'
              />
              <OutlinedInput
                style={{
                  width: "49%",
                  marginRight: "20px",
                  backgroundColor: "white",
                }}
                value={invoice_id}
                onChange={(e) =>
                  setInvoice_id(e.target.value)
                }
                placeholder='Invoice Id'
              />
            </div>
          </FormGroup>

          <div className='advFlexbtn'>
            <Button
              variant='outlined'
              className='muiBtn'
              style={{ marginRight: "5px" }}
              onChange={() => {}}
            >
              Add
            </Button>
            <Button
              className='muiBtn'
              variant='outlined'
              onClick={handleAddClose}
            >
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </Fragment>
  );
};

export default AddModal;
