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
export default async function getListResortForRent(pageable?: IPageable, params?: IParams) {
  try {
    let apiUrl = `https://holiday-swap.click/api/v1/apartment-for-rent/resort?`;
    const sortBy = `sortBy=${pageable?.sortBy ? pageable.sortBy : 'id'}`;
    const pageSize = `&pageSize=${pageable?.pageSize ? pageable.pageSize : ''}`;
    const pageNo = `&pageNo=${pageable?.pageNo ? pageable.pageNo : ''}`;
    const sortDirection = `&sortDirection=${pageable?.sortDirection ? pageable.sortDirection : ''}`;
    apiUrl += sortBy;
    apiUrl += pageSize;
    apiUrl += pageNo;
    apiUrl += sortDirection;
    const locationName = `locationName=${params?.locationName ? params.locationName : ''}`;
    const checkIn = `&checkIn=${params?.checkIn ? params.checkIn : ''}`;
    const checkOut = `&checkOut=${params?.checkOut ? params.checkOut : ''}`;
    const min = `&min=${params?.min ? params.min : ''}`;
    const max = `&max=${params?.max ? params.max : ''}`;
    const guest = `&guest=${params?.guest ? params.guest : ''}`;
    const numberBedsRoom = `&numberBedsRoom=${params?.numberBedsRoom ? params.numberBedsRoom : ''}`;
    const numberBathRoom = `&numberBathRoom=${params?.numberBathRoom ? params.numberBathRoom : ''}`;
    const listOfInRoomAmenity = `&listOfInRoomAmenity=${
      params?.listOfInRoomAmenity ? params.listOfInRoomAmenity : ''
    }`;
    const listOfPropertyView = `&listOfPropertyView=${
      params?.listOfPropertyView ? params.listOfPropertyView : ''
    }`;
    const listOfPropertyType = `&listOfPropertyType=${
      params?.listOfPropertyType ? params.listOfPropertyType : ''
    }`;
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
    const listResort = await axios.get(apiUrl);

    if (!listResort || !listResort.data || !listResort.data.content) {
      return { content: [], totalElements: 0 };
    }

    return listResort.data;
  } catch (error) {
    console.error('Error fetching list of resorts:', error);
    throw error;
  }
}
