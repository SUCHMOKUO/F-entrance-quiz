export const BASE_URL = 'http://localhost:8080';
// TODO GTB-知识点: - 跨域放到后端去处理
const baseRequestSetting = {
  mode: 'cors',
};

export const httpClient = {
  async getData(fetchPromise) {
    const response = await fetchPromise;

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || '业务错误');
    }

    return data;
  },

  async get(url) {
    return this.getData(
      fetch(BASE_URL + url, {
        ...baseRequestSetting,
        method: 'GET',
      })
    );
  },

  async post(url, body) {
    return this.getData(
      fetch(BASE_URL + url, {
        ...baseRequestSetting,
        body: JSON.stringify(body),
        headers: {
          'content-type': 'application/json',
        },
        method: 'POST',
      })
    );
  },
};
