import React from 'react';
import { render } from '@testing-library/react-native';
import { DefaultTextInput } from '../DefaultTextInput';

describe('DefaultTextInput', () => {
   it('DefaultTextInput Element', () => {
      const {getByTestId} = render(<DefaultTextInput/>)
      expect(getByTestId('DefaultTextInput')).toBeTruthy()
   })
})
