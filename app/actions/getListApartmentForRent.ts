import axios from 'axios';
interface IPageable {
  pageNo: number;
  pageSize: number;
  sortBy: string;
  sortDirection: 'asc' | 'desc';
}
interface IParams {
  locationName: string;
  checkIn: string;
  checkOut: string;
  min: number;
  max: number;
  guest: number;
  numberBedsRoom: number;
  numberBathRoom: number;
  listOfInRoomAmenity: number[];
  listOfPropertyView: number[];
  listOfPropertyType: number[];
}
export default async function getListApartmentForRent(resortId: number, pageable?: IPageable) {
  try {
    let apiUrl = `https://holiday-swap.click/api/v1/apartment-for-rent?`;
    const sortBy = `sortBy=${pageable?.sortBy ? pageable.sortBy : 'startTime'}`;
    const pageSize = `&pageSize=${pageable?.pageSize ? pageable.pageSize : '4'}`;
    const pageNo = `&pageNo=${pageable?.pageNo ? pageable.pageNo : ''}`;
    const sortDirection = `&sortDirection=${pageable?.sortDirection ? pageable.sortDirection : ''}`;
    apiUrl += sortBy;
    apiUrl += pageSize;
    apiUrl += pageNo;
    apiUrl += sortDirection;
    const resortIdParam = `&resortId=${resortId}`;
    apiUrl += resortIdParam;
    // apiUrl += locationName;
    // apiUrl += checkIn;
    // apiUrl += checkOut;
    // apiUrl += min;
    // apiUrl += max;
    // apiUrl += guest;
    // apiUrl += numberBedsRoom;
    // apiUrl += numberBathRoom;
    // apiUrl += listOfInRoomAmenity;
    // apiUrl += listOfPropertyView;
    // apiUrl += listOfPropertyType;
    const listApartment = await axios.get(apiUrl);

    if (!listApartment || !listApartment.data || !listApartment.data.content) {
      return { content: [], totalElements: 0 };
    }

    return listApartment.data;
  } catch (error) {
    console.error('Error fetching list of list apartment:', error);
    throw error;
  }
}
