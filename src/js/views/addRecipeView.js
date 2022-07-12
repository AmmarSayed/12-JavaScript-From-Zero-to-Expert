import View from './View';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _successMessage = `Recipe was successfully uploaded! 🎉`;

  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  constructor() {
    super();
    this.addHandlerShowWindow();
    this.addHandlerCloseWindow();
  }

  toggleModal() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleModal.bind(this));
  }

  addHandlerCloseWindow() {
    this._btnClose.addEventListener('click', () => {
      this.toggleModal();
    });
  }

  addHanderUpload(hander) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      // upload the new data
      hander(data);
    });
  }

  _generateMarkup() {}
}

export default new AddRecipeView();
