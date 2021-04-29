const baseRequest = require("../services/insta/baseRequest");

module.exports = {
  async index(req, res) {
    const { user } = req.params;
    const json = await baseRequest(user);
    if (!json) return res.status(500).json({ msg: "erro no request" });
    return res.status(200).json(json);
  },

  async info(req, res) {
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

  async posts(req, res) {
    const { user } = req.params;
    const UserPosts = [];
    const UserInfo = {};
    const json = await baseRequest(user);
    if (!json) return res.status(500).json({ msg: "erro no request" });

    UserInfo.id = json.user.id;
    UserInfo.username = json.user.username;

    const _userPosts = json.user.edge_owner_to_timeline_media;

    for (i = 0; i <= _userPosts.count; i++) {
      const _currentPost = _userPosts.edges[i];
      console.log(_currentPost);
 
      // const _postToBeAdd = {
      //   post_id: _currentPost.id,
      //   post_shortcode: _currentPost.shortcode,
      //   post_url: `https://www.instagram.com/p/${_currentPost.shortcode}`,
      //   post_img: _currentPost.display_url,
      //   post_type: _currentPost.__typename,
      // };
      // UserPosts.push(_postToBeAdd);
    }
    return res.status(200).json({ user: UserInfo, posts: UserPosts });
  },
};
