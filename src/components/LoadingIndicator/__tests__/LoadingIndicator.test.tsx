import React from 'react';
import { render } from '@testing-library/react-native';
import { LoadingIndicator } from '../LoadingIndicator';

describe('LoadingIndicator', () => {
   it('LoadingIndicator Element to be truth', () => {
      const {getByTestId} = render(<LoadingIndicator isLoading={true} />)
      expect(getByTestId('LoadingIndicator')).toBeTruthy()
   })
   it('LoadingIndicator Element to be false', () => {
      const {getByTestId} = render(<LoadingIndicator isLoading={false} />)
      expect(getByTestId('LoadingIndicator')).toBeTruthy()
   })
   it('LoadingIndicator Element to be null', () => {
      const {container} = render(<LoadingIndicator/>)
      expect(container.children.length).toEqual(0)
   })
})
