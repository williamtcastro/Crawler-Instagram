const url_addon = process.env.BASE_URL_ADDON;
const url = process.env.BASE_URL;
const fetch = require("node-fetch");
let headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.79 Safari/537.36 Edge/14.14393",
};

const baseRequest = async (user) => {
  let response = await fetch(url + user + url_addon, headers);
  if (response.ok) {
    const { graphql } = await response.json();
    return graphql;
  } else {
    return false;
  }
};

module.exports = baseRequest;
