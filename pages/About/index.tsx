import { useTheme } from "@emotion/react";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@mui/material";
import h1 from "@mui/material";

export default function AboutHome() {
  const theme = useTheme();
  return (
    <Card sx={{ margin: "12px" }}>
      <CardHeader title="About Us" />
      <CardContent>
        <Typography>About Us</Typography>
      </CardContent>
    </Card>
  );
}
