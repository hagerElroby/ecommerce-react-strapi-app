import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://strapi-app-ws4z.onrender.com/api",
  headers: {
    Authorization: "bearer " + "bf0820cc45529adb3425c89ab0d9cdedddd6aa274cee5c875c940d8d02d4095253f2458efa611b8124314719902e17587f11681e17c34a4cd7c52140f6e38f7ec7df5dcd4be2557b0ef3c7bcd9604949868950f2874415589430e80bc5851fd60bdddcbb7f0ed2a29f59ce3db0b30aa4445734de8593fbdad7d93fd05fde61dc",
  },
});
