import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {


  componentDidMount(); {
    const script = document.createElement("script");
    script.src = "/assets/js/owl.js";
    script.async = true;
    document.body.appendChild(script);

    const script1 = document.createElement("script");
    script1.src = "/assets/js/owl.carousel.min.js";
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.src = "/assets/js/owl.carousel.js";
    script2.async = true;
    document.body.appendChild(script2);
 }

  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
