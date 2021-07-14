import { Route, Switch } from 'react-router-dom';

import StepNavigation from './views/Steps';
import Confirmation from './views/Confirmation';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={StepNavigation} />
            <Route exact path="/confirmation" component={Confirmation} />
        </Switch>
    );
}

export default Routes;