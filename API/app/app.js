import { config } from 'dotenv';

config();
import { Router, HandleAllRoutes } from './routes/router';


class App {
    constructor() {
        this.Routerobj = new Router();

    }

    init() {
        this.Routerobj.init();
        const handleAllRoutes = new HandleAllRoutes();
        handleAllRoutes.HandleAllRoute();
    }
}

const initialize = new App();
initialize.init();
export default initialize.Routerobj;