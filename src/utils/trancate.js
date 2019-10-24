export default (content, num = 3) => {
  const text = content.split(" ");
  const result = text.slice(0, num).join(" ");
  if (text.length > num) {
    return `${result}...`;
  } else if (text.length === 1) {
    return result.length > 40 ? `${result.slice(0, 40)}...` : result;
  } else return result;
};
