import bills from './src/bills/index';

export default (app) => {
    app.use('/bills', bills);
};
