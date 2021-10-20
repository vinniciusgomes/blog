import { render, screen } from '@testing-library/react';

import { SignIn } from './SignIn';

describe('<SignIn />', () => {
  it('should render', () => {
    render(<SignIn />);
    expect(screen.getByText('SignIn')).toBeInTheDocument();
  });
});
