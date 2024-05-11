import moment from "moment";

export default {
  lengthControl(text, length) {
    if (text.length > length) {
      return text.slice(0, length) + "...";
    } else {
      return text;
    }
  },
  generateDate(date, format) {
    return moment(date).format(format);
  },
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
