import * as React from "react";
import {
  DataGrid,
  GridToolbar,
  DataGridProps,
  gridClasses,
} from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";

interface TableProps extends DataGridProps {
  uniqueKey: string;
  hideToolbar?: boolean;
}

export default function MallTable(props: TableProps) {
  return (
    <div style={{ flexGrow: 1 }}>
      <StripedDataGrid
        getRowId={(row) => row[props.uniqueKey]}
        components={{ Toolbar: !props.hideToolbar && GridToolbar }}
        getRowClassName={(params) =>
          params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd"
        }
        {...props}
      />
    </div>
  );
}

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
  [`& .${gridClasses.row}.odd`]: {
    backgroundColor: "#fff",
  },
  [`& .${gridClasses.row}.even`]: {
    backgroundColor: "#f0f4f7",
  },
  [`& .${gridClasses.cell}`]: {
    // textAlign: "center",
  },
}));
