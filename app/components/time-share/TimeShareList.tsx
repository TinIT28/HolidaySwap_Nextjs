"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Link from "next/link";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#5C98F2", // Thay đổi màu ở đây
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(
  Date: string,
  Night: number,
  Price: String,
  Room: number,
  Sleep: number,
  View: String,
  Button: String
) {
  return { Date, Night, Price, Room, Sleep, View, Button };
}

const rows = [
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
  createData("06/21/24–06/28/24", 7, "$330", 6.0, 24, "Varies", "View Posting"),
];

export default function TimeShareList() {
  return (
    <TableContainer component={Paper} className="flex flex-col items-center">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow className="bg-yellow-600">
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Night</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Room</StyledTableCell>
            <StyledTableCell align="right">Sleep</StyledTableCell>
            <StyledTableCell align="right">Varies</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <>
              <StyledTableRow key={row.Date}>
                <StyledTableCell component="th" scope="row">
                  {row.Date}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {row.Night}
                </StyledTableCell>
                <StyledTableCell align="right">{row.Price}</StyledTableCell>
                <StyledTableCell align="right">{row.Room}</StyledTableCell>
                <StyledTableCell align="right">{row.Sleep}</StyledTableCell>
                <StyledTableCell align="right">{row.View}</StyledTableCell>
                <div className="text-center bg-[#00748F] mt-3 w-[120px] -mr-[70px] mx-3 text-white">
                  <Link href="./detail-apartment">{row.Button}</Link>
                </div>
              </StyledTableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
