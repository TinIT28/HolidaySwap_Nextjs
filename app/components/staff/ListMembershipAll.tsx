'use client';
import React, { ChangeEvent, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link';
import { format } from 'date-fns';
import DropDownBanMember from './DropDownBanMember';
import Image from 'next/image';
import { Button, Dropdown, Modal, Pagination } from 'flowbite-react';
import SelectRouterStaff from './SelectRouterStaff';
import HeadingDashboard from '../HeadingDashboard';
import { useRouter } from 'next/navigation';
import { BsCheck2Circle } from 'react-icons/bs';
import { BiBlock } from 'react-icons/bi';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import toast from 'react-hot-toast';
import axios from 'axios';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  imageUrl: string,
  name: string,
  address: string,
  email: string,
  phone: string,
  apartment: string
) {
  return { imageUrl, name, address, email, phone, apartment };
}

const rows = [
  createData(
    '/images/resort1.jpg',
    'Trí Thức',
    'Dak Lak province',
    'buitrithuc1008@gmail.com',
    '0856597778',
    '4'
  ),
  createData(
    '/images/resort2.jpg',
    'Trọng Tín',
    'Long An Province',
    'trongtin@gmail.com',
    '0965487221',
    '3'
  ),
  createData(
    '/images/resort3.jpg',
    'Đức Thịnh',
    'Đak Lak province',
    'thinhbui@gmail.com',
    '0376985769',
    '5'
  ),
  createData(
    '/images/resort1.jpg',
    'Phú Hưng',
    'Khanh Hoa province',
    'phuhung@gmail.com',
    '0826849763',
    '3'
  ),
  createData(
    '/images/resort6.jpg',
    'Đức Hưng',
    'Ninh Thuan province',
    'duchung@gmail.com',
    '0964529752',
    '6'
  ),
  createData(
    '/images/resort4.jpg',
    'Thanh Kiên',
    'Phu Quoc',
    'thanhkien@gmail.com',
    '0897369946',
    '1'
  ),
  createData(
    '/images/resort5.jpg',
    'Duy Thưởng',
    'Đak Lak province',
    'duythuong@gmail.com',
    '0976349982',
    '3'
  ),
];

interface ListMembershipAllProps {
  users?: any;
}

const statusList = [
  {
    status: 'ACTIVE',
    icon: BsCheck2Circle,
    color: '#2fde26',
  },
  {
    status: 'BLOCKED',
    icon: BiBlock,
    color: '#e62538',
  },
];

