import React from "react";
import DataTable from "react-data-table-component";
import { columns, data } from "../../constant/index";

const index = () => {

  return (
    <div className="main">
        <DataTable
          columns={columns}
          data={data}
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