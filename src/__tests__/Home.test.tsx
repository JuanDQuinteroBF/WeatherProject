import { render } from '@testing-library/react';
import "@testing-library/jest-dom";
import Home from '../components/Home';


describe('Component', () => {
  it('renders the correct text in the <h1> element', () => {
    const { getByText } = render(<Home />);
    const h1Element = getByText('Welcome to Widget Weather');
    expect(h1Element).toBeInTheDocument()
  });
});
