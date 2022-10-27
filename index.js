const express = require("express");
const app = express();
const helmet = require("helmet");

const courseInfo = require("./course_info.json");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(helmet())
console.log(courseInfo.courses.cst300);
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
    res.render("template", {"courseInfo": courseInfo.courses.default}) 
})

app.get("/cst334", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.default}) 
})

app.get("/cst311", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.default}) 
})

app.get("/cst336", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.default}) 
})

app.get("/cst462", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.default}) 
})

app.get("/cst328", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.default}) 
})

app.get("/cst370", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.default}) 
})

app.get("/cst383", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.default}) 
})

app.get("/cst329", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.default}) 
})

app.get("/cst438", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.default}) 
})

app.get("/cst499", (req, res) => {
    res.render("template", {"courseInfo": courseInfo.courses.default}) 
})

app.listen(3000, "localhost", () => {
    console.log("Server started");
});