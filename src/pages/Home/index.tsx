import { Grid, Box } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import Post from "../../components/post";

const Home = () => {
  return (
    <>
      <Container
        style={{
          borderLeft: "1px solid lightBlue",
          height: "100%",
        }}
      >
        <Box style={{ maxHeight: "100vh", overflow: "auto" }}>
          <Post />
        </Box>
      </Container>
    </>
  );
};

export default Home;
