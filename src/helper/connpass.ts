import axios from "axios";
export type SearchParam = {
  keyword: string;
  count: number;
  [key: string]: string | number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const eventListFromKeyword = async (searchParam: SearchParam) => {
  // パラメータをURLように整形
  const reqParamArr: string[] = [];
  for (const key in searchParam) {
    reqParamArr.push(`${key}=${searchParam[key]}`);
  }
  const reqParam = encodeURI(reqParamArr.join("&"));
  console.log(reqParam);

  // 検索実行
  const res = await axios.get(`https://connpass.com/api/v1/event/?${reqParam}`);
  return res.data;
};
