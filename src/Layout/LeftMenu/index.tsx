import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Grid, Button, Typography } from "@mui/material";

const style = {
  width: "100%",
  maxWidth: 360,
  margin: 15,
};

export default function LeftMenus() {
  return (
    <Grid container sx={style}>
      <Grid item xs={12}>
        <Button>
          <HomeIcon sx={{ mr: 2 }} color="primary" />
          <Typography variant="h6">Home</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button>
          <NotificationsIcon sx={{ mr: 2 }} color="primary" />
          <Typography variant="h6">Notifications</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button>
          <EmailIcon sx={{ mr: 2 }} color="primary" />
          <Typography variant="h6">Messages</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button>
          <BookmarkIcon sx={{ mr: 2 }} color="primary" />
          <Typography variant="h6">Bookmarks</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button>
          <FormatListBulletedIcon sx={{ mr: 2 }} color="primary" />
          <Typography variant="h6">Lists</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button>
          <PersonIcon sx={{ mr: 2 }} color="primary" />
          <Typography variant="h6">Profile</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
