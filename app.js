const express = require("express");
const app = express();
const port = 3000;

app.use("/", (req, res, next) => {
  req.requestTime = new Date();
  let yyyy = req.requestTime.getFullYear();
  let mm = ("0" + (req.requestTime.getMonth() + 1)).substr(-2);
  let dd = ("0" + req.requestTime.getDate()).substr(-2);
  let hour = ("0" + req.requestTime.getHours()).substr(-2);
  let min = ("0" + req.requestTime.getMinutes()).substr(-2);
  let sec = ("0" + req.requestTime.getSeconds()).substr(-2);
  let reqUrl = req.originalUrl;
  let reqMethod = req.method;
  console.log(
    yyyy +
      "-" +
      mm +
      "-" +
      dd +
      " " +
      hour +
      ":" +
      min +
      ":" +
      sec +
      " | " +
      reqMethod +
      " from " +
      reqUrl
  );
  next();
});

// 列出全部 Todo
app.get("/", (req, res) => {
  res.send("列出全部 Todo");
});

// 新增一筆 Todo 頁面
app.get("/new", (req, res) => {
  res.send("新增 Todo 頁面");
});

// 顯示一筆 Todo 的詳細內容
app.get("/:id", (req, res) => {
  res.send("顯示一筆 Todo");
});

// 新增一筆  Todo
app.post("/", (req, res) => {
  res.send("新增一筆  Todo");
});

app.delete("/:id/delete", (req, res) => {
  res.send("刪除 Todo");
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
