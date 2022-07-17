import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import EmailIcon from "@mui/icons-material/Email";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { Grid, Button, Typography } from "@mui/material";

const style = {
  margin: 5,
};

export default function LeftMenus() {
  return (
    <Grid container sx={style}>
      <Grid item>
        <Button>
          <HomeIcon color="primary" />
          <Typography variant="h6">Home</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button>
          <NotificationsIcon color="primary" />
          <Typography variant="h6">Notifications</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button>
          <EmailIcon color="primary" />
          <Typography variant="h6">Messages</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button>
          <BookmarkIcon color="primary" />
          <Typography variant="h6">Bookmarks</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button>
          <FormatListBulletedIcon color="primary" />
          <Typography variant="h6">Lists</Typography>
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button>
          <PersonIcon color="primary" />
          <Typography variant="h6">Profile</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}
