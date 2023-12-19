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

export default async function GetPropertyViewStaff(apiParam: ApiParam) {
  const url = `https://holiday-swap.click/api/v1/property-view?`
    .concat(`pageNo=${apiParam.pageable.pageNo}`)
    .concat(`&pageSize=${apiParam.pageable.pageSize}`)
    .concat(`&sortDirection=${apiParam.pageable.sortDirection}`)
    .concat(`&sortBy=${apiParam.pageable.sortBy}`)
    .concat(`&searchName=${apiParam.searchName}`);

  try {
    const propertyViews = await axios.get(url);

    if (!propertyViews) {
      return null;
    }

    return propertyViews.data;
  } catch (error) {}
}
