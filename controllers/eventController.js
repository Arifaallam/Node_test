const Event = require('../models/Event');

exports.createEvent = async (req, res) => {
    try {
        const { title, description, date } = req.body;

        const event = await Event.create({
            title,
            description,
            date,
            createdBy: req.user._id
        });

        res.json(event);
        }catch(err){
            res.status(400).json({ msg: err });
        }
    };


    exports.getEvents = async (req, res) => {
        try{
            const events = await Event.find().populate('createdBy', 'name email');
            res.json(events);
        } catch(err) {
            res.status(500).json({ msg: err.message });
        }
    };
       