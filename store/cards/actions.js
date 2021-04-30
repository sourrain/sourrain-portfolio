import Prismic from "@prismicio/client";

export default {
  loadUsers(context) {
    const client = Prismic.client(
      "https://sourrain-site.cdn.prismic.io/api/v2"
    );
    client.query("").then((res) => {
      console.log(res);
      context.commit("addUser", res.results.title);
    });
  }
};
