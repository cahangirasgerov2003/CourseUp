import moment from "moment";

export default {
  generateDate(date, format) {
    return moment(date).format(format);
  },
};
