import { API_URL, RESULTS_PER_PAGE, API_KEY } from './config';
// import { getJSON, sendJSON } from './helpers';
import { AJAX } from './helpers';

///////////////////////////////////////

export const state = {
  recipe: {},
  search: {
    page: 1,
    query: '',
    results: [],
    resultsPerPage: RESULTS_PER_PAGE,
  },
  bookmarks: [],
};

///////////////////////////////////////

const createRecipeObject = function (data) {
  const { recipe } = data.data;

  const {
    cooking_time: cookingTime,
    id,
    image_url: imgUrl,
    ingredients,
    publisher,
    servings,
    source_url: sourceUrl,
    title,
    key,
  } = recipe;

  return {
    cookingTime,
    id,
    imgUrl,
    ingredients,
    publisher,
    servings,
    sourceUrl,
    title,
    key,
  };

  // return {
  //   cooking_time: recipe.cookingTime,
  //   id: recipe.id,
  //   imgUrl: recipe.image_url,
  //   ingredients: recipe.ingredients,
  //   publisher: recipe.publisher,
  //   servings: recipe.servings,
  //   sourceUrl: recipe.source_url,
  //   title: recipe.title,
  //   key: recipe.key,
  // };
  //
};

export const loadRecipe = async function (id) {
  try {
    const data = await AJAX(`${API_URL}/${id}?key=${API_KEY}`);
    state.recipe = createRecipeObject(data);

    if (state.bookmarks.some(bookmark => bookmark.id === id)) state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (error) {
    throw `💥💥 ${error} 💥💥`;
  }
};

export const loadSearchResults = async function (query) {
  state.search.query = query;
  try {
    const data = await AJAX(`${API_URL}?search=${query}&key=${API_KEY}`);
    state.search.results = data.data.recipes.map(rec => {
      return {
        id: rec.id,
        imgUrl: rec.image_url,
        publisher: rec.publisher,
        title: rec.title,
        key: rec.key,
      };
    });

    // Reset page number to 1
    state.search.page = 1;
  } catch (error) {
    console.error(`💥 ${error} 💥💥💥💥`);
    throw error;
  }
};

export const getSearchResultsPage = function (page = state.search.page) {
  state.search.page = page;
  const start = (page - 1) * state.search.resultsPerPage; // 0;
  const end = page * state.search.resultsPerPage; //9;

  return state.search.results.slice(start, end);
};

export const updateServings = function (newServings) {
  state.recipe.ingredients.forEach(ing => {
    // newQt= oldQty * newServings / oldServings // 2 * 8 / 4 = 4
    ing.quantity = (ing.quantity * newServings) / state.recipe.servings;
  });
  state.recipe.servings = newServings;
};

const saveBookmarks = function () {
  console.log(state.bookmarks);
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};
export const addBookmark = function (recipe) {
  // Add bookmark
  state.bookmarks.push(recipe);

  // Mark current recipe as bookmark
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  saveBookmarks();
};

// delete bookmark
export const deleteBookmark = function (id) {
  const index = state.bookmarks.findIndex(el => (el.id = id));
  state.bookmarks.splice(index, 1);
  // Mark current recipe as NOT bookmark
  if (state.recipe.id === id) state.recipe.bookmarked = false;
  saveBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();

const clearbookmarks = function () {
  localStorage.clear('bookmarks');
};

// clearbookmarks();

export const uploadRecipe = async function (newRecipe) {
  try {
    // Sample
    const ingredients = Object.entries(newRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] !== '')
      .map(ing => {
        // destructure the second element in the array
        const ingrArray = ing[1].split(',').map(el => el.trim());
        if (ingrArray.length !== 3) throw new Error(`Wrong ingredient format! Please use the correct format!`);

        const [quantity, unit, description] = ingrArray;
        return { quantity: quantity ? +quantity : null, unit, description };
      });

    const recipe = {
      title: newRecipe.title,
      image_url: newRecipe.image,
      publisher: newRecipe.publisher,
      source_url: newRecipe.sourceUrl,
      cooking_time: +newRecipe.cookingTime,
      servings: +newRecipe.servings,
      ingredients,
    };

    const data = await AJAX(`${API_URL}?key=${API_KEY}`, recipe);

    state.recipe = createRecipeObject(data);
    addBookmark(state.recipe);
  } catch (error) {
    throw error;
  }
};
