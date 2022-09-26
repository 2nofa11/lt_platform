import axios from "axios";
export type SearchParam = {
  keyword: string;
  count: number;
  [key: string]: string | number;
};

axios.defaults.headers.common["Content-Type"] =
  "application/x-www-form-urlencoded";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const eventListFromKeyword = async (searchParam: SearchParam) => {
  // パラメータをURLように整形
  const reqParamArr: string[] = [];
  for (const key in searchParam) {
    reqParamArr.push(`${key}=${searchParam[key]}`);
  }
  const reqParam = encodeURI(reqParamArr.join("&"));
  console.log(reqParam);
  const res = await axios.get(
    `https://connpass.com/api/v1/event/?${reqParam}`,
    { adapter: jsonpAdapter }
  );
  return res.data;
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const jsonpAdapter = require("axios-jsonp");
