const NewsAPI = require("newsapi");

const API_KEY = "efe63b7f29c243b68a537bdce36fe0e0";
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
  var data;
  newsapi.v2
    .topHeadlines({
      category: field,
      language: "en",
    })
    .then((response) => {
      data = response;
    })
    .catch((err) => {
      console.log(err);
      data = null;
    });

  return data;
};

const getEverythingof = async (field) => {
  var data;
  await newsapi.v2
    .everything({
      category: field,
      language: "en",
    })
    .then((response) => {
      data = response;
    })
    .catch((err) => {
      console.log(err);
      data = null;
    });

  return data;
};

const getTopHeadlines = () => {
  var field_headlines = {};
  FIELDS.forEach((field) => {
    field_headlines[field] = getTopHeadlinesof(field);
  });
  return field_headlines;
};

const getEverything = () => {
  var field_everythibg = {};
  FIELDS.forEach((field) => {
    field_everythibg[field] = getEverythingof(field);
  });
  return field_everythibg;
};

module.exports = {
  getTopHeadlines,
  getEverything,
  getTopHeadlinesof,
  getEverythingof,
};
