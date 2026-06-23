const mongoose = require("mongoose");
const dotenv = require('dotenv');
const Notice = require('./models/Notice');
const User = require('./models/User');
const notices = require('./data/notices')

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

// Function to seed data

const seedData = async () => {
    try {
        // Clear existing data
        await Notice.deleteMany();
        await User.deleteMany();


        // Create a default admin User
        const createdUser = await User.create({
            name: "Admin User",
            email: "admin@example.com",
            password: "123456",
            role: "admin"
        })

        // Assign the default user ID to each product 
        const userID = createdUser._id

        const sampleNotices = notices.map((notice) => {
            return { ...notice, createdBy: userID };
        })

        // Insert the products into the database
        await Notice.insertMany(sampleNotices);

        console.log("Notice data seeded successfully");
        process.exit();
    } catch (error) {
        console.error('Error seeding the data:', error)
        process.exit(1);
    }
}

seedData(); 