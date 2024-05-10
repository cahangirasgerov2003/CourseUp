export default {
  postLimit(posts, limit) {
    if (posts.length > 1) {
      return posts.reverse().slice(0, limit);
    } else if (posts.length === 1) {
      return posts.slice(0, limit);
    } else {
      console.log(posts);
      return [];
    }
  },
};
