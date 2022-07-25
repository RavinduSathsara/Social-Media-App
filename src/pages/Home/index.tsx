import { Grid, Box } from "@mui/material";
import Container from "@mui/material/Container";
import React, { useEffect, useState } from "react";
import Post from "../../components/post";
import { motion } from "framer-motion";
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
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              <Post userID={post.userId} title={post.title} body={post.body} />
            </motion.div>
          ))}
        </Box>
      </Container>
    </>
  );
};

export default Home;
