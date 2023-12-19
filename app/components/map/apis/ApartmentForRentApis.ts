import AxiosClient from '@/app/libs/AxiosConfig';
import { Response } from '@/common/models';
import { ApartmentForRentResponse } from '@/app/components/map/type';

export function constructQueryString(params: string) {
  const queryStringParts = [];
  for (const [key, value] of Object.entries(params)) {
    if (value !== null && value !== undefined && value !== "") {
      if (Array.isArray(value) && value.length > 0) {
        queryStringParts.push(`${key}=${value.join(',')}`);
      } else if(!Array.isArray(value)) {
        queryStringParts.push(`${key}=${value}`);
      }
    }
  }
  return queryStringParts.join('&');
}

const ApartmentForRentApis = {
  getAll: (): Promise<ApartmentForRentResponse> => AxiosClient.get('/apartment-for-rent?guest=1&numberBedsRoom=1&numberBathRoom=1&pageNo=0&pageSize=100&sortBy=id&sortDirection=asc'),
  getAllBySearchParams: (params: string) : Promise<ApartmentForRentResponse> => AxiosClient.get(`/apartment-for-rent?${constructQueryString(params)}`),
};

export default ApartmentForRentApis;