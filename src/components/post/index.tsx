import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { motion, AnimatePresence } from "framer-motion";
import { getUser } from "../../services/Users";
import PostLoading from "../PostLoading";
import { Grid } from "@mui/material";

type PostProps = {
  userID: number;
  title: string;
  body: string;
};

export default function Post({ title, body, userID }: PostProps) {
  interface IUser {
    name: string;
    website: string;
  }

  const [user, setUser] = React.useState<IUser>();
  const [loading, setLoading] = React.useState(true);

  const fetchUser = async (id: number) => {
    try {
      const result = await getUser(id);
      setUser(result?.data);
      setTimeout(() => {
        setLoading(false);
      }, 1800);
    } catch (error) {}
  };

  React.useEffect(() => {
    fetchUser(userID);
  });

  return (
    <Grid>
      {loading ? (
        <PostLoading />
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <Card sx={{ maxWidth: "85%", m: "5%" }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {user?.name.charAt(0)}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={user?.name}
              subheader={user?.website}
            />
            <CardMedia
              component="img"
              height="194"
              image="https://images.unsplash.com/photo-1593982616631-f47799c829b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="Paella dish"
            />
            <CardContent>
              <Typography paragraph fontWeight="fontWeightMedium">
                {title}
              </Typography>
              <Typography paragraph>{body}</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </AnimatePresence>
      )}
    </Grid>
  );
}
