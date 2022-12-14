const express = require("express");
const app = express();
//const helmet = require("helmet");
const port = process.env.PORT || 3000;
const courseInfo = require("./course_info.json");
app.set("view engine", "ejs");
app.use(express.static("public"));
//app.use(helmet())
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/cst300", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst300});
});


app.get("/cst338", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst338} )
})

app.get("/cst363", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst363}) 
})

app.get("/cst334", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst334}) 
})

app.get("/cst311", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst311}) 
})

app.get("/cst336", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst336}) 
})

app.get("/cst462", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst462}) 
})

app.get("/cst328", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst328}) 
})

app.get("/cst370", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst370}) 
})

app.get("/cst383", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst383}) 
})

app.get("/cst329", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst329}) 
})

app.get("/cst438", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst438}) 
})

app.get("/cst499", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.cst499}) 
})

app.listen(port, () => {
    console.log("Server started");
});