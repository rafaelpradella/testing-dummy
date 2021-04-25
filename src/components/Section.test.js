import "@testing-library/jest-native/extend-expect";
import "react-native";
import { Text } from 'react-native';
import React from 'react';
import { render } from '@testing-library/react-native';

import Section from './Section';

const testTitle = "Olá Mundo!";

it('Section has a acessible and matching title', () => {
  const { getByA11yRole, debug } = render(<Section title={testTitle} />);
  debug()
  const Header = getByA11yRole("header");

  expect(Header).toHaveTextContent(testTitle)
})

it('Section renders children', () => {
  const { queryByTestId, queryByText } = render(<Section title="Teste"><Text>Child</Text></Section>);
  const description = queryByTestId("description");

  expect(description).toContainElement(queryByText(/child/i));
})
