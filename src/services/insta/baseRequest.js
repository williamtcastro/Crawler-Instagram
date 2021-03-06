const url_addon = process.env.BASE_URL_ADDON;
const url = process.env.BASE_URL;
const fetch = require("node-fetch");

const baseRequest = async (request) => {
  let response = await fetch(url + request + url_addon);
  if (response.ok) {
    const { graphql } = await response.json();
    return graphql;
  } else {
    return false;
  }
};

module.exports = baseRequest;
