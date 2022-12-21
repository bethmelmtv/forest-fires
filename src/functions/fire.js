/* eslint-disable max-len */
const fetch = require('node-fetch');
require('dotenv').config();

const handler = async (event) => {
  try {
    // const gecodingResponse = await fetch(``);

    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${event.queryStringParameters.searchFilter}&appid=${process.env.WEATHER_KEY}`
    );

    const [{ lat, lon }] = await response.json();

    const fireResponse = await fetch(`
      https://api.ambeedata.com/latest/fire?lat=${lat}&lng=${lon}`);

    const fireData = await fireResponse.json();

    return {
      statusCode: 200,
      body: JSON.stringify(fireData),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed Fetching Data' }),
    };
  }
};

module.exports = { handler };
