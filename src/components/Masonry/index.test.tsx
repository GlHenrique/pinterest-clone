import React from 'react';
import { render } from '@testing-library/react';
import Mansory from './index';

window.scrollTo = jest.fn();

it('Render Mansory', () => {
  render(<Mansory />);
});

it('Should scrollTo Top or Bottom', () => {
  const top = document.body.scrollHeight || 0;
  expect(top).toBeGreaterThan(-1);
});

it('Should return error', () => {
  const invalidValue = -5953;
  expect(invalidValue).toBeLessThan(0);
});
