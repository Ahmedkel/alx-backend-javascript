export default function cleanSet(set, str) {
  if (str === undefined || str === '') return '';
  return [...set]
    .filter((val) => (val ? val.startsWith(str) : ''))
    .map((val) => (val ? val.slice(str.length) : ''))
    .join('-');
}
