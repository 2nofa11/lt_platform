import axios from "axios";
export const eventListFromKeyword = async (keyword: string) => {
  const res = await axios.get(
    `https://connpass.com/api/v1/event/?keyword=${keyword}`
  );
  return res.data;
};
