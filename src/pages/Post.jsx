import { posts } from "../data";
import { useLocation } from "react-router";
export const Post = () => {
  const locaton = useLocation();
  const path = locaton.pathname.split("/")[2];
  const post = posts.find((p) => p.id.toString() === path);
  return (
    <div className="post">
      <img src={post.img} alt="" className="postImg" />
      <h1 className="postTitle">{post.title}</h1>
      <p className="postDesc">{post.desc}</p>
      <p className="postLongDesc">{post.longDesc}</p>
    </div>
  );
};
