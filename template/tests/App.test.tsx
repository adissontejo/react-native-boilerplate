import React from 'react';
import { render } from '@testing-library/react-native';

import App from '../src';

it('renders correctly', () => {
  const { toJSON } = render(<App />);

  expect(toJSON()).toMatchSnapshot();
});
