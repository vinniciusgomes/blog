import { render, screen } from '@testing-library/react';

import { Dashboard } from './Dashboard';

describe('<Dashboard />', () => {
  it('should render', () => {
    render(<Dashboard />);
    expect(screen.getByText('Dashboard')).toBeInTheDocument();
  });
});
