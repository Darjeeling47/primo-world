export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  // Reverse collection_3 to make it ascending
  let c3 = [...collection_3].reverse();

  // Merging two arrays in ascending order
  function mergeTwoArrays(arr1: number[], arr2: number[]): number[] {
    let i = 0,
      j = 0;
    const result: number[] = [];

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] <= arr2[j]) {
        result.push(arr1[i]);
        i++;
      } else {
        result.push(arr2[j]);
        j++;
      }
    }

    // Add remaining elements
    while (i < arr1.length) {
      result.push(arr1[i]);
      i++;
    }

    while (j < arr2.length) {
      result.push(arr2[j]);
      j++;
    }

    return result;
  }

  // Merge all three arrays
  const merged = mergeTwoArrays(mergeTwoArrays(collection_1, collection_2), c3);

  return merged;
}
