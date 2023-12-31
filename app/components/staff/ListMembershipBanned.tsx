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
import DropDownEditResort from "./DropDownEditResort";
import DropDownBanMember from "./DropDownBanMember";

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
  imageUrl: string,
  name: string,
  address: string,
  email: string,
  phone: string,
  apartment: string,
  unban: string
) {
  return { imageUrl, name, address, email, phone, apartment, unban };
}

const rows = [
  createData(
    "/images/resort1.jpg",
    "Trí Thức",
    "Dak Lak province",
    "buitrithuc1008@gmail.com",
    "0856597778",
    "4",
    "..."
  ),
  createData(
    "/images/resort2.jpg",
    "Trọng Tín",
    "Long An Province",
    "trongtin@gmail.com",
    "0965487221",
    "3",
    "..."
  ),
];

export default function ListMembershipBanned() {
  return (
    <>
      <div>
        Staff {">"} <span className="text-common">List Membership Banned</span>
      </div>
      <div className="flex flex-row justify-between items-center mt-10 mb-5 ">
        <div className="text-common text-[20px] font-bold ">
          List Membership
        </div>
      </div>
      <TableContainer className="mb-10" component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className="!bg-white !text-black !text-[17px] !font-semibold">
                Name{" "}
              </StyledTableCell>
              <StyledTableCell
                className="!bg-white !text-black !text-[17px] !font-semibold"
                align="right"
              >
                Adress
              </StyledTableCell>
              <StyledTableCell
                className="!bg-white !text-black !text-[17px] !font-semibold"
                align="right"
              >
                Email
              </StyledTableCell>
              <StyledTableCell
                className="!bg-white !text-black !text-[17px] !font-semibold"
                align="right"
              >
                Phone{" "}
              </StyledTableCell>
              <StyledTableCell
                className="!bg-white !text-black !text-[17px] !font-semibold"
                align="right"
              >
                Apartment{" "}
              </StyledTableCell>
              <StyledTableCell
                className="!bg-white !text-black !text-[17px] !font-semibold"
                align="right"
              >
                Action
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell
                  className="!py-5 !text-common"
                  component="th"
                  scope="row"
                >
                  <div className="flex flex-row items-center ">
                    <img
                      className="w-10 h-10 rounded-full mr-2"
                      src="/images/resort1.jpg"
                      alt=""
                    />
                    <Link href="/staff/editmembership">{row.name}</Link>
                  </div>
                </StyledTableCell>
                <StyledTableCell className="!py-5 !text-common" align="right">
                  {row.address}
                </StyledTableCell>
                <StyledTableCell className="!py-5 " align="right">
                  {row.email}
                </StyledTableCell>
                <StyledTableCell
                  className="!py-5 !text-green-500 "
                  align="right"
                >
                  {row.phone}
                </StyledTableCell>
                <StyledTableCell
                  className="!py-5 !text-green-500 "
                  align="right"
                >
                  {row.apartment}
                </StyledTableCell>
                <StyledTableCell
                  className="!py-5 !text-green-500 "
                  align="right"
                >
                  <DropDownBanMember />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
