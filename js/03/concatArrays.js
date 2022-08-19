const concatArrays = (inputString, ...arrays) => {
  let resultArray = [];
  resultArray = [inputString, ...arrays].flat(Infinity);
  resultArray = resultArray.map((element) => element.trim());
  resultArray = [...new Set(resultArray)];
  resultArray = resultArray.filter((item) => !item.includes(inputString));
  return resultArray;
};

const concatArraysOnly = (inputString, ...arrays) => {
  return [inputString, ...arrays].flat(Infinity);
};

const filterRepeatedElements = (array) => {
  return [...new Set(array)];
};

const trimArrayElements = (array) => {
  return array.map((element) => element.trim());
};

console.log(
  concatArrays("r", ["robi", "géza"], [" márton", " robi   "], ["hammadata"])
);

export default concatArrays;
