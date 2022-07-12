import icons from '../../img/icons.svg';
import View from './View';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const currPage = this._data.page;
    const numOfPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

    // Page1, and other pages
    if ((currPage === 1) & (numOfPages > 1))
      return `
      <button class="btn--inline pagination__btn--next" data-goto="${currPage + 1}">
        <span>Page ${currPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button> 
    `;

    // Last page
    if (currPage === numOfPages && numOfPages > 1)
      return `
          <button class="btn--inline pagination__btn--prev" data-goto="${currPage - 1}">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${currPage - 1}</span>
          </button>
    `;
    // Other page
    if (currPage < numOfPages)
      return `
      <button class="btn--inline pagination__btn--prev" data-goto="${currPage - 1}">
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-left"></use>
        </svg>
        <span>Page ${currPage - 1}</span>
      </button>
      <button class="btn--inline pagination__btn--next" data-goto="${currPage + 1}">
        <span>Page ${currPage + 1}</span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
      </button> 
      `;

    // page1 , and No other pages
    return ``;
  }
}

export default new PaginationView();
