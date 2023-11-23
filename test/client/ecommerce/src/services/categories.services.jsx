import axios from 'axios';

const BASE_URL = `http://localhost:8080/categories`;

export const getAllCategories = async () => {
  let response = undefined;

  try {
    const data = await axios({
      method: 'GET',
      baseURL: BASE_URL,
    });

    if (data) {
      response = data;
    }
  } catch (error) {
    console.log(error);
  } finally {
    return response;
  }
};
