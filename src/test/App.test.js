import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Hellow World', () => {
  render(<App />) 
  expect(screen.getByText("Hellow World")).toBeInTheDocument();
});
