import React from 'react';
import { render } from '@testing-library/react-native';
import { StarRating } from '../StarRating';

describe('StarRating', () => {
   it('Text Rating Element', () => {
      const { getByTestId } = render(<StarRating rating={{ average: 7.9 }} />)
      expect(getByTestId('ratingText')).toBeTruthy()
   })
   it('Text Rating is Null', () => {
      const { container } = render(<StarRating />)
      expect(container.children.length).toEqual(0)
   })
   it('Star Icon Element', () => {
      const { getByTestId } = render(<StarRating rating={{ average: 7.9 }} />)
      expect(getByTestId('starIcon')).toBeTruthy()
   })

})
