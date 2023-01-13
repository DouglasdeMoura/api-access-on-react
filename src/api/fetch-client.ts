const API_URL = 'https://gorest.co.in/public/v2';

export const fetchClient = <T = unknown>(
  input: RequestInfo | URL,
  init?: RequestInit
) =>
  fetch(`${API_URL}${input}`, init).then(async (res) => {
    // baseado em https://kentcdodds.com/blog/using-fetch-with-type-script

    if (!res.ok) {
      throw new Error(res.statusText);
    }

    const data: T = await res.json();

    return data;
  });
