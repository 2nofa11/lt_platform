import axios from "axios";
export type SearchParam = {
  keyword: string;
  count: number;
};

export const eventListFromKeyword = async (searchParam: SearchParam) => {
  const keywordParam = "keyword=" + searchParam.keyword;
  const countParam = "count=" + searchParam.count;
  const reqParam = keywordParam + "&" + countParam;
  const res = await axios.get(`https://connpass.com/api/v1/event/?${reqParam}`);
  return res.data;
};
