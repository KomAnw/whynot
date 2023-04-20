import { logger } from '../../../utils/logger';

type TCookies = { authCookie: string; uuid: string };

export const getUserId = async (cookies: TCookies) => {
  try {
    if (!cookies?.authCookie || !cookies?.uuid) {
      return null;
    }

    const response = await fetch('http://localhost:3000/api/v2/auth/user', {
      credentials: 'include',
      headers: {
        Cookie: `authCookie=${cookies.authCookie}; uuid=${cookies.uuid}`,
      },
    });

    const { id } = await response.json();

    return id;
  } catch (e) {
    logger(e, 'error');
  }
};
