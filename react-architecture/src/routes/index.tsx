/*
 * @vinniciusgomes
 * This file is for:
 * This file is responsible for validating whether the client will access private routes if logged in or if it will use public routes.
 */
import { Switch } from 'react-router-dom';

import Private from './Private';
import Public from './Public';

function Routes() {
  const user = false;

  return <Switch>{user ? <Private /> : <Public />}</Switch>;
}

export default Routes;
