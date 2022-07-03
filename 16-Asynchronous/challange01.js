'use strict';

////////////////////// Coding Challenge #1 //////////////////////

/*

In this challenge you will build a function 'whereAmI' which renders a country only based on GPS coordinates. For that, you will use a second API to geocode coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
Your tasks:
PART 1
1. Create a function'whereAmI'which takes as inputs alatitud evalue('lat') and a longitude value ('lng') (these are GPS coordinates, examples are in test data below).
2. Do “reverse geo coding” of the provided coordinates. Reverse geo coding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do not use the 'getJSON' function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: “You are in Berlin, Germany”
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If youre load fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does not reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message
PART 2
6. Now it's time to use the received data to render acountry. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)

Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude) 
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474
GOOD LUCK 😀

*/
const getLongAndLat = function () {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  ).then(data => data.coords);
};

const key = `757210239878300483897x120522`;

const whereAmI = async function (latitude, longitude) {
  // reverse
  const revGeoCodingURL = `https://geocode.xyz/${latitude},${longitude}?json=1&auth=${key}`;

  try {
    const res = await fetch(revGeoCodingURL);
    if (!res.ok) throw new Error('Cannot find these codes!');
    const { city, country } = await res.json();
    console.log(`“You are in ${city}, ${country}"`);

    //fetch the country
    const countriesURL = `https://restcountries.com/v2/name/${country}`;
    const res2 = await fetch(countriesURL);
    if (!res2.ok) throw new Error('Cannot find the coutnry!');
    const [coutnryData] = await res2.json();

    // render the received country data
    renderCountry(coutnryData);
    countriesContainer.style.opacity = 1;
  } catch (error) {
    renderError(`Something went wrong 💥💥💥💥 ${err.message}`);
    throw new Error(`Error 🎇 ${err}`);
  }
};

// remove the multi-line comment below to run the code
/*

btn.addEventListener('click', function () {
  getLongAndLat().then(({ latitude, longitude }) =>
    whereAmI(latitude, longitude)
  );
});

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/
