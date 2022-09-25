import React from 'react';
import { render } from '@testing-library/react-native';
import { ImageIcon } from '../ImageIcon';

describe('ImageIcon', () => {
   it('ImageIcon Element', () => {
      const { getByTestId } = render(
         <ImageIcon
            color='#fff'
            source={require('../../../assets/images/arrow-down.png')}
            size={0}
         />)
      expect(getByTestId('ImageIcon')).toBeTruthy()
   })
})
