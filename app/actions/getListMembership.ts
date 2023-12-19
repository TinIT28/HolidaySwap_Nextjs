import axios from 'axios';

export default async function GetListMembership(config: any = {}) {
  try {
    const { username } = config;
    let url = `${process.env.API_URL}/users/search?status=ACTIVE&status=BLOCKED&roleIds=2&limit=10&offset=0&sortDirection=desc`;

    if (username) {
      url += `&username=${username}`;
    }

    const memberships = await axios.get(url);

    if (!memberships) {
      return null;
    }

    return memberships.data;
  } catch (error) {}
}
