const fetchData = require("./collect_data");
const express = require("express");
const cors = require("cors");

//efe63b7f29c243b68a537bdce36fe0e0
//const headlines = fetchData.getTopHeadlines();
//const everything = fetchData.getEverything();

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`[SERVER] Listening on ${PORT}`);
});
/*
app.get("/headlines", (req, res) => {
  res.send(headlines);
});

app.get("/everything", (req, res) => {
  res.send(everything);
});
*/

console.log(fetchData.getTopHeadlinesof("technology"));
