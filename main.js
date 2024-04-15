import express from "express";
import mongoose, { get } from "mongoose";
import Employee from "./models/Employee.js";
import { name } from "ejs";

mongoose.connect('mongodb://127.0.0.1:27017/company');
const app = express();
const port = 3000;
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  

  res.render("index", { foo: "FOO" });

  
});
app.get("/generate",async (req, res) => {
    let randnm = ["Babbar", "Harry", "Striver", "Rahul", "Shraddha"];
    let cities = ["Dhaka", "Kolkata", "Chennai", "Las Vegas"];
    
    let salary = (Math.random() + 1) * 45000;
    let language = ["Python", "JAVA", "CPP", "Javascript"];
      
    const isManager = () => {
      let m = Math.random();
      if (m >= 0.5) return true;
      else return false;
    };
   
    for (let index = 0; index < 10; index++) {
        let r = Math.floor(Math.random() * randnm.length);
    let l = Math.floor(Math.random() * language.length);
    let c = Math.floor(Math.random() * cities.length);

      await Employee.create({
        name: randnm[r],
        salary: salary,
        language: language[l],
        isManager: isManager(),
        city: cities[c],
      });
    }
    console.log("pressed");
  


});

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });