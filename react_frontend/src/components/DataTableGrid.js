import React, {
  Fragment,
  useCallback,
  useEffect,
  useState,
} from "react";
import { DataGrid } from "@material-ui/data-grid";
import axios from "axios";
import "./App.css";

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
    {
      field: "sl_no",
      headerName: "Sl no",
      width: 150,
      sortable: true,
      editable: false,
    },
    {
      field: "business_code",
      headerName: "Business Code",
      width: 150,
      editable: false,
    },
    {
      field: "cust_number",
      headerName: "Custmer Number ",
      width: 150,
      editable: false,
    },
    {
      field: "clear_date",
      headerName: "Clear Date",
      type: "date",
      width: 150,
      editable: false,
    },
    {
      field: "buisness_year",
      headerName: "Business Year",
      type: "date",
      width: 150,
      editable: false,
    },
    {
      field: "doc_id",
      headerName: "Doc Id",
      type: "number",
      width: 110,
      editable: false,
    },
    {
      field: "posting_date",
      headerName: "Posting Date",
      type: "date",
      width: 150,
      editable: false,
    },
    {
      field: "document_create_date",
      headerName: "Document Create Date",
      type: "date",
      width: 150,
      editable: false,
    },
    {
      field: "due_in_date",
      headerName: "Due Date",
      type: "date",
      width: 150,
      editable: false,
    },
    {
      field: "invoice_currency",
      headerName: "Invoice Currency",
      type: "String",
      width: 110,
      editable: false,
    },
    {
      field: "document_type",
      headerName: "Document Type",
      type: "String",
      width: 110,
      editable: false,
    },
    {
      field: "posting_id",
      headerName: "Posting Id",
      type: "number",
      width: 110,
      editable: false,
    },
    // {
    //   field: "area_business",
    //   headerName: "Area Business",
    //   type: "String",
    //   width: 150,
    //   editable: false,
    // },
    {
      field: "total_open_amount",
      headerName: "Total Open Amount",
      type: "number",
      width: 150,
      editable: false,
    },
    {
      field: "baseline_create_date",
      headerName: "Baseline Create Date",
      type: "date",
      width: 150,
      editable: false,
    },
    {
      field: "cust_payment_terms",
      headerName: "Customer Payment Terms",
      type: "String",
      width: 150,
      editable: false,
    },
    {
      field: "invoice_id",
      headerName: "Invoice Id",
      type: "number",
      width: 110,
      editable: false,
    },
    {
      field: "isOpen",
      headerName: "Is Open",
      type: "number",
      width: 110,
      editable: false,
    },

    {
      field: "is_deleted",
      headerName: "Is Deleted",
      type: "number",
      width: 110,
      editable: false,
    },
  ];

  // const rows = [
  //   result &&
  //     result.map((item, index) => {
  //       return {
  //         key: index,
  //         sl_no: item.sl_no,
  //         business_code: item.business_code,
  //         cust_number: item.cust_number,
  //         clear_date: item.clear_date,
  //         buisness_year: item.buisness_year,
  //         doc_id: item.doc_id,
  //         posting_date: item.posting_date,
  //         document_create_date: item.document_create_date,
  //         due_in_date: item.due_in_date,
  //         invoice_currency: item.invoice_currency,
  //         document_type: item.document_type,
  //         posting_id: item.posting_id,
  //         area_business: item.area_business,
  //         total_open_amount: item.total_open_amount,
  //         baseline_create_date: item.baseline_create_date,
  //         cust_payment_terms: item.cust_payment_terms,
  //         invoice_id: item.invoice_id,
  //         isOpen: item.isOpen,
  //         aging_bucket: item.aging_bucket,
  //         is_deleted: item.is_deleted,
  //       };
  //     }),
  // ];

  const handleRowClick = (param, event) => {
    console.log("Row:");
    console.log(param);
    console.log(event);
  };
  return (
    <Fragment>
      <div
        style={{
          height: "70vh",
          width: "100%",
          backgroundColor: "#182933",
        }}
      >
        {result ? (
          <DataGrid
            style={{ color: "white" }}
            rows={result}
            getRowId={(row) => row.sl_no}
            columns={columns}
            rowLength={result.length}
            maxColumns={columns.length}
            checkboxSelection
            disableSelectionOnClick
            onRowClick={handleRowClick}
          />
        ) : (
          <div className='loading'>
            Data is still Loading...
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default DataTableGrid;
