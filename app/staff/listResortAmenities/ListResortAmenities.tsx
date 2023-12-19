'use client';
import HeadingDashboard from '@/app/components/HeadingDashboard';
import { Button, Label, Pagination, Table, TextInput, Modal } from 'flowbite-react';
import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import useAxiosAuthClient from '@/app/hooks/useAxiosAuthClient';
import GetResortAmenityStaff from '@/app/actions/getResortAmenityStaff';
import Image from 'next/image';
import useEditResortAmenitiesModal from '@/app/hooks/useEditResortAmenitiesModal';

interface Pageable {
  pageNo: number;
  pageSize: number;
  sortDirection: string;
  sortBy: string;
}

interface ListResortAmenitiesProps {
  amenitiesType: any;
}

const ListResortAmenities: React.FC<ListResortAmenitiesProps> = ({ amenitiesType }) => {
  const router = useRouter();
  const [amenitiesList, setAmenitiesList] = useState<any[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [idDelete, setIdDelete] = useState<any>();
  const [isDeleted, setIsDeleted] = useState(false);
  const axiosAuthClient = useAxiosAuthClient();
  const editResortAmenitiesModal = useEditResortAmenitiesModal();

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    setPageable({ ...pageable, pageNo: page - 1 });
  };

  const [pageable, setPageable] = useState<Pageable>({
    pageNo: 0,
    pageSize: 10,
    sortDirection: 'desc',
    sortBy: 'id',
  });

  const [searchName, setSeachName] = useState<string>('');
  const fetchPropertyView = async (id?: number) => {
    const response = await GetResortAmenityStaff({
      searchName: searchName,
      pageable: pageable,
    });
    {
      const result = response.content.filter((element: any) => element.id != id);
      const theFilterOut = response.content.filter((element: any) => element.id == id);
      result.slice(0, 0, ...theFilterOut);
      setAmenitiesList(result);
    }
    setTotalPages(response.totalPages);
  };

  useEffect(() => {
    fetchPropertyView();
  }, [JSON.stringify(pageable), JSON.stringify(searchName)]);

  //   const handleDeleteProperty = (id: any) => {
  //     axiosAuthClient
  //       .delete(`https://holiday-swap.click/api/v1/property-view/${id}`)
  //       .then(() => {
  //         setOpenModal(false);
  //         setIsDeleted(true);
  //         toast.success('Delete property success');
  //       })
  //       .catch((response) => {
  //         setOpenModal(false);
  //         toast.error(response.response.data.message);
  //       });
  //   };

  const handleSearchNameSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setSeachName(e.currentTarget.searchName.value);
  };
  return (
    <Fragment>
      <div className="mt-2">
        <HeadingDashboard
          routerDashboard="/staff"
          pageCurrentContent="List Resort Amenities"
          pageCurrentRouter="/staff/listResortAmenities"
        />
      </div>

      <div className="">
        <div className="pb-5 pt-3">
          <form onSubmit={(e) => handleSearchNameSubmit(e)}>
            <Label
              htmlFor="searchName"
              value="Search Name: "
              className="mx-1 inline-block align-middle"
            />
            <div className="flex">
              <TextInput name="searchName" type="text" className="mx-1" />
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
        <Table>
          <Table.Head>
            <Table.HeadCell>STT</Table.HeadCell>
            <Table.HeadCell>Resort Amenity Name</Table.HeadCell>
            <Table.HeadCell>Resort Amenity Description</Table.HeadCell>
            <Table.HeadCell>Resort Amenity Type Icon</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {amenitiesList?.map((item: any, index: any) => (
              <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {pageable.pageNo * pageable.pageSize + index + 1}
                </Table.Cell>
                <Table.Cell className="w-[200px]">{item.resortAmenityName}</Table.Cell>
                <Table.Cell>{item.resortAmenityDescription}</Table.Cell>

                <Table.Cell>
                  <Image
                    src={item.resortAmenityLinkIcon}
                    width={30}
                    height={30}
                    className="object-cover"
                    alt="icon"
                  />
                </Table.Cell>
                <Table.Cell className="flex flex-row gap-3 items-center h-full">
                  <div
                    onClick={() => editResortAmenitiesModal.onOpen(item, amenitiesType)}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 cursor-pointer"
                  >
                    Edit
                  </div>
                  <div
                    onClick={() => {
                      setOpenModal(true);
                      setIdDelete(item.id);
                    }}
                    className="font-medium text-rose-600 hover:underline hover:cursor-pointer dark:text-rose-500"
                  >
                    Delete
                  </div>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <div className="flex overflow-x-auto sm:justify-center py-3">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={onPageChange}
            showIcons
          />
        </div>

        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Delete property view</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Do you want to delete this property view
              </p>
            </div>
          </Modal.Body>
          <Modal.Footer className="flex justify-end">
            <Button color="red" className="font-bold">
              Delete
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
};

export default ListResortAmenities;
