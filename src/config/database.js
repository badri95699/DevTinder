const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://badri95699:Gopal%401234@cluster0.uihhyds.mongodb.net/devTinder');
}

module.exports = connectDB;