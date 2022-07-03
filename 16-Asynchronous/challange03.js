'use strict';

////////////////////// Coding Challenge #3 //////////////////////

/*

Your tasks:
PART 1
1. Write an async function 'loadNPause' that recreates Challenge#2,this time using async/await (only the part where the promise is consumed, reuse the 'createImage' function from before)
2. Compare the two versions, think about the big differences,and see which one you like more
3. Don't forget to test the error handler, and to set the network speed to“Fast3G” in the dev tools Network tab

PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr'
2. Use .map to loopover the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array😉
5. Add the 'parallel' class to all the images (it has some CSS styles)
Test data Part 2: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img- 3.jpg']. To test, turn off the 'loadNPause' function
GOOD LUCK 😀
*/

let createdImage;
const imagesContainer = document.querySelector('.images');

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement('img');
    img.src = imgPath;
    img.classList.add('images');

    img.addEventListener('load', function () {
      imagesContainer.appendChild(img);
      resolve(img);
    });

    img.addEventListener('error', function () {
      reject(new Error('Invalid URL 💥'));
    });
  });
};

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

/*

createImage('./img/img-1.jpg')
  .then(img => {
    console.log('Image 1 Loaded!');
    createdImage = img;
    return wait(2);
  })
  .then(() => {
    createdImage.style.display = 'none';
    return createImage('./img/img-2.jpg');
  })
  .then(img => {
    console.log('Image 2 Loaded!');
    createdImage = img;
    return wait(2);
  })
  .then(() => {
    createdImage.style.display = 'none';
    return createImage('./img/img-3.jpg');
  })
  .then(img => {
    console.log('Image 3 Loaded!');
    createdImage = img;
    return wait(2);
  })
  .then(() => {
    createdImage.style.display = 'none';
  })
  .catch(err => console.error(err));
*/

////////////////////////////////////////////////////////////
//////////////////// My solution ////////////////////

// PART 1
const loadNPause = async function () {
  try {
    // loading image 1
    const img1 = await createImage('./img/img-1.jpg');
    console.log('Image 1 Loaded!');
    await wait(2);
    img1.style.display = 'none';

    const img2 = await createImage('./img/img-2.jpg');
    console.log('Image 2 Loaded!');
    await wait(2);
    img2.style.display = 'none';

    const img3 = await createImage('./img/img-3.jpg');
    console.log('Image 3 Loaded!');

    await wait(2);
    img3.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
};

// loadNPause();

// PART 2

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async imgURL => await createImage(imgURL));
    const imgsEls = await Promise.all(imgs);
    imgsEls.forEach(img => img.classList.add('parallel'));
  } catch (error) {
    console.error(error);
  }
};

const imgArr = ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg'];
loadAll(imgArr);
