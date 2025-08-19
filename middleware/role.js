const roleCheck = (req, res, next) => {
    // Check if req.body exists
    console.log(req.body);
    console.log(req.user);
    if (!req.body) {
        return res.status(400).json({ message: 'Request body is required' });
    }

    const { role } = req.body;
    
    // Check if role exists in body
    if (!role) {
        return res.status(400).json({ message: 'Role is required in request body' });
    }

    // Check if user exists and has role
    // if (!req.user) {
    //     return res.status(401).json({ message: 'Authentication required' });
    // }
 
    if (req.user.role !== role) {
        return res.status(403).json({ message: 'Access denied' });
    }

    next();
};

module.exports = roleCheck;
