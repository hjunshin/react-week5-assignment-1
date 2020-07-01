import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateRegions, updateCategories, getRegions, getCategories, getRestaurants,
} from './actions';

import ButtonList from './ButtonList';
import TextList from './TextList';
import RegionButtonListContainer from './RegionButtonListContainer';

export default function App() {
  const dispatch = useDispatch();
  const { categories, restaurants } = useSelector((state) => ({
    categories: state.categories,
    restaurants: state.restaurants,
  }));

  const handleClickCategory = (id) => {
    dispatch(updateCategories(id));
    dispatch(getRestaurants());
  };

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <RegionButtonListContainer />
      <ButtonList
        elements={categories}
        onClick={handleClickCategory}
      />
      <TextList
        elements={restaurants}
      />
    </>
  );
}
