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

export default async function GetResortAmenityStaff(apiParam: ApiParam) {
  const url = `https://holiday-swap.click/api/v1/resort-amenities?`
    .concat(`pageNo=${apiParam.pageable.pageNo}`)
    .concat(`&pageSize=${apiParam.pageable.pageSize}`)
    .concat(`&sortDirection=${apiParam.pageable.sortDirection}`)
    .concat(`&sortBy=${apiParam.pageable.sortBy}`)
    .concat(`&name=${apiParam.searchName}`);

  try {
    const ameniteis = await axios.get(url);

    if (!ameniteis) {
      return null;
    }

    return ameniteis.data;
  } catch (error) {}
}
