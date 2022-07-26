const fetch = require('node-fetch');
require('dotenv').config();

exports.handler = async (event) => {
  try {
    const response = await fetch(
      `
    https://api.ambeedata.com/latest/fire?lat=${event.queryStringParameters.searchFilter}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.FOREST_KEY}`,
        },
      }
    );

    const data = await response.json();
    const json = JSON.stringify({ data });

    return {
      statusCode: 200,
      body: json,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed Fetching Data' }),
    };
  }
};
