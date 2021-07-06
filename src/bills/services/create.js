import Bill from '../schema/Bill';

export default (req, res) => {
    Bill.create(req.body)
        .then((created) => {
            if (!created) {
                return res.status(404).json({ status: false });
            }
            return res.status(201).json({ status: true });
        })
        .catch((err) => {
            res.status(500).json({ status: false });
            res.status(500).json({ status: false });
        });
};
