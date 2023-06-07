import { Box, Card, CardContent, Grid } from "@mui/material";

export default function StoreHome() {
  return (
    <>
      <Box p={8}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Card>
              <CardContent>Word of the day</CardContent>
            </Card>
          </Grid>
          <Grid item xs={2}>
            <Card>
              <CardContent>Word of the day</CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
