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
import React, {
  Fragment,
  useContext,
  useState,
} from "react";
import "./addModal.css";
import { LinkContext } from "../LinkCoontext";
import { useAlert } from "react-alert";
import axios from "axios";

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
  const { setLink } = useContext(LinkContext);
  const alert = useAlert();
  const [business_code, setBusiness_code] = useState("");
  const [cust_number, setCust_number] = useState("");
  const [clear_date, setClear_date] = useState(new Date());
  const [buisness_year, setBuisness_year] = useState("");
  const [doc_id, setDoc_id] = useState("");
  const [posting_date, setPosting_date] = useState(
    new Date()
  );
  const [document_create_date, setDocument_create_date] =
    useState(new Date());
  const [due_in_date, setDue_in_date] = useState(
    new Date()
  );
  const [invoice_currency, setInvoice_currency] =
    useState("");
  const [document_type, setDocument_type] = useState("");
  const [posting_id, setPosting_id] = useState("");
  const [total_open_amount, setTotal_open_amount] =
    useState("");
  const [baseline_create_date, setBaseline_create_date] =
    useState(new Date());
  const [cust_payment_terms, setCust_payment_terms] =
    useState("");
  const [invoice_id, setInvoice_id] = useState("");

  //post request

  const fetchData = async (newLink) => {
    try {
      const response = await axios.post(newLink);
      console.log(response);
      alert.success("Data Added Successfully");
    } catch (error) {
      console.log(error);
      alert.error("Data Added Failed");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      business_code !== "" &&
      cust_number !== "" &&
      buisness_year !== "" &&
      doc_id !== "" &&
      invoice_currency !== "" &&
      document_type !== "" &&
      posting_id !== "" &&
      total_open_amount !== "" &&
      cust_payment_terms !== "" &&
      invoice_id !== ""
    ) {
      const newLink = `http://localhost:8080/highradius_project/newData?business_code=${business_code}&cust_number=${cust_number}&clear_date=${clear_date}&buisness_year=${buisness_year}&doc_id=${doc_id}&posting_date=${posting_date}&document_create_date=${document_create_date}&due_in_date=${due_in_date}&invoice_currency=${invoice_currency}&document_type=${document_type}&posting_id=${posting_id}&total_open_amount=${total_open_amount}&baseline_create_date=${baseline_create_date}&cust_payment_terms=${cust_payment_terms}&invoice_id=${invoice_id}`;

      fetchData(newLink);

      setBusiness_code("");
      setCust_number("");
      setClear_date(new Date());
      setBuisness_year("");
      setDoc_id("");
      setPosting_date(new Date());
      setDocument_create_date(new Date());
      setDue_in_date(new Date());
      setInvoice_currency("");
      setDocument_type("");
      setPosting_id("");
      setTotal_open_amount("");
      setBaseline_create_date(new Date());
      setCust_payment_terms("");
      setInvoice_id("");
    } else {
      alert.error("Please fill all the fields");
      setLink(
        "http://localhost:8080/highradius_project/data"
      );
    }
    handleAddClose();
  };

  //date picker format change to yyyy-mm-dd

  const dateFormat = (newValue) => {
    const value =
      newValue.getFullYear() +
      "-" +
      (newValue.getMonth() + 1) +
      "-" +
      newValue.getDate();
    console.log(value);
    return value;
  };

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
                  views={["year", "month", "day"]}
                  format='YYYY-MM-DD'
                  //changing date format to yyyy-mm-dd
                  onChange={(newValue) =>
                    setClear_date(dateFormat(newValue))
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      style={{
                        width: "100%",
                        textAlign: "center",
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
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  label='Posting Date'
                  mask='____/__/__'
                  value={posting_date}
                  views={["year", "month", "day"]}
                  format='YYYY-MM-DD'
                  onChange={(newValue) =>
                    setPosting_date(dateFormat(newValue))
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
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  label='Docunent Created Date'
                  mask='____/__/__'
                  value={document_create_date}
                  views={["year", "month", "day"]}
                  format='YYYY-MM-DD'
                  onChange={(newValue) =>
                    setDocument_create_date(
                      dateFormat(newValue)
                    )
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
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  label='Due Date'
                  mask='____/__/__'
                  value={due_in_date}
                  views={["year", "month", "day"]}
                  format='YYYY-MM-DD'
                  onChange={(newValue) =>
                    setDue_in_date(dateFormat(newValue))
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
              <LocalizationProvider
                dateAdapter={AdapterDateFns}
              >
                <DatePicker
                  label='Baseline Create Date'
                  mask='____/__/__'
                  value={baseline_create_date}
                  views={["year", "month", "day"]}
                  format='YYYY-MM-DD'
                  onChange={(newValue) =>
                    setBaseline_create_date(
                      dateFormat(newValue)
                    )
                  }
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      style={{
                        width: "49%",

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
              onClick={(e) => {
                handleSubmit(e);
              }}
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
