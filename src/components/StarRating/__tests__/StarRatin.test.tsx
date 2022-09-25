import React from 'react';
import { render } from '@testing-library/react-native';
import { StarRating } from '../StarRating';

describe('Rating Component', () => {
   test('Rating Text Element', () => {
      const { getByTestId } = render(<StarRating rating={{ average: 7.9 }} />)
      expect(getByTestId('ratingText')).toBeTruthy()
   })
   test('Star Icon Element', () => {
      const { getByTestId } = render(<StarRating rating={{ average: 7.9 }} />)
      expect(getByTestId('starIcon')).toBeTruthy()
   })
})
