import commonAPI from './commonAPI';
import BASEURL from './server';

export const getproduct = async () => {
  return await commonAPI("GET", `${BASEURL}/products`);
};

export const getproductid = async (id) => {
  return await commonAPI("GET", `${BASEURL}/products/${id}`);
};

export const updproduct = async (id, updatedData) => {
  return await commonAPI("PUT", `${BASEURL}/products/${id}`, updatedData);
};

export const delproduct = async (id) => {
  return await commonAPI("DELETE", `${BASEURL}/products/${id}`);
};

export const addproduct = async (reqBody) => {
  return await commonAPI("POST", `${BASEURL}/products/`, reqBody);
};
