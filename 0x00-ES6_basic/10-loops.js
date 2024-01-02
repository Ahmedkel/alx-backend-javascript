export default function appendToEachArrayValue(array, appendString) {
  const ary = [];
  for (const idx of array) {
    const value = idx;
    ary.push(appendString + value);
  }

  return ary;
}
