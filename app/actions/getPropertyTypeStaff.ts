import axios from 'axios';

interface Pageable {
  pageNo: number;
  pageSize: number;
  sortDirection: string;
  sortBy: string;
}

interface ApiParam {
  searchName: string;
  pageable: Pageable;
}

const GetPropertyTypeStaff = async (apiParam: ApiParam): Promise<any> => {
  const url = `https://holiday-swap.click/api/v1/property-types?`
    .concat(`pageNo=${apiParam.pageable.pageNo}`)
    .concat(`&pageSize=${apiParam.pageable.pageSize}`)
    .concat(`&sortDirection=${apiParam.pageable.sortDirection}`)
    .concat(`&sortBy=${apiParam.pageable.sortBy}`)
    .concat(`&searchName=${apiParam.searchName}`);

  try {
    const response = await axios.get(url);
    if (!response.data) {
      return null;
    }
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default GetPropertyTypeStaff;
