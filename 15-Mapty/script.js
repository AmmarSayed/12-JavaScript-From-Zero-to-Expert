'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Workout {
  //private class fields
  date = new Date();

  //create a new ID number
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; // [lat,lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
}

class Running extends Workout {
  type = 'running';
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    // calculate the Pace once object is created
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    // return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevation) {
    super(coords, distance, duration);
    this.elevation = elevation;

    // calculate the speed once object is created
    this.calcSpeed();
    this._setDescription();
  }
  calcSpeed() {
    // km / h
    this.speed = this.distance / (this.duration / 60);
    // return this.speed;
  }
}

//////////////////////////////////////////////
// APPLICATION ARCHITECTURE

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  //private class fields
  #map;
  #mapEvent;
  #workouts = [];
  #mapZoomLevel = 15;

  constructor() {
    //immediately envoc the getposition function
    this._getposition();

    // Get data from Local Storage
    this._getLocalStorageData();
    //Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') this._hideForm();
    });
  }

  _getposition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        //loadMap is being called a regular function call, not like a method call
        // hence "this" will be undefined, then we should "bind" becuase it returns a new function "this" which points to the current object
        this._loadMap.bind(this),
        function () {
          console.error("Couldn't get your location!!");
        }
      );
    }
  }

  _loadMap(position) {
    const { latitude, longitude } = position.coords;
    const coords = [latitude, longitude];

    // use the id "map" for the HTML element to display the map
    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    // ender pins of workouts
    this.#workouts.forEach(work => this._renderWorkoutMarker(work));
  }

  _showForm(mapEv) {
    this.#mapEvent = mapEv;

    // Show the form
    form.classList.remove('hidden');
    inputDistance.focus();
    // create a marker
  }

  _hideForm() {
    // clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    //resetting the selection
    inputType.selectedIndex = 0;

    //hide the form
    form.style.display = 'none';
    form.classList.add('hidden');
    // reset the display property
    setTimeout(() => (form.style.display = 'grid'), 100);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    // Get data from user
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // validate the data input helper function
    const validInputs = (...inpts) => inpts.every(inp => Number.isFinite(inp));

    const allPositive = (...inpts) => inpts.every(inp => inp > 0);

    // If workout running, create a running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // validate the data input that all equal to positive numbers
      if (
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Input must be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, crate a cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;
      // validate the data input
      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Input must be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to the workout array
    this.#workouts.push(workout);

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // Hide the form
    this._hideForm();

    // Render workout on list
    this._renderWorkoutList(workout);

    // store the workouts Array in the local storage
    this._setLocalStorage();
  }

  _renderWorkoutMarker({ coords, description, type }) {
    L.marker(coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          keepInView: true,
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${type}-popup`,
        })
      )
      .setPopupContent(`${type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${description}`)
      .openPopup();
  }

  _renderWorkoutList({
    type,
    id,
    distance,
    description,
    duration,
    pace,
    cadence,
    speed,
    elevation,
  }) {
    let html = `
    <li class="workout workout--${type}" data-id="${id}">
    <h2 class="workout__title">${description}</h2>
    <div class="workout__details">
      <span class="workout__icon"> ${type === 'running' ? '🏃‍♂️' : '🚴‍♀️'}</span>
      <span class="workout__value">${distance}</span>
      <span class="workout__unit">km</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⏱</span>
      <span class="workout__value">${duration}</span>
      <span class="workout__unit">min</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">⚡️</span>
      <span class="workout__value">${
        type === 'running' ? pace.toFixed(1) : speed
      }</span>
      <span class="workout__unit">${
        type === 'running' ? 'min/km' : 'km/h'
      }</span>
    </div>
    <div class="workout__details">
      <span class="workout__icon">${type === 'running' ? '🦶🏼' : '⛰'}</span>
      <span class="workout__value">${
        type === 'running' ? cadence : elevation
      }</span>
      <span class="workout__unit">m</span>
    </div>
    `;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workOutListItem = e.target.closest('.workout');
    if (!workOutListItem) return;

    const workout = this.#workouts.find(
      item => (item.id = workOutListItem.dataset.id)
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    //using public interface
    workout.click();
  }

  _setLocalStorage() {
    window.localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorageData() {
    const data = localStorage.getItem('workouts');
    if (!data) return;
    this.#workouts = JSON.parse(data);

    this.#workouts.forEach(work => this._renderWorkoutList(work));
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }
}

const app = new App();
