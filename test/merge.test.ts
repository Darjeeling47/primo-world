import { merge } from "../src/merge";

describe("merge function", () => {
  test("merges three sorted arrays correctly", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [9, 7, 5];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 9]);
  });

  test("handles empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2, 3], [], [])).toEqual([1, 2, 3]);
    expect(merge([], [4, 5, 6], [9, 7, 5])).toEqual([4, 5, 5, 6, 7, 9]);
  });

  test("handles single element arrays", () => {
    expect(merge([1], [2], [3])).toEqual([1, 2, 3]);
    expect(merge([1], [], [3])).toEqual([1, 3]);
  });
});
