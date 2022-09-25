import React from 'react';
import { render } from '@testing-library/react-native';
import { StarRating } from '../StarRating';

describe('StarRating Component', () => {
   test('Text Rating Element', () => {
      const { getByTestId } = render(<StarRating rating={{ average: 7.9 }} />)
      expect(getByTestId('ratingText')).toBeTruthy()
   })
   test('Star Icon Element', () => {
      const { getByTestId } = render(<StarRating rating={{ average: 7.9 }} />)
      expect(getByTestId('starIcon')).toBeTruthy()
   })
})
