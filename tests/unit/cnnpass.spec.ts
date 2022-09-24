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
  it("keywordを複数選択できる", async () => {
    const searchParam: SearchParam = {
      keyword: "LT,オンライン",
      count: 10,
    };
    const res = await eventListFromKeyword(searchParam);
    console.log(res.events);
    expect(res.results_returned).not.toBe(0);
  });
  it("eventsをオブジェクトとして取得できる", async () => {
    const searchParam: SearchParam = { keyword: "LT", count: 10 };
    const res = await eventListFromKeyword(searchParam);
    // 取得したいイベントをオブジェクトとして格納する
    const events = res.events;
    console.log(events);
    expect(events.length).toBe(10);
  });
});
