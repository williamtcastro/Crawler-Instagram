const graphRequest = require("../services/insta/graphRequest");

module.exports = {
  async index(req, res) {
    const { post } = req.params;
    const json = await graphRequest(post);
    if (!json) return res.status(500).json({ msg: "erro no request" });
    return res.status(200).json(json);
  },

  async comments(req, res) {
    const { user } = req.params;
    const UserInfo = {};
    const json = await baseRequest(user);
    if (!json) return res.status(500).json({ msg: "erro no request" });
    //   NOME | FOTINHA | LINK | POSTS - LIMITE? 9

    UserInfo.id = json.user.id;
    UserInfo.name = json.user.full_name;

    UserInfo.username = json.user.username;
    UserInfo.photo = json.user.profile_pic_url_hd;
    UserInfo.profile_link = `https://www.instagram.com/${json.user.username}`;
    UserInfo.category_name = json.user.category_name;
    return res.status(200).json({ user: UserInfo });
  },
};
