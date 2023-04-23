import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import { PostContainer } from "./styles";
import ReactMarkdown from "react-markdown";
import { Menu } from "./Menu";

interface Post {
  title: string;
  body: string;
  created_at: string;
  comments: number;
  user: {
    login: string;
  };
}

export function Post() {
  const { id } = useParams();

  const [post, setPost] = useState<Post | undefined>();

  async function getUserPost() {
    const response = await api.get(
      `https://api.github.com/repos/rafaella-gomes/github-blog/issues/${id}`
    );

    setPost(response.data);
  }

  useEffect(() => {
    getUserPost();
  }, []);

  return (
    <PostContainer>
      <Menu
        title={post?.title}
        createdAt={post?.created_at}
        comments={post?.comments}
        login={post?.user.login}
      />
      <ReactMarkdown className="container">{post?.body || ""}</ReactMarkdown>
    </PostContainer>
  );
}
