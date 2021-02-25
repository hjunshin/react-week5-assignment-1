import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function setRestaurnats(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function setClicked(clicked) {
  return {
    type: 'setClicked',
    payload: {
      clicked,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions;
    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories;
    dispatch(setRegions(categories));
  };
}

export function loadRestaurnats({ region, category }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(region, category);
    dispatch(setRestaurnats(restaurants));
  };
}
