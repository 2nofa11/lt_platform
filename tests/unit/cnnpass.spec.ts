import { eventListFromKeyword, SearchParam } from "@/helper/connpass";

describe("一覧取得", () => {
  it("使ってレスポンスがある", async () => {
    const searchParam: SearchParam = { keyword: "LT", count: 10 };
    const res = await eventListFromKeyword(searchParam);
    expect(res).not.toBe(undefined);
  });
  it("検索結果が100件になる", async () => {
    const searchParam: SearchParam = { keyword: "LT", count: 100 };
    const res = await eventListFromKeyword(searchParam);
    expect(res.results_returned).toBe(100);
  });
});
