const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const DATA_FILE = "./progress.json";

// 初期データ
if (!fs.existsSync(DATA_FILE)) {
  fs.writeFileSync(DATA_FILE, JSON.stringify({
    date: null,
    message: "まだ進行はありません"
  }));
}

// 進行取得（閲覧側）
app.get("/progress", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_FILE));
  res.json(data);
});

// 進行更新（管理側）
app.post("/progress", (req, res) => {
  const { date, message } = req.body;
  fs.writeFileSync(DATA_FILE, JSON.stringify({ date, message }));
  res.json({ status: "updated" });
});

app.listen(3000, () => {
  console.log("BPS mock server running on port 3000");
});
