import icons from '../../img/icons.svg';

export default class View {
  _data; // data coming from state from model

  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered (e.g. recipe)
   * @param {boolean} [render=true] If false, create markup string instead of rendering to the DOM
   * @returns {undefined | string} A markup string is retunred if render=false
   * @this {Object} View instance
   * @author Ammar Sayed
   * @todo Finish implementation
   */
  render(data, render = true) {
    // check if there's no data, or if we have an empty array
    if (!data || (Array.isArray(data) && !data.length)) return this.renderError();

    this._data = data; // store the data received at the state #data
    const markup = this._generateMarkup();

    // just return the markup string
    if (!render) return markup;

    // render the markup to the DOM directly
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  update(data) {
    this._data = data; // store the data received at the state #data
    const newMarkup = this._generateMarkup();

    // convert the markup text to a dom Object // this is a vertual DOM now
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const currentElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = currentElements[i];

      // Updates the changed text content
      if (!newEl.isEqualNode(curEl) && newEl.firstChild?.nodeValue.trim() !== '') {
        curEl.textContent = newEl.textContent;
      }

      // Updates changes Attributes, to change the data-change-to on the tiny-btn
      if (!newEl.isEqualNode(curEl)) {
        Array.from(newEl.attributes).forEach(attr => curEl.setAttribute(attr.name, attr.value));
      }
    });
  }
  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="${icons}#icon-loader"></use>
          </svg>
        </div>
            `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderError(message = this._errorMessage) {
    const markup = `
      <div class="error">
        <div>
          <svg>
            <use href="${icons}#icon-alert-triangle"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
   `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderMessage(message = this._successMessage) {
    const markup = `
      <div class="message">
        <div>
          <svg>
            <use href="${icons}#icon-smile"></use>
          </svg>
        </div>
        <p>${message}</p>
      </div>
   `;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
