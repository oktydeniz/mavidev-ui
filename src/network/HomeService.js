import { baseFetch } from "./AppService";

export const saveData = (req) => {
    return baseFetch(`/data`, {
      method: "POST",
      body: JSON.stringify(req),
    });
};

export const getRecords = () => {
    return baseFetch(`/data`, {
      method: "GET",
    });
};


