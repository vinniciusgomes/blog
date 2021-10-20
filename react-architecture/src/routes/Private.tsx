/*
 * @vinniciusgomes
 * This file is for:
 * This file is responsible for controlling all private routes.
 */
import { Route } from 'react-router-dom';

import { Dashboard } from 'pages';

function Routes() {
  return (
    <>
      <Route path="/" exact component={Dashboard} />
    </>
  );
}

export default Routes;
