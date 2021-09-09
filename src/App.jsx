import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from './store/actions';

import RegionContainer from './container/RegionContainer';
import CategoryContainer from './container/CategoryContainer';
import RestaurantList from './presentational/RestaurantList';

export default function App() {
  const dispatch = useDispatch();
  const {
    selectedRegion,
    selectedCategory,
    restaurants,
  } = useSelector((state) => state);

  const isEmpty = (param) => Object.keys(param).length === 0;

  useEffect(() => {
    if (isEmpty(selectedRegion) || isEmpty(selectedCategory)) {
      return;
    }

    dispatch(loadRestaurants({
      regionName: selectedRegion.name,
      categoryId: selectedCategory.id,
    }));
  }, [selectedRegion, selectedCategory]);

  return (
    <>
      <RegionContainer />
      <CategoryContainer />
      <RestaurantList
        restaurants={restaurants}
      />
    </>
  );
}
