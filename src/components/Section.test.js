import "@testing-library/jest-native/extend-expect";
import "react-native";
import { Text } from 'react-native';
import React from 'react';
import { Section } from './Section';
import { render } from '@testing-library/react-native';

const testTitle = "Olá Mundo!";

it('Section has a acessible and matching title', () => {
  const { getByA11yRole } = render(<Section title={testTitle} />);
  const Header = getByA11yRole("header");

  expect(Header).toHaveTextContent(testTitle)
})

it('Section renders children', () => {
  const { queryByTestId, queryByText } = render(<Section title="Teste"><Text>Child</Text></Section>);
  const description = queryByTestId("description");

  expect(description).toContainElement(queryByText(/child/i));
})
