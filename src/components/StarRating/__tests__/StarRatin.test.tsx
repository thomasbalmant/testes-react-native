import React from 'react';
import { render } from '@testing-library/react-native';
import { StarRating } from '../StarRating';

test('The component rendered', () => {
   render(<StarRating rating={{ average: 7 }} />)
})