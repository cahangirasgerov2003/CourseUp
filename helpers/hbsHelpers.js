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
  pagination(paginationNumber, countPagination) {
    let outputHTML = "";
    let i = Number(paginationNumber) > 3 ? Number(paginationNumber) - 2 : 1;

    if (countPagination > 0) {
      outputHTML += `<nav aria-label="Page navigation example" class="col-12 mt-5">
        <ul class="pagination justify-content-center">`;

      if (paginationNumber == 1) {
        outputHTML += `<li class="page-item disabled">
          <a class="page-link" style="color:rgb(39, 36, 36)">Previous</a>
          </li>`;
      } else {
        outputHTML += `<li class="page-item">
        <a class="page-link" href="?page=1" ">Previous</a>
        </li>`;
      }

      if (i !== 1) {
        outputHTML += `
        <li class="page-item disabled"><a class="page-link">...</a></li>
        `;
      }

      for (; i <= Number(paginationNumber) + 2 && i <= countPagination; i++) {
        if (i == paginationNumber) {
          outputHTML += `<li class="page-item active">
            <a class="page-link">${i}</a>
          </li>`;
        } else {
          outputHTML += `
          <li class="page-item">
            <a class="page-link" href="?page=${i}">${i}</a>
          </li>
          `;
        }
        if (i === Number(paginationNumber) + 2 && i < countPagination) {
          outputHTML += `
         <li class="page-item disabled">
            <a class="page-link">...</a>
          </li>
         `;
        }
      }

      if (paginationNumber == countPagination) {
        outputHTML += `<li class="page-item disabled">
          <a class="page-link" style="color:rgb(39, 36, 36)">Last</a>
        </li>`;
      } else {
        outputHTML += `
        <li class="page-item"><a class="page-link" href="?page=${countPagination}">Last</a></li>
      `;
      }

      outputHTML += ` </ul>
      </nav>
  `;
    }

    return outputHTML;
  },
};
