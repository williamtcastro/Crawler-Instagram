const graphRequest = require("../services/insta/graphRequest");

module.exports = {
  async index(req, res) {
    const { post } = req.params;
    const json = await graphRequest(post);
    if (!json) return res.status(500).json({ msg: "erro no request" });
    return res.status(200).json(json);
  },

  async comments(req, res) {
    const { post } = req.params;
    const PostInfo = {};
    const PostComments = [];
    var _descriptionText = '';
    const json = await graphRequest(post);
    if (!json) return res.status(500).json({ msg: "erro no request" });

    PostInfo.id = json.id;
    PostInfo.shortcode = json.shortcode;
    PostInfo.img_url = json.display_url;
    const description = json.edge_media_to_caption.edges;
    description.forEach(element => {
      const _currentDescription = element.node;
      console.log(_currentDescription);
      _descriptionText += _currentDescription.text + " ";
    });
    PostInfo.description = _descriptionText;
    PostInfo.total_comments = json.edge_media_to_parent_comment.count;
    
    const _postComments = json.edge_media_to_parent_comment.edges;

    _postComments.forEach(element => {
      const _currentComment = element.node;
      const _childComment = [];
      // if(_currentComment.edge_threaded_comments.count > 0) {}
      // var date = new DateTime(_currentComment.created_at);
      const _commentToBeAdd = {
        comment_owner: _currentComment.owner.username,
        text: _currentComment.text,
        spam: _currentComment.did_report_as_spam,
        // created_at: date, 
      };
      PostComments.push(_commentToBeAdd);
    });
    PostInfo.comments = PostComments;
    
    return res.status(200).json({ post: PostInfo });
  },
};
