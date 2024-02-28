const mongoose = require('mongoose');
 
// Define the Mongoose schema for the User
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true }
});
 
// Create the Mongoose model for the User schema
const User = mongoose.model('User', userSchema);
 
// Connect to MongoDB
mongoose.connect('mongodb+srv://chiku:chiku123@nodejs30.4vxmvsn.mongodb.net/');
 
// Function to add a new user to the MongoDB database
function addUserToDatabase(Users) {
    // Create a new User object using the provided user data
    const newUser = new User({
        username: Users.name,
        email: Users.email
    });
 
    // Save the user to the database
    newUser.save()
        .then(() => {
            console.log('User successfully added to the database!');
        })
        .catch((error) => {
            console.error('Error adding user to the database:', error);
        });
}
 
// Example usage
addUserToDatabase({ name: 'john_doe', email: 'john@example.com' });