import { render, screen } from '@testing-library/react';

import { Heading } from './Heading';

describe('<Heading />', () => {
  it('should render Heading default', () => {
    render(<Heading>Button</Heading>);

    const heading = screen.getByRole('heading', { name: /Button/i });

    expect(heading).toBeInTheDocument();

    expect(heading).toHaveStyle({
      'font-weight': 400,
      'font-style': 'normal',
      'font-family': "'Inter',sans-serif",
    });

    expect(heading).toHaveStyle({
      'font-size': '4.2rem',
      'line-height': '5rem',
    });
  });

  it('should render Heading with style bold and italic', () => {
    render(
      <Heading bold italic>
        Button
      </Heading>,
    );

    expect(screen.getByRole('heading', { name: /Button/i })).toHaveStyle({
      'font-weight': 700,
      'font-style': 'italic',
    });
  });

  it('should render Heading with level 2', () => {
    render(<Heading level={2}>Button</Heading>);

    expect(screen.getByRole('heading', { name: /Button/i })).toHaveStyle({
      'font-size': '3.6rem',
      'line-height': '4.3rem',
    });
  });

  it('should render Heading with level 3', () => {
    render(<Heading level={3}>Button</Heading>);

    expect(screen.getByRole('heading', { name: /Button/i })).toHaveStyle({
      'font-size': '3.2rem',
      'line-height': '3.8rem',
    });
  });

  it('should render Heading with level 4', () => {
    render(<Heading level={4}>Button</Heading>);

    expect(screen.getByRole('heading', { name: /Button/i })).toHaveStyle({
      'font-size': '2.8rem',
      'line-height': '3.4rem',
    });
  });

  it('should render Heading with level 5', () => {
    render(<Heading level={5}>Button</Heading>);

    expect(screen.getByRole('heading', { name: /Button/i })).toHaveStyle({
      'font-size': '2.4rem',
      'line-height': '2.9rem',
    });
  });

  it('should render Heading with level 6', () => {
    render(<Heading level={6}>Button</Heading>);

    expect(screen.getByRole('heading', { name: /Button/i })).toHaveStyle({
      'font-size': '2rem',
      'line-height': '2.8rem',
    });
  });
});
