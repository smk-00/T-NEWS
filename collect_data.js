const NewsAPI = require("newsapi");
const fs = require("fs");
//smk - efe63b7f29c243b68a537bdce36fe0e0
// sm - fd0bf2b6a6454faf892f3accdd3243ed
// demy - cbb1a3dde04547139f1010c54e2334d9
const API_KEY = "cbb1a3dde04547139f1010c54e2334d9";
const newsapi = new NewsAPI(`${API_KEY}`);
const FIELDS = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const getTopHeadlinesof = (field) => {
  return newsapi.v2.topHeadlines({
    category: field,
    language: "en",
  });
};

const getEverything = (query) => {
  return newsapi.v2.everything({
    q: query,
    language: "en",
  });
};

const getEverythingof = async (query) => {
  var everythingabout = await getEverything(query);
  everythingabout.articles.map((data, index) => {
    data.id = index;
    return data;
  });
  return everythingabout;
};
const topics = [
  "crypto",
  "Tamilnadu",
  "india",
  "programming",
  "ArtificialIntelligence",
  "DataScience",
  "Education",
  "DeepLearning",
  "MachineLearning",
  "VideoGames",
  "theni",
  "NSEIndia",
  "google",
  "Environment",
  "pollution",
  "ElonMusk",
  "jobs",
  "microsoft",
  "Facebook",
  "isro",
  "space",
  "Automobile",
];

const getAllTopics = () => {
  var all_topics_data = {};
  topics.forEach(async (topic) => {
    all_topics_data[topic] = await getEverythingof(topic);
    all_topics_data[topic].articles.map((data, index) => {
      data.id = index;
      return data;
    });
  });
  return all_topics_data;
};
const getTopHeadlines = () => {
  var field_headlines = {};
  FIELDS.forEach(async (field) => {
    field_headlines[field] = await getTopHeadlinesof(field);
    field_headlines[field].articles.map((data, index) => {
      data.id = index;
      return data;
    });
  });
  return field_headlines;
};

const storeData = (path, data) => {
  fs.writeFile(path, JSON.stringify(data), "utf8", (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const getStoredData = (path) => {
  var data = fs.readFileSync(path);
  return JSON.parse(data);
};

module.exports = {
  getTopHeadlines,
  getAllTopics,
  storeData,
  getStoredData,
};
