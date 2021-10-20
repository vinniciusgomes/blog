/*
 * @vinniciusgomes
 * This file is for:
 * This file is responsible for controlling all public routes.
 */
import { Route } from 'react-router-dom';

import { SignIn } from 'pages';

function Routes() {
  return (
    <>
      <Route path="/" exact component={SignIn} />
    </>
  );
}

export default Routes;
