import React from 'react';
import { render } from '@testing-library/react-native';
import { DaysOfWeekIndicator } from '../DaysOfWeekIndicator';

describe('DaysOfWeekIndicator', () => {
   it('View Days Indicator', () => {
      const {getByTestId} = render(<DaysOfWeekIndicator days={[]}/>)
      expect(getByTestId('DaysOfWeekIndicator')).toBeTruthy()
   })
   it('Everything from page', () => {
      const {container} = render(<DaysOfWeekIndicator days={[]}/>)
      expect(container.children.length).toEqual(0)
   })
})
