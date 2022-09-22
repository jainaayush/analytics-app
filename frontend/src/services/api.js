import axios from "axios";

const URL = "http://localhost:8001";

export const customAxios = ({ method, url, data }) => {
  return axios({ url: `${URL}${url}`, method, data });
};

export const getKegTrackerIds = () => {
  try {
    return customAxios({ method: "get", url: `/item/kegTrackerIds` });
  } catch (error) {
    console.log("Error while calling api", error);
  }
};

export const getKegTrackerDetails = (id) => {
  try {
    return customAxios({ method: "get", url: `/item/kegTrackerDetails/${id}` });
  } catch (error) {
    console.log("Error while calling api", error);
  }
};

export const getInventoryData = async () => {
  try {
    return customAxios({ method: "get", url: `/item/getInventory` });
  } catch (error) {
    console.log("Error while calling api", error);
  }
};

export const getInventoryTypesData = async () => {
  try {
    return customAxios({ method: "get", url: `/item/getInventoryTypes` });
  } catch (error) {
    console.log("Error while calling api", error);
  }
};

export const getRetailerFullProductData = async () => {
  try {
    return await axios.get(`${URL}/item/retailerFullProduct`);
  } catch (error) {
    console.log("Error while calling api", error);
  }
};
