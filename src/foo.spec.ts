import { getFoo } from "./foo";

describe("foo", () => {
  it("should be true", () => {
    expect(getFoo()).toBe("foo");
  });
});
