export const getDepartments = async () => {
  const APIURL = "https://raw.githubusercontent.com/marcovega/colombia-json/master/colombia.min.json";

  // Fetching data...
  const res = await fetch(APIURL);
  const response = await res.json();

  return response;
};