import React from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "./data";

function ModeratorInterviewerTable() {
  const tableData = {
    columns,
    data
  };

  return (
    <div className="main">
      <DataTableExtensions {...tableData}>
        <DataTable
          columns={columns}
          data={data}
          //scroll
          fixedHeader
          fixedHeaderScrollHeight="500px"
          noHeader
          //defaultSortField="id"
          pagination
          highlightOnHover
          selectableRows
        />
      </DataTableExtensions>
    </div>
  );
}
export default ModeratorInterviewerTable

