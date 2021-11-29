const axios = require("axios");

module.exports.list = async (event, context, callback) => {
  try {
    const response = await axios.get('https://swapi.dev/api/starships');
    const starships = response.data.results
  return {
      statusCode: 200,
      body: JSON.stringify(starships),
      headers: { 'Content-Type': 'text/plain' },
   };
  } catch (e) {
    console.log(e);
    const errorObject = {
        error: {
            title: e.statusCode,
            description: 'Couldn\'t list the starships.',
        },
    };
    return {
        statusCode: 500,
        body: JSON.stringify(errorObject),
        headers: { 'Content-Type': 'text/plain' },
    };
}
};
