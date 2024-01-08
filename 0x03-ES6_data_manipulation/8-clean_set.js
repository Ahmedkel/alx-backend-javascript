export default function cleanSet(set, str) {
  if (str === '') return '';
  const newSet = [];
  set.forEach((item) => {
    if (item.includes(str)) newSet.push(item.replace(str, ''));
  });
  return newSet.join('-');
}
