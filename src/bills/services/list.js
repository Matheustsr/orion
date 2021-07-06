import Bill from '../schema/Bill';

export default (req, res) => {
    Bill.find({}).then((bills) => {
        if (!bills || !bills.length) {
            res.status(404).json({ status: false });
        }

        return res.status(200).json({
            status: true,
            data: bills,
            data: bills,
        });
    });
};
