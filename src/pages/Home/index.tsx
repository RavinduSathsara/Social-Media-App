import { Grid, Box } from "@mui/material";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import Post from "../../components/post";
import { getAllPosts } from "../../services/Posts";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const featchAllPosts = async () => {
    const data = await getAllPosts();
    setPosts(data?.data);
  };
  useEffect(() => {
    featchAllPosts();
  }, []);

  return (
    <>
      <Container
        style={{
          borderLeft: "1px solid lightBlue",
          height: "100%",
        }}
      >
        <Box style={{ maxHeight: "100vh", overflow: "auto" }}>
          {posts.map((post: any) => (
            <Post title={post.title} body={post.body} />
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Home;