const ListMembershipAll: React.FC<ListMembershipAllProps> = ({ users }) => {
  const router = useRouter();
  const itemsPerPage = 7;
  const [userList, setUserList] = useState(users);
  const [openModal, setOpenModal] = useState(false);
  const [userId, setUserId] = useState<any>();
  const [status, setStatus] = useState<any>();

  const axiosAuthClient = useAxiosAuthClient();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(users.totalPages);
  const [username, setUserName] = useState('');

  const handlePageChange = (selectedPage: { selected: number }) => {
    setCurrentPage(selectedPage.selected);
  };

  const displayedItems = users?.content?.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  const onPageChange = (page: number) => setCurrentPage(page);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        let url = `https://holiday-swap.click/api/v1/users/search?status=ACTIVE&status=BLOCKED&roleIds=2&limit=10&offset=${
          currentPage - 1
        }&sortProps=id&sortDirection=desc`;
        if (username) {
          url += `&username=${username}`;
        }
        const response = await axios.get(url);
        setUserList(response.data);
        setPageCount(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [currentPage]);

  const handleOnChangeStatus = (id: any, value: any) => {
    const body = value;
    const config = {
      headers: { 'Content-type': 'application/json' },
    };

    let url = `https://holiday-swap.click/api/v1/users/search?status=ACTIVE&status=BLOCKED&roleIds=2&limit=10&offset=${
      currentPage - 1
    }&sortProps=id&sortDirection=desc`;

    if (username) {
      url += `&username=${username}`;
    }

    axiosAuthClient
      .put(`/users/${id}/status`, body, config)
      .then(async () => {
        toast.success('Update status success');
        const newList = await axios.get(url);
        setUserList(newList?.data);
        setPageCount(newList.data.totalPages);
      })
      .catch((response) => {
        toast.error(response);
      })
      .finally(() => {
        setOpenModal(false);
      });
  };

  const searchData = async () => {
    if (username) {
      let url = `https://holiday-swap.click/api/v1/users/search?status=ACTIVE&status=BLOCKED&roleIds=2&limit=10&offset=${
        currentPage - 1
      }&sortProps=id&sortDirection=desc&username=${username}`;
      const newData = await axios.get(url);
      setUserList(newData?.data);
      setPageCount(newData.data.totalPages);
    }
  };

  const handleOpenModal = (userId: any, status: any) => {
    setOpenModal(true);
    setUserId(userId);
    setStatus(status);
  };

  return (
    <>
      <div className="mt-2">
        <HeadingDashboard
          routerDashboard="/staff"
          pageCurrentContent="List membership"
          pageCurrentRouter="/staff/listmember"
        />
      </div>

      <div className="flex items-center my-4 gap-2">
        <label htmlFor="search" className="mr-2 text-sm">
          Search by Resort Name:
        </label>
        <input
          type="text"
          id="search"
          value={username}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setUserName(e.target.value);
          }}
          className="border p-2 rounded-md"
        />
        <Button onClick={searchData}>Search</Button>
      </div>
      <SelectRouterStaff />
      <div className="flex flex-row justify-between items-center py-5 ">
        <div className="text-common text-[20px] font-bold ">List Membership</div>
      </div>
      <TableContainer className="mb-10" component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell className="!bg-white !text-black !text-[17px] !font-semibold">
                Name{' '}
              </StyledTableCell>
              <StyledTableCell
                className="!bg-white !text-black !text-[17px] !font-semibold"
                align="right"
              >
                Gender
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
                Phone{' '}
              </StyledTableCell>
              <StyledTableCell
                className="!bg-white !text-black !text-[17px] !font-semibold"
                align="right"
              >
                Status{' '}
              </StyledTableCell>
              <StyledTableCell
                className="!bg-white !text-black !text-[17px] !font-semibold"
                align="right"
              >
                Day of birth{' '}
              </StyledTableCell>
              <StyledTableCell
                className="!bg-white !text-black !text-[17px] !font-semibold"
                align="right"
              >
                Action{' '}
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.content.map((row: any) => (
              <StyledTableRow key={row.userId}>
                <StyledTableCell className="!py-5 !text-common" component="th" scope="row">
                  <div className="flex flex-row items-center ">
                    <Image
                      className="w-10 h-10 rounded-full mr-2"
                      width={50}
                      height={50}
                      src={row.avatar || '/images/placeholder.jpg'}
                      alt=""
                    />
                    <div
                      onClick={() => router.push(`/staff/editmembership/${row.userId}`)}
                      className="hover:underline"
                    >
                      {row.username}
                    </div>
                  </div>
                </StyledTableCell>
                <StyledTableCell className="!py-5 !text-common" align="right">
                  {row.gender}
                </StyledTableCell>
                <StyledTableCell className="!py-5 " align="right">
                  {row.email}
                </StyledTableCell>
                <StyledTableCell className="!py-5  " align="right">
                  {row.phone}
                </StyledTableCell>
                <StyledTableCell
                  className={`!py-5 ${
                    row.status === 'BLOCKED' ? '!text-red-500' : '!text-green-500'
                  }`}
                  align="right"
                >
                  {row.status === 'BLOCKED' ? 'BLOCKED' : row.status}
                </StyledTableCell>
                <StyledTableCell className="!py-5 " align="right">
                  {format(new Date(row.dob), 'yyyy-MM-dd')}
                </StyledTableCell>
                <StyledTableCell className="!py-5" align="right">
                  <Dropdown
                    label=""
                    dismissOnClick={false}
                    renderTrigger={() => (
                      <span className="text-sky-500 hover:underline cursor-pointer">Edit</span>
                    )}
                  >
                    {(() => {
                      if (row.status === 'ACTIVE') {
                        return (
                          <>
                            {statusList.slice(1, 2).map((status: any, index: number) => (
                              <Dropdown.Item
                                key={index}
                                value={status.status}
                                className="flex items-center gap-2"
                                onClick={() => {
                                  handleOpenModal(row.userId, status.status);
                                }}
                              >
                                <status.icon size={18} color={status.color} />

                                <span className={`text-[${status.color}]`}>{status.status}</span>
                              </Dropdown.Item>
                            ))}
                          </>
                        );
                      } else if (row.status === 'BLOCKED') {
                        return (
                          <>
                            {statusList.slice(0, 1).map((status: any, index: number) => (
                              <Dropdown.Item
                                key={index}
                                value={status.status}
                                className="flex items-center gap-2"
                                onClick={() => handleOnChangeStatus(row.userId, status.status)}
                              >
                                <status.icon size={18} color={status.color} />

                                <span className={`text-[${status.color}]`}>{status.status}</span>
                              </Dropdown.Item>
                            ))}
                          </>
                        );
                      }
                    })()}
                  </Dropdown>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Block user</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Do you want to block this user
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer className="flex flex-row justify-end">
          <Button color="red" onClick={() => handleOnChangeStatus(userId, status)}>
            Continue
          </Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="flex py-5 overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={pageCount}
          onPageChange={onPageChange}
          showIcons
        />
      </div>
    </>
  );
};

export default ListMembershipAll;
