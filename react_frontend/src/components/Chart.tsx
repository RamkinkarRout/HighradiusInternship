import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import {
  Box,
  Container,
  Modal,
  Typography,
} from "@mui/material";

import "./chart.css";

ChartJS.register(
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Analysis of Customer and Total Open Amount",
    },
  },
};

const labels = [
  "Unilever",
  "Johnson and Johnson",
  "Bose",
  "Kellog's",
  "Sony",
  "Puma",
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 2,
  px: 2,
  pt: 2,
  pb: 6,
  width: "60%",
  height: "100%",
  color: "white",
  overflow: "scroll",
};

const Chart = ({ chartOpen, handleChartClose, result }) => {
  console.log(result);

  // getting cust_number and  total_open_amount from result max 1000 records

  const cust_number = result.map((item) =>
    parseInt(item.cust_number)
  );

  //changing the data type of total_open_amount to number from double

  const total_open_amount = result.map((item) =>
    parseInt(item.total_open_amount)
  );

  console.log(cust_number);
  console.log(total_open_amount);

  const data = {
    labels,
    datasets: [
      {
        label: "No of Customers",
        data: labels.map(
          () =>
            cust_number[
              Math.floor(Math.random() * cust_number.length)
            ]

          // faker.datatype.number({ min: 0, max: 1000 })
        ),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Total open amount",
        data: labels.map(
          () =>
            total_open_amount[
              Math.floor(
                Math.random() * total_open_amount.length
              )
            ]
          // faker.datatype.number({ min: 0, max: 1000 })
        ),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <Container maxWidth={"sm"}>
      <Modal
        open={chartOpen}
        onClose={handleChartClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Typography
            variant='h6'
            id='modal-modal-title'
            style={{
              marginBottom: "20px",
              maxHeight: "50%",
              maxWidth: "50%",
              alignItems: "center",
              objectFit: "contain",
            }}
          >
            Chart
          </Typography>

          <Bar options={options} data={data} />
          <Pie
            data={data}
            style={{
              marginTop: "20px",
              marginBottom: "20px",
            }}
          />
        </Box>
      </Modal>
    </Container>
  );
};

export default Chart;
