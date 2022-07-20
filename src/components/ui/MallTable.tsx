import * as React from "react";
import { DataGrid, GridColDef, GridToolbar } from "@mui/x-data-grid";
import { ShopInvoicResponse } from "proto/ts/api_pb";

export const getFieldName = (name: keyof ShopInvoicResponse.AsObject) => {
  let c: keyof ShopInvoicResponse.AsObject = name;
  return c;
};

export default function MallTable() {
  return (
    <div style={{ flexGrow: 1 }}>
      <DataGrid
        getRowId={(row) => row["invoiceid"]}
        rows={rows}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
      />
    </div>
  );
}

const rows: ShopInvoicResponse.AsObject[] = [
  {
    invoiceid: 100002,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
  {
    invoiceid: 100002,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
  {
    invoiceid: 100002,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
  {
    invoiceid: 100002,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
  {
    invoiceid: 100002,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
  {
    invoiceid: 100002,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
  {
    invoiceid: 100002,
    timestamp: "12/1/2022",
    subtotal: 2540,
    services: "Paid",
    vat: 10,
    grandtotal: 500,
  },
];

const columns: GridColDef[] = [
  { field: getFieldName("invoiceid"), headerName: "Invoice ID", width: 150 },
  { field: getFieldName("timestamp"), headerName: "Time Stamp", width: 150 },
  { field: getFieldName("subtotal"), headerName: "Subtotal", width: 150 },
  { field: getFieldName("services"), headerName: "Services", width: 150 },
  { field: getFieldName("vat"), headerName: "VAT", width: 150 },
  {
    field: getFieldName("grandtotal"),
    headerName: "Grand Total ",
    width: 150,
  },
];
