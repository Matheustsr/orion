import Bill from '../schema/Bill';

export default (req, res) => {
    Bill.findByIdAndRemove(req.params.id).then(res.json({ status: 'removed' }));
};
