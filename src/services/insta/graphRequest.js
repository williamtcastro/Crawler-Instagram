const url_addon = process.env.BASE_URL_ADDON;
const url = process.env.BASE_URL;
const fetch = require("node-fetch");

const baseRequest = async (req) => {
  let response = await fetch(url + "p/" + req + "/?__a=1");
  if (response.ok) {
    const { graphql } = await response.json();
    return graphql.shortcode_media;
  } else {
    return false;
  }
};

module.exports = baseRequest;
