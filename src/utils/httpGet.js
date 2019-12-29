const httpGet = async url => {
  const rawResponse = await fetch(url, {
    method: "GET"
  });
  const response = await rawResponse.json();
  return response;
};

export { httpGet };
