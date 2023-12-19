import HomePage from './HomePage';
import GetListApartment from './actions/getListApartment';
import GetListResort from './actions/getListResort';
import GetListResortForRent from '@/app/actions/getListResortForRent';
import GetListResortForCreateOwner from './actions/getListResortForCreateOwner';

export default async function Home() {
  const listResort = await GetListResortForCreateOwner('0');
  return <HomePage listResort={listResort} />;
}
