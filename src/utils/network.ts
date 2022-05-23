import { TEST_API_TOKEN } from './../constants/api';
export const getAppiResource = async (url: string) => {
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + TEST_API_TOKEN,
      },
    });

    if (!res.ok) {
      console.warn('Could not fetch!', res.status);
      return false;
    }
    return await res.json();
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        message: `Error: (${err.message})`,
      };
    }
  }
};
