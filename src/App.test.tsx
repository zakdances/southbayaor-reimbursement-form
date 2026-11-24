import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import axios from 'axios';
import { Provider } from 'react-redux';
import App from './App';
import store, { MainContextProvider } from './view model/store';
import { editPayTo } from './view model/reducers/form';

jest.mock('axios', () => ({
  post: jest.fn(),
  isAxiosError: (error: { isAxiosError?: boolean }) => error.isAxiosError === true,
}));

const post = axios.post as jest.Mock;

function submitForm() {
  store.dispatch(editPayTo('Test Submitter'));
  render(
    <Provider store={store}>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </Provider>
  );
  fireEvent.submit(screen.getByRole('button', { name: 'Submit' }).closest('form')!);
}

test.each([
  [{ status: 'submitted', copySent: true }, 'Form submitted successfully'],
  [{ status: 'submitted', copySent: false }, "We couldn't email you a copy"],
  [{ status: 'saved_for_follow_up', submissionId: 'backup-reference' }, 'backup-reference'],
  [{ name: 'Form submit done!' }, 'Form submitted successfully'],
])('acknowledges a handled submission %#', async (data, message) => {
  post.mockResolvedValueOnce({ data });
  submitForm();

  await waitFor(() => expect(store.getState().dialog.message.text).toContain(message));
  expect(store.getState().form.payTo).toBe('');
});

test('keeps the form populated and shows the reference when backup fails', async () => {
  post.mockRejectedValueOnce({
    isAxiosError: true,
    response: { data: { status: 'failed', submissionId: 'failure-reference' } },
  });
  submitForm();

  await waitFor(() => expect(store.getState().dialog.message.text).toContain('failure-reference'));
  expect(store.getState().form.payTo).toBe('Test Submitter');
});

test('does not clear the form for an unexpected success response', async () => {
  post.mockResolvedValueOnce({ data: { status: 'failed' } });
  submitForm();

  await waitFor(() => expect(store.getState().dialog.message.text).toContain("couldn't confirm"));
  expect(store.getState().form.payTo).toBe('Test Submitter');
});
