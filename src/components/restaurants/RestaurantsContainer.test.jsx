import React from 'react';

import { useSelector } from 'react-redux';

import { render } from '@testing-library/react';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../../../fixtures/restaurants';

jest.mock('react-redux');

describe('RestaurantsContainer', () => {
  const setLoading = (loading) => {
    useSelector.mockImplementation((selector) => selector({
      restaurant: {
        restaurants,
        loading,
      },
    }));
  };

  context('when restaurants have been loaded', () => {
    beforeEach(() => {
      setLoading(false);
    });

    it('renders restaurants', () => {
      const { queryByText } = render((
        <RestaurantsContainer />
      ));

      expect(queryByText(/양천주가/)).not.toBeNull();
    });
  });

  context('when restaurants is being loaded', () => {
    beforeEach(() => {
      setLoading(true);
    });

    it('renders loading message', () => {
      const { queryByText } = render((
        <RestaurantsContainer />
      ));

      expect(queryByText(/로딩중/)).not.toBeNull();
    });
  });
});