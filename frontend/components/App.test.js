import React from 'react'
import AppFunctional from './frontend/components/AppFunctional'
import AppClass from './frontend/components/AppClass'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})


// test('starting position and text correct', () => {
//   render(<AppFunctional />)

//   const header = screen.getByText("Welcome the GRID");
//   expect(header).toBeInTheDocument();

// })


