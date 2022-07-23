import * as React from "react";
import { DataGrid, GridToolbar, DataGridProps } from "@mui/x-data-grid";

interface TableProps extends DataGridProps {
  uniqueKey: string;
}

export default function MallTable(props: TableProps) {
  return (
    <div style={{ flexGrow: 1 }}>
      <DataGrid
        getRowId={(row) => row[props.uniqueKey]}
        components={{ Toolbar: GridToolbar }}
        {...props}
      />
    </div>
  );
}
