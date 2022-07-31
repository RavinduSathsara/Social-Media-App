import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function PostLoading() {
  return (
    <Stack spacing={1}>
      <Skeleton
        variant="rectangular"
        sx={{ maxWidth: 700, height: 400, m: 15, borderRadius: 1.5 }}
      />
    </Stack>
  );
}
