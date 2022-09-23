import axios from "axios";
export type SearchParam = {
  keyword: string;
  count: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const eventListFromKeyword = async (searchParam: any) => {
  const reqParamArr: string[] = [];
  for (const key in searchParam) {
    reqParamArr.push(`${key}=${searchParam[key]}`);
  }
  const reqParam = reqParamArr.join("&");
  console.log(reqParam);
  const res = await axios.get(`https://connpass.com/api/v1/event/?${reqParam}`);
  return res.data;
};
