import React from 'react';
import { render, fireEvent, getByTestId, waitForElement } from '@testing-library/react';
import 'mutationobserver-shim';

import ContactForm from './ContactForm';
import { act } from 'react-dom/test-utils';

test('input submit renders JSON', async () => {
  const { getByLabelText, getByText, getByTestId } = render(<ContactForm />);

  const fName = getByLabelText(/first name/i);
  const lName = getByLabelText(/last name/i);
  const email = getByLabelText(/email/i);
  const message = getByLabelText(/message/i);

  
  
  fireEvent.change(fName, { target: { value: 'sco' } });
  fireEvent.change(lName, { target: { value: 'fuston' } });
  fireEvent.change(email, { target: { value: 'sco@email.com' } });
  fireEvent.change(message, { target: { value: 'test message' } });

  expect(fName.value).toBe('sco');
  expect(lName.value).toBe('fuston');
  expect(email.value).toBe('sco@email.com');
  expect(message.value).toBe('test message');

  act(() => {
    fireEvent.click(getByText(/submit/i));
  });

  let output;
  await waitForElement( () => {
    output= getByTestId(/test-element/i);
  } );
  expect(output).toBeInTheDocument();





});