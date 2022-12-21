export async function getfireData(search) {
  const rawResponse = await fetch(
    `/.netlify/functions/fireData?searchFilter=${search}`
  );
  const data = await rawResponse.json();
  return data;
}
