const mongoose = require('mongoose');
const uri = 'mongodb+srv://schoolmanagement:schoolmanagement@cluster0.aguume3.mongodb.net/SchoolManagement?retryWrites=true&w=majority';

function main() {
    mongoose
      .connect(uri)
      .then(() => {
        console.log("Succesfull");
      })
      .catch((err) => {
        console.log("Error: ", err);
      });
  }
  
  module.exports = { main };
  