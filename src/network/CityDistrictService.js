import { baseFetch } from "./AppService";

export const getCities = () => {
    return baseFetch(`/cities`, {
      method: "GET",
    });
};

export const getDistricts = (cityId) => {
    return baseFetch(`/cities/${cityId}/districts`, {
      method: "GET",
    });
};