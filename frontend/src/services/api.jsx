import axios from "axios";

const URL = "http://localhost:8001";

export const getInventoryData = async () => {
    try {
        return await axios.get(`${URL}/item/getInventory`);
    } catch (error) {
        console.log('Error while calling api', error);
    }
}

export const getInventoryTypesData = async () => {
    try {
        return await axios.get(`${URL}/item/getInventoryTypes`);
    } catch (error) {
        console.log('Error while calling api', error);
    }
}

export const getRetailerFullProductData = async () => {
    try {
        return await axios.get(`${URL}/item/retailerFullProduct`);
    } catch (error) {
        console.log('Error while calling api', error);
    }
}