import {
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import Chart from "./Chart.tsx";
import React, {
  Fragment,
  useCallback,
  useState,
} from "react";
import "./Analytics.css";
import axios from "axios";
import { useAlert } from "react-alert";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "#182933",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
  color: "white",
};

const Analytics = ({
  analysisOpen,
  handleAnalysisClose,
}) => {
  const [cleardatefrom, setcleardatefrom] = useState("");
  const [cleardateto, setcleardateto] = useState("");
  const [duedatefrom, setduedatefrom] = useState("");
  const [duedateto, setduedateto] = useState("");
  const [baselinefrom, setbaselinefrom] = useState("");
  const [baselineto, setbaselineto] = useState("");
  const [invoicecurrency, setinvcurrency] = useState("");

  const [chartOpen, setChartOpen] = useState(false);
  const handleChartOpen = () => setChartOpen(true);
  const handleChartClose = () => setChartOpen(false);

  const [result, setResult] = useState([]);
  const alert = useAlert();

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      console.log(
        cleardatefrom,
        cleardateto,
        duedatefrom,
        duedateto,
        baselinefrom,
        baselineto,
        invoicecurrency
      );

      if (
        cleardatefrom !== "" &&
        cleardateto !== "" &&
        duedatefrom !== "" &&
        duedateto !== "" &&
        baselinefrom !== "" &&
        baselineto !== "" &&
        invoicecurrency !== ""
      ) {
        const { data } = await axios.get(
          `http://localhost:8080/highradius_project/analysis?cleardatefrom=${cleardatefrom}&cleardateto=${cleardateto}&duedatefrom=${duedatefrom}&duedateto=${duedateto}&baselinefrom=${baselinefrom}&baselineto=${baselineto}&invoicecurrency=${invoicecurrency}`
        );

        if (data.length === 0) {
          alert.error("No Data Found");
        } else {
          setResult(data);
          handleChartOpen();
        }
      } else {
        alert.error("Please fill all the fields");
        handleAnalysisClose();
      }
    },
    [
      cleardatefrom,
      cleardateto,
      duedatefrom,
      duedateto,
      baselinefrom,
      baselineto,
      invoicecurrency,
      alert,
      handleAnalysisClose,
    ]
  );

  return (
    <Fragment>
      <Modal
        open={analysisOpen}
        onClose={handleAnalysisClose}
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
            Analytic View
          </Typography>

          <form>
            <div className='flexcontainer'>
              <div className='flexinside'>Clear Date</div>
              <div className='flexinside'>Due Date</div>
            </div>
            <div className='flexcontainer'>
              <TextField
                label='From'
                variant='standard'
                className='textbox-add flexinside'
                type='date'
                value={cleardatefrom}
                onChange={(searchVal) =>
                  setcleardatefrom(searchVal.target.value)
                }
                size='small'
                sx={{
                  m: 2,
                  pt: 2,
                }}
              />
              <TextField
                label='From'
                type='date'
                variant='standard'
                className='textbox-add flexinside'
                value={duedatefrom}
                onChange={(searchVal) =>
                  setduedatefrom(searchVal.target.value)
                }
                size='small'
                sx={{
                  m: 2,
                  pt: 2,
                }}
              />
            </div>
            <div className='flexcontainer'>
              <TextField
                label='To'
                variant='standard'
                className='textbox-add flexinside'
                type='date'
                value={cleardateto}
                onChange={(searchVal) =>
                  setcleardateto(searchVal.target.value)
                }
                size='small'
                sx={{ m: 2, pt: 2 }}
              />
              <TextField
                label='To'
                type='date'
                variant='standard'
                className='textbox-add flexinside'
                value={duedateto}
                onChange={(searchVal) =>
                  setduedateto(searchVal.target.value)
                }
                size='small'
                sx={{ m: 2, pt: 2 }}
              />
            </div>
            <div className='flexcontainer'>
              <div className='flexinside'>
                Baseline Create Date
              </div>
              <div className='flexinside'>
                Invoice Currency
              </div>
            </div>
            <div className='flexcontainer'>
              <TextField
                label='From'
                variant='standard'
                className='textbox-add flexinside'
                type='date'
                value={baselinefrom}
                onChange={(searchVal) =>
                  setbaselinefrom(searchVal.target.value)
                }
                size='small'
                sx={{ m: 2, pt: 2 }}
              />
              <TextField
                label='Invoice Currency'
                variant='standard'
                className='textbox-add flexinside'
                value={invoicecurrency}
                onChange={(searchVal) =>
                  setinvcurrency(searchVal.target.value)
                }
                size='small'
                sx={{ m: 2, pt: 2 }}
              />
            </div>
            <div className='flexcontainer'>
              <TextField
                label='To'
                variant='standard'
                className='textbox-add flexinside'
                type='date'
                value={baselineto}
                onChange={(searchVal) =>
                  setbaselineto(searchVal.target.value)
                }
                size='small'
                sx={{ m: 2, pt: 2 }}
              />
              <div className='flexinside padcustom'></div>
            </div>
            <div className='advFlexbtn'>
              <Button
                variant='outlined'
                className='muiBtn'
                style={{ marginRight: "5px" }}
                onClick={(e) => handleSubmit(e)}
              >
                Submit
              </Button>
              <Button
                className='muiBtn'
                variant='outlined'
                onClick={handleAnalysisClose}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
      {chartOpen && (
        <Chart
          chartOpen={chartOpen}
          handleChartClose={handleChartClose}
          result={result}
        />
      )}
    </Fragment>
  );
};

export default Analytics;
