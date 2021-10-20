import { render } from '@testing-library/react';

import Bootstrap from './Bootstrap';

describe('<Bootstrap />', () => {
  it('should render', () => {
    const component = render(<Bootstrap />);
    expect(component).toBeTruthy();
  });
});
