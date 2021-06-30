import Hello from './src/hello/index';
import bills from './src/bills/index';

export default (app) => {
    app.use('/', Hello);
    app.use('/bills', bills);
};
