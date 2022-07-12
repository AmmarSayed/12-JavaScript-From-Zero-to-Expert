import View from './View';
import previewView from './previewView';

class ResulsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = `💥💥 No recipes for your query! please try again💥💥`;
  _successMessage = ``;

  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResulsView();
