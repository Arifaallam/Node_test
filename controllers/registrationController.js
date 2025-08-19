const Registration = require('../models/Registration');

exports.registerForEvent = async (req, res) => {
    try {
        const { eventId } = req.params;
        

        const registration = await Registration.create({
            user: req.user._id,
            event: eventId
        });

        res.json(registration);
    } catch (err) {
        if (err.code === 11000) {
            return res.status(400).json({ msg: 'Already registered  ' });
        }
        res.status(400).json({ msg: err.message });
    }
};  

exports.getRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.find()
       .populate('user', 'name email')
         .populate('event', 'title date');
          res.json(registrations);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
};

