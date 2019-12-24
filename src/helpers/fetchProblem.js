const fetchProblem = async uuid => {
  const url = `https://raw.githubusercontent.com/pankajladhar/mockjson/master/coditor/${uuid}/input.json`;
  const rawResponse = await fetch(url, {
    method: "GET"
  });
  const response = await rawResponse.json();
  return response;
};

export default fetchProblem;
