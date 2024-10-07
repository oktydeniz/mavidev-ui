import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  IconButton,
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { userLanguage } from "network/Constant";

const DataTable = ({ records }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleEdit = (id) => {
    console.log("Edit:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete:", id);
  };

  const handleDetail = (id) => {
    console.log("Detail:", id);
  };

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(userLanguage, options);
  };

  if (records.length < 1) {
    return <p className="no-data-found">No records were found.</p>;
  }
  return (
    <div>
      <h3 className="found-data">{records.length} records found</h3>
      <TableContainer
        sx={{
          height: "550px",
          overflowY: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "center" }}>Order</TableCell>
              <TableCell style={{ textAlign: "center" }}>City</TableCell>
              <TableCell style={{ textAlign: "center" }}>District</TableCell>
              <TableCell style={{ textAlign: "center" }}>Created At</TableCell>
              <TableCell style={{ textAlign: "center" }}>Area</TableCell>
              <TableCell style={{ textAlign: "center" }}>Population</TableCell>
              {/*<TableCell style={{ textAlign: "center" }}>Actions</TableCell>*/}
            </TableRow>
          </TableHead>
          <TableBody>
            {records
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow
                  onClick={() => handleDetail(row.id)}
                  className="table-row"
                  key={row.id}
                >
                  <TableCell style={{ textAlign: "center" }}>
                    {index + 1}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {row.city.label}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {row.district.label}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {formatDate(row.createdAt)}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {row.area}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                  {row.population}
                  </TableCell>
                  {/*
                <TableCell style={{ textAlign: "center" }}>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDetail(row.id);
                    }}
                  >
                    <InfoIcon />
                  </IconButton>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(row.id);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDelete(row.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                */}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={records.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
      />
    </div>
  );
};

export default DataTable;
