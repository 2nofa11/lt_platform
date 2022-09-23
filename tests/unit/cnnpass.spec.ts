import { eventListFromKeyword } from "@/helper/connpass";

describe("一覧取得", () => {
  it("使ってレスポンスがある", async () => {
    const res = await eventListFromKeyword("LT");
    expect(res).not.toBe(undefined);
  });
});
