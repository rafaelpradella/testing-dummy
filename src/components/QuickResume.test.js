import { NavigationContainer } from '@react-navigation/native';
import { render, fireEvent } from '@testing-library/react-native';
import React from 'react';
import MainNavigation from '../routes/MainNavigation';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('QuickResume navigates to Details', () => {
  const { queryByA11yRole, debug } = render(
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );

  const QuickResumeBtn = queryByA11yRole("button");
  expect(QuickResumeBtn).toBeDefined();
})
