import React, { useEffect, useState } from "react";
import { Grid, Box, Button } from "@mui/material";
import Container from "@mui/material/Container";
import Post from "../../components/post";
import { getAllPosts } from "../../services/Posts";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [show, setShow] = useState(10);

  const featchAllPosts = async () => {
    const data = await getAllPosts();
    setPosts(data?.data);
  };
  useEffect(() => {
    featchAllPosts();
  }, []);

  type PostProps = {
    userId: number;
    title: string;
    body: string;
  };

  return (
    <>
      <Container
        style={{
          borderLeft: "1px solid lightBlue",
          height: "100%",
        }}
      >
        <Box style={{ maxHeight: "100vh", overflow: "auto" }}>
          {posts.slice(0, show).map((post: PostProps) => (
            <Post userID={post.userId} title={post.title} body={post.body} />
          ))}
          <Button
            onClick={() => {
              setShow(show + 10);
            }}
            style={{ marginLeft: 480, marginBottom: 80 }}
          >
            show more
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Home;
