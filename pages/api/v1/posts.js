import axios from "axios";
export default async (req, res) => {
  switch (req.method) {
    case "GET":
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = response.data;
      return res.json(posts.slice(0, 20));
    case "POST":
      const postData = JSON.parse(req.body);
      return res.json({ postData });
    case "DELETE":
      break;
    case "PATCH":
      break;
    default:
      break;
  }
};
