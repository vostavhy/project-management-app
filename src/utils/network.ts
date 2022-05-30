import { TEST_API_TOKEN } from './../helpers/api';
export const getAppiResource = async (url: string, method: string, body: object | null = null) => {
  try {
    const res = await fetch(url, {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: body
        ? {
            Authorization: 'Bearer ' + TEST_API_TOKEN,
            'Content-Type': 'application/json',
          }
        : {
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
