import { Container } from "@mui/material";
import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
} from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";

const DataTableGrid = () => {
  const [result, setResult] = useState([]);

  const fetchDAta = useCallback(async () => {
    const { data } = await axios.get(
      "http://localhost:8080/highradius_project/data"
    );

    console.log(data);
    setResult(data);
  }, []);

  useEffect(() => {
    fetchDAta();
  }, [fetchDAta]);

  const columns = [
    { field: "sl_no", headerName: "Sl no", width: 90 },
    {
      field: "business_code",
      headerName: "Business Code",
      width: 150,
    },
    {
      field: "cust_number",
      headerName: "Custmer Number ",
      width: 150,
    },
    {
      field: "clear_date",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "buisness_year",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "doc_id",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "posting_date",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "clear_date",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "clear_date",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "clear_date",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "clear_date",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "clear_date",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "clear_date",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "clear_date",
      headerName: "Age",
      type: "number",
      width: 110,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description:
        "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${
          params.row.lastName || ""
        }`,
    },
  ];

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    {
      id: 2,
      lastName: "Lannister",
      firstName: "Cersei",
      age: 42,
    },
    {
      id: 3,
      lastName: "Lannister",
      firstName: "Jaime",
      age: 45,
    },
    {
      id: 4,
      lastName: "Stark",
      firstName: "Arya",
      age: 16,
    },
    {
      id: 5,
      lastName: "Targaryen",
      firstName: "Daenerys",
      age: null,
    },
    {
      id: 6,
      lastName: "Melisandre",
      firstName: null,
      age: 150,
    },
    {
      id: 7,
      lastName: "Clifford",
      firstName: "Ferrara",
      age: 44,
    },
    {
      id: 8,
      lastName: "Frances",
      firstName: "Rossini",
      age: 36,
    },
    {
      id: 9,
      lastName: "Roxie",
      firstName: "Harvey",
      age: 65,
    },
  ];

  const handleRowClick = (param, event) => {
    console.log("Row:");
    console.log(param);
    console.log(event);
  };
  return (
    <Fragment>
      <Container maxWidth='xxl'>
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            rowLength={100}
            maxColumns={6}
            checkboxSelection
            disableSelectionOnClick
            onRowClick={handleRowClick}
          />
        </div>
      </Container>
    </Fragment>
  );
};

export default DataTableGrid;
