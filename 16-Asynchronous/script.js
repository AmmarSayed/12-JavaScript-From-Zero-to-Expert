'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const country = 'USA';

const renderCountry = (data, className = '') => {
  const { flag, name, region, population, languages, currencies, borders } =
    data;
  const html = `
  <article class="country ${className}">
          <img class="country__img" src="${flag}" />
          <div class="country__data">
            <h3 class="country__name">${name}</h3>
            <h4 class="country__region">${region}</h4>
            <p class="country__row"><span>👫</span>${(
              +population / 1000000
            ).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${languages[0].name}</p>
            <p class="country__row"><span>💰</span>${currencies[0].name}</p>
          </div>
        </article>
        `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

/*
const getCountriesData = country => {
  ///////////////////////////////////////
  const req = new XMLHttpRequest();
  const url = `https://restcountries.com/v2/name/${country}`;

  req.open('GET', url);
  req.send();

  req.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    // Render Country 1
    renderCountry(data);

    // get neighbour country 2
    const neighbour = data.borders[1];
    if (!neighbour) return;
    const req2 = new XMLHttpRequest();
    req2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    req2.send();

    req2.addEventListener('load', function () {
      const data = JSON.parse(this.responseText);

      // Render Country 3
      renderCountry(data, 'neighbour');
      const neighbour = data.borders[1];
      if (!neighbour) return;
      const req3 = new XMLHttpRequest();
      req3.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
      req3.send();

      req3.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        // Render Country 2
        renderCountry(data, 'neighbour');
      });
    });
  });
};

getCountriesData('Egypt');
*/

const renderError = msg => {
  countriesContainer.insertAdjacentHTML('beforeend', msg);
};

const getJSON = async function (url, errMessage = 'Something Went Wrong!') {
  const res = await fetch(url);
  if (!res.ok) throw new Error(errMessage);
  const data = await res.json();

  if (Array.isArray(data)) {
    return data[0];
  } else {
    return data;
  }
};

/*
const getCountriesData2 = async country => {
  const url = `https://restcountries.com/v2/name/${country}`;

  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error(`Cannot find the country ${country}!`);
    const [data] = await res.json();
    renderCountry(data);

    // get the neighbour country
    const neighbour = data.borders?.[1];
    if (!neighbour) return;
    const url2 = `https://restcountries.com/v2/alpha/${neighbour}`;

    const res2 = await fetch(url2);
    if (!res2.ok) throw new Error(`Cannot find the country ${neighbour}!`);

    const data2 = await res2.json();
    renderCountry(data2, 'neighbour');
  } catch (err) {
    renderError(`Something went wrong 💥💥💥💥 ${err.message}`);
    throw new Error(`Error 🎇 ${err}`);
  } finally {
    countriesContainer.style.opacity = 1;
  }
};

*/

/*
const getCountriesData2 = async country => {
  const url = `https://restcountries.com/v2/name/${country}`;

  try {
    const data = await getJSON(url, `Cannot find ${country}`);
    renderCountry(data);

    // get the neighbour country
    const neighbour = data.borders?.[1];

    if (!neighbour) throw new Error(`No neighbour found!`);

    const url2 = `https://restcountries.com/v2/alpha/${neighbour}`;

    const data2 = await getJSON(url2, `Cannot find ${neighbour}`);

    renderCountry(data2, 'neighbour');
  } catch (err) {
    renderError(`Something went wrong 💥💥💥💥 ${err.message}`);
    throw new Error(`Error 🎇 ${err}`);
  } finally {
    countriesContainer.style.opacity = 1;
  }
};

getCountriesData2('Australia');

btn.addEventListener('click', function () {
  getCountriesData2('Russia');
});

*/

/*
console.log('Test Start'); // 1
setTimeout(() => console.log('0 sec timer'), 0); // 4 callback queue
Promise.resolve('Resolved Promise 1').then(res => console.log(res)); // 3 micro tasks queue
Promise.resolve('Resolved Promise 2').then(res => {
  for (let i = 0; i < 10000000000; i++) {}
  console.log(res);
}); // 3 micro tasks queue
console.log('Test End'); // 2
*/

/*


const lotteryPromise = new Promise(function (res, rej) {
  console.log('Lottery draw is hapening 🪄');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      res('You win 💰');
    } else {
      rej(new Error('You lost 💩'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// promisifying setTimeout
const wait = function (seconds) {
  return new Promise(function (res) {
    setTimeout(res, seconds * 1000);
  });
};

wait(1)
  .then(() => {
    console.log('1 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 seconds passed');
  });

Promise.resolve('abcd').then(res => console.log(res));
Promise.reject(new Error("that's an error")).catch(err => console.error(err));

*/

// promisifying the geolocation

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const whereAmI = async function () {
  try {
    /*
    // Geolocation
    // this API Credit has expired

    const pos = await getPosition();
    const { latitude, longitude } = pos.coords;

    // reverse geocoding
    const key = `757210239878300483897x120522`;
    const revGeoCodingURL = `https://geocode.xyz/${latitude},${longitude}?json=1&auth=${key}`;

    /*
    const resGeo = await fetch(revGeoCodingURL);
    if (!resGeo.ok) throw new Error(`💥Problem getting the location Data 💥`);
    const dataGeo = await resGeo.json();
    console.log(dataGeo);
  */

    // new API
    const countryByIpAPI = `http://ip-api.com/json/?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,currency,isp,org,mobile,proxy,query`;
    const resGeo = await fetch(countryByIpAPI);
    if (!resGeo.ok) throw new Error(`💥 Problem getting the location Data 💥`);
    const dataGeo = await resGeo.json();

    // fetch country data
    const response = await fetch(
      `https://restcountries.com/v2/name/${dataGeo.country}`
    );

    if (!response.ok) throw new Error(`💥Problem getting the Country Data 💥`);

    const data = await response.json();
    renderCountry(data[0]);

    return `You are in ${dataGeo.city}, ${dataGeo.country}`;
  } catch (error) {
    renderError(`${error.message}💥`);
    // Reject promise returned from async function
    throw `${error} 💥`;
  }
};

// whereAmI()
//   .then(data => console.log(`2: ${data}`))
//   .catch(err => console.error(`2: ${err.message} 💥`))
//   .finally(() => console.log('3: finish getting the location'));

/*
(async () => {
  try {
    const data = await whereAmI();
    console.log(`2: ${data}`);
  } catch (error) {
    console.error(`2: ${error.message} 💥`);
  } finally {
    console.log('3: Finished getting the location');
  }
})();
*/

/*

const get3Countries = async function (c1, c2, c3) {
  try {
    // const data1 = await getJSON(`https://restcountries.com/v2/name/${c1}`);
    // const data2 = await getJSON(`https://restcountries.com/v2/name/${c2}`);
    // const data3 = await getJSON(`https://restcountries.com/v2/name/${c3}`);
    // console.log([data1.capital, data2.capital, data3.capital]);

    const allData = await Promise.all([
      getJSON(`https://restcountries.com/v2/name/${c1}`),
      getJSON(`https://restcountries.com/v2/name/${c2}`),
      getJSON(`https://restcountries.com/v2/name/${c3}`),
    ]);

    console.log(allData.map(d => d.capital));
  } catch (error) {
    console.error(error);
  }
};

get3Countries('Egypt', 'USA', 'France');
*/

/*


// Promise.race
(async () => {
  // promise.race will get the fastes response, and return only 1 result
  // even if the response was a regection of the promise
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v2/name/italy`),
    getJSON(`https://restcountries.com/v2/name/egypt`),
    getJSON(`https://restcountries.com/v2/name/mexico`),
  ]);
  console.log(res);
})();

const timeout = function (s) {
  return new Promise(function (_, rej) {
    setTimeout(function () {
      rej(new Error('Request took too long!'));
    }, s * 10);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v2/name/Tanzania`),
  timeout(1),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.allSettled
// will get all the resolved values only, and will not short curcit, and we'll receive 3 values
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('Error '),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.log(err));

// Promise.all will short curcite if there's any error, will return error if any of the promises got rejected
// which means that all must be fulfilled successfully
Promise.all([
  Promise.resolve('Success'),
  Promise.reject('Error '),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any
// will return the first fulfilled promise, and will ignore the rejected promise
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('Error '),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));


  */
