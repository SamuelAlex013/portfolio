import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
beforeEach(() => {
  window.history.replaceState(null, '', '/'); localStorage.clear();
  window.requestAnimationFrame = cb => { cb(); return 0; };
  window.scrollTo = jest.fn();
});
test('opens as a personal portfolio with three featured projects', () => {
  render(<App />);
  expect(screen.getByRole('heading', {level: 1, name: /Samuel Alexander/})).toBeInTheDocument();
  expect(screen.getAllByRole('link', {name: /^Explore (OutReach|Selective video|Hand annotation)/})).toHaveLength(3);
  expect(screen.getByText('Explore all 33 projects').closest('details')).not.toHaveAttribute('open');
});
test('opens and returns from a case study', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('link', {name: 'Explore OutReach CRM'}));
  expect(screen.getByRole('heading', {name: 'OutReach CRM', level: 1})).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {name: /PostgreSQL Accounts/}));
  expect(screen.getByText(/Persist contacts, accounts, campaigns/)).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', {name: 'Back to selected work'}));
  expect(screen.getByRole('heading', {level: 1, name: /Samuel Alexander/})).toBeInTheDocument();
});
test('filters the complete archive and recovers an empty result', () => {
  render(<App />);
  fireEvent.click(screen.getByText('Explore all 33 projects'));
  fireEvent.change(screen.getByRole('searchbox'), {target:{value:'no-such-project'}});
  expect(screen.getByText('No matching projects.')).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', {name:'Clear filters'}));
  expect(screen.getByRole('status')).toHaveTextContent('33 projects found');
  fireEvent.change(screen.getByRole('combobox', {name:'Filter by project origin'}), {target:{value:'Independent'}});
  expect(screen.getByRole('status')).toHaveTextContent('10 projects found');
});
test('persists theme and preserves a working skip link', () => {
  render(<App />);
  fireEvent.click(screen.getByRole('button', {name:'Switch to light theme'}));
  expect(localStorage.getItem('samuel-theme')).toBe('light');
  fireEvent.click(screen.getByRole('link', {name:'Skip to content'}));
  expect(screen.getByRole('main')).toHaveFocus();
});
