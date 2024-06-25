const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');

const app = express();
const port = process.env.PORT || 5000;

// MongoDB Atlas connection URI
const mongoURI = 'your_mongodb_atlas_connection_urimongodb+srv://lp613408:KWkviI70p8OlBPYJ@feedback-db.vuwfzbt.mongodb.net/?retryWrites=true&w=majority&appName=feedback-db';

// Connect to MongoDB
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Middleware
app.use(bodyParser.json());

// Define your routes and handle requests here
// Example: Handle user registration
app.post('/api/signup', async (req, res) => {
    const { name, email, mobile, password } = req.body;

    try {
        // Check if user with the same email already exists
        let user = await User.findOne({ email });

        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user instance
        user = new User({
            name,
            email,
            mobile,
            password: hashedPassword
        });

        // Save user to database
        await user.save();

        // Return some data upon successful signup
        res.json({ message: 'Signup successful', user });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

// Start the server
app.listen(port, () => console.log(`Server running on port ${port}`));
