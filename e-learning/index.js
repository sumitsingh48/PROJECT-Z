const express = require("express");
const path = require("path");
const port = 8080;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"ui"));

//Home route
app.get("/",(req,res)=>{
       res.render("index",{
           title:"Home_page"
       });
});
//About route
app.get("/about",(req,res)=>{
    res.render("about",{
        title: "About_us"
    });
});

app.get("/courses",(req,res)=>{
    res.render("course",{
        title: "course"
    });
});
app.get("/services",(req,res)=>{
    res.render("service",{
        title: "service"
    });
});
app.get("/contact",(req,res)=>{
    res.render("contact",{
        title: "contact"
    });
});

//Server Listen
app.listen(port,()=>{
     console.log(`Server is up at http://localhost:${port}`);
});
