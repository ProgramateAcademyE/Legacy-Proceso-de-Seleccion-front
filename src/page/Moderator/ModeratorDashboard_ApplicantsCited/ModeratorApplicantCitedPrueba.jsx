import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data, headers, dataTemplate } from "./data";
import "./styles.css";
import { CSVLink } from "react-csv";

// import * as jsa from "./response_sale_order.json";

const ExpandableComponent = ({ data }) => {
  console.log(data);
  return (
    <table>
      <thead>
        <tr>
          <th>Sku Name</th>
          <th>Qty</th>
        </tr>
      </thead>
      <tbody>
        {data.order_line &&
          data.order_line.length != 0 &&
          data.order_line.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.product_uom_qty}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

function ModeratorApplicantsCitedPrueba() {
  const tableData = {
    columns,
    data,
  };

  const [dataTemp, setDataTemp] = useState([]);

  useEffect(() => {
    let result = dataTemplate();
    setDataTemp(result);
  }, []);

  return (
    <div className="main">
      <DataTableExtensions exportHeaders columns={headers} data={dataTemp}>
        <DataTable
          columns={columns}
          data={data}
          noDataComponent="No hay reuniones programadas"
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          expandableRows
          expandableRowsComponent={<ExpandableComponent />}
        />
      </DataTableExtensions>
    </div>
  );
}

export default ModeratorApplicantsCitedPrueba;
