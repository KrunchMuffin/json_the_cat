const args = process.argv.slice(2);
const input = args.shift();
const request = require('request');
const baseApiUri = 'https://api.thecatapi.com/v1/';
const breedSearchEndpoint = 'breeds/search?q=';
const options = {
  url: baseApiUri + breedSearchEndpoint + input.trim(),
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Accept-Charset': 'utf-8',
    'User-Agent': 'my-catapi-client',
  },
};
request(options, (err, res, body) => {
  if (err) {
    console.log('An error has occurred');
    process.exit(1);
  }
  if (Object.keys(JSON.parse(body)).length === 0) {
    console.log('No breed found');
    process.exit(1);
  }
  const data = JSON.parse(body);
  // console.log(data);
  console.log(data[0].description);
});