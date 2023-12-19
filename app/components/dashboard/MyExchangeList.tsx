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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
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
  resortname: string,
  livingdate: string,
  total: string,
  paymentstatus: string
) {
  return { resortname, livingdate, total, paymentstatus };
}

const rows = [
  createData(
    "JW Marriott Phu Quoc Emerald Bay Resort & Spa",
    "	February 1, 2030",
    "	$0",
    "Pending"
  ),
  createData("Amanoi Resort", "	February 1, 2030", "	$392.40", "Pending"),
  createData(
    "JSix Senses Ninh Van Bay",
    "	February 1, 2030",
    "	$32.40",
    "Pending"
  ),
  createData(
    "Vinpearl Resort & Spa Phu Quoc",
    "	February 1, 2030",
    "	$0",
    "Pending"
  ),
  createData(
    "InterContinental Danang Sun Peninsula Resort",
    "	February 1, 2030",
    "	$22.40",
    "Pending"
  ),
  createData("Vinpearl Luxury Da Nang", "	February 1, 2030", "	$0", "Pending"),
];

export default function MyExchangeList() {
  return (
    <TableContainer className="mt-10" component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell className="!bg-white !text-black !text-[17px] !font-semibold">
              Resort Name{" "}
            </StyledTableCell>
            <StyledTableCell
              className="!bg-white !text-black !text-[17px] !font-semibold"
              align="right"
            >
              Living Date Exchange{" "}
            </StyledTableCell>
            <StyledTableCell
              className="!bg-white !text-black !text-[17px] !font-semibold"
              align="right"
            >
              Offset{" "}
            </StyledTableCell>
            <StyledTableCell
              className="!bg-white !text-black !text-[17px] !font-semibold"
              align="right"
            >
              Exchange Status{" "}
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.resortname}>
              <StyledTableCell
                className="!py-5 !text-common"
                component="th"
                scope="row"
              >
                {row.resortname}
              </StyledTableCell>
              <StyledTableCell className="!py-5 !text-common" align="right">
                {row.livingdate}
              </StyledTableCell>
              <StyledTableCell className="!py-5 " align="right">
                {row.total}
              </StyledTableCell>
              <StyledTableCell className="!py-5 !text-green-500 " align="right">
                {row.paymentstatus}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
