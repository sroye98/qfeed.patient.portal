import { Route, Switch } from 'react-router-dom';

import StepNavigation from './views/Steps';
import Confirmation from './views/Confirmation';
import NotFound from './views/404';

const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={StepNavigation} />
            <Route exact path="/confirmation" component={Confirmation} />
            <Route path="*" component={NotFound} />
        </Switch>
    );
};

export default Routes;