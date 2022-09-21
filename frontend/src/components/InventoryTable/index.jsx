import React from "react";
import DataTable from "react-data-table-component";
import { columns } from "../../constant/index";

const index = ({inventoryTableData}) => {

  return (
    <div className="main">
        <DataTable
          columns={columns}
          data={inventoryTableData}
          noHeader
          defaultSortField="id"
          defaultSortAsc={false}
          pagination
          highlightOnHover
          className="table_main"
        />
    </div>
  );
}


export default index;