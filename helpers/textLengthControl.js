export default {
  lengthControl(text) {
    if (text.length > 100) {
      return text.slice(0, 97) + "...";
    } else {
      return text;
    }
  },
};
