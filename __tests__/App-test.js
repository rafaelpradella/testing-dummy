/**
 * @format
 */

import 'react-native';
import React from 'react';
import { render } from "@testing-library/native"
import App from '../App';

it('renders correctly', () => {
  const appShell = render(<App />);
  expect(appShell).toBeVisible();
});
