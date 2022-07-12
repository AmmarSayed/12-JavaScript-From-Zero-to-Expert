import * as model from './src/js/model';
import recipeView from './src/js/views/recipeView';
import searchView from './src/js/views/searchView';
import resultsView from './src/js/views/resultsView';
import bookmarksView from './src/js/views/bookmarksView';
import paginationView from './src/js/views/paginationView';
import addRecipeView from './src/js/views/addRecipeView';
import { MODAL_CLOSE_SEC } from './src/js/config';
///////////////////////////////////////
// if (module.hot) module.hot.accept();

////////////

const controlRecipies = async function () {
  try {
    // 1) Update results view to mark selected search results
    resultsView.update(model.getSearchResultsPage());

    const hashId = window.location.hash.slice(1);

    if (!hashId) return;
    recipeView.renderSpinner();

    // 2) Update the bookmarks list view
    bookmarksView.update(model.state.bookmarks);

    // 3) Loading recipe
    await model.loadRecipe(hashId);

    // 4) Rendering recipe
    const recipe = model.state.recipe;
    recipeView.render(recipe);
  } catch (error) {
    console.error(error);
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  resultsView.renderSpinner();

  try {
    // 1) Get search query
    const query = searchView.getQry();
    if (!query) return;

    // 2) Load search results to the state
    await model.loadSearchResults(query);

    // 3) Render the results
    resultsView.render(model.getSearchResultsPage());

    // 4) render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    resultsView.renderError(error);
    throw error;
  }
};

const controlPagination = function (goToPage) {
  // 1) Render New the results
  resultsView.render(model.getSearchResultsPage(goToPage));

  // 2) render pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function (newServings) {
  // update the recipe servings (in state)
  model.updateServings(newServings);

  // Update the recipe view (re-render)
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

const controlAddBookmark = function () {
  // 1) Add/Remove bookmarks
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // 2) Update recipe view
  recipeView.update(model.state.recipe);

  // 3) Render bookmarks list
  bookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlAddRecipe = async function (newData) {
  try {
    // Show loading spinner
    addRecipeView.renderSpinner();
    // Upload recipe
    await model.uploadRecipe(newData);
    console.log(model.state.recipe);

    // Render recipe to the view
    recipeView.render(model.state.recipe);

    // Render success message
    addRecipeView.renderMessage();

    // Render the bookmark view
    bookmarksView.render(model.state.bookmarks);

    // change the id in the URL
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    // Close form
    setTimeout(function () {
      addRecipeView.toggleModal();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (error) {
    console.error('💥', error);
    addRecipeView.renderError(error.message);
  }
};

// the controler module doesn't listen to load or hash change, it only subscripe to those events
// then pass that control receipies function to the event
const init = function () {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipies);
  recipeView.addHandlerServings(controlServings);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  addRecipeView.addHanderUpload(controlAddRecipe);
};

init();
