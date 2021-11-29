const axios = require("axios");

module.exports.get = async (event, context, callback) => {
  try {
    const id = event.pathParameters.id
    const response = await axios.get('https://swapi.dev/api/starships/' + id)
    const starship = response.data
    const starshipObject = {
         "Name:": starship.name,
        "Model:": starship.model,
         "Costs in galactic credits:": starship.cost_in_credits,
         "Rate:": starship.hyperdrive_rating,
      };
  return {
      statusCode: 200,
      body: JSON.stringify(starshipObject),
      headers: { 'Content-Type': 'text/plain' },
   };
  } catch (e) {
    console.log(e);
    const errorObject = {
        error: {
            title: e.statusCode,
            description: 'Couldn\'t get the starship.',
        },
    };
    return {
        statusCode: 500,
        body: JSON.stringify(errorObject),
        headers: { 'Content-Type': 'text/plain' },
    };
}
};