import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const storeItems = [
  {
    id: 1,
    itemName: "T-Shirt",
    itemDescription: "This is a t-shirt",
    price: 30.99,
  },
  {
    id: 2,
    itemName: "Coffee Mug",
    itemDescription: "This is a mug",
    price: 15.49,
  },
  {
    id: 3,
    itemName: "Coffee Mug",
    itemDescription: "This is a mug",
    price: 15.49,
  },
  {
    id: 4,
    itemName: "Coffee Mug",
    itemDescription: "This is a mug",
    price: 15.49,
  },
  {
    id: 5,
    itemName: "Coffee Mug",
    itemDescription: "This is a mug",
    price: 15.49,
  },
  {
    id: 6,
    itemName: "Coffee Mug",
    itemDescription: "This is a mug",
    price: 15.49,
  },
  {
    id: 7,
    itemName: "Coffee Mug",
    itemDescription: "This is a mug",
    price: 15.49,
  },
  {
    id: 8,
    itemName: "Coffee Mug",
    itemDescription: "This is a mug",
    price: 15.49,
  },
];

export default function StoreHome() {
  return (
    <>
      <Box p={8}>
        <Grid container spacing={3} p="10px">
          {storeItems.map((item) => (
            <Grid key={item.id} item xs={4}>
              <Card>
                <CardHeader title={item.itemName} />
                <CardContent>
                  <p>{item.itemDescription}</p>
                  Price: ${item.price}{" "}
                  <IconButton aria-label="add to shopping cart">
                    <AddShoppingCartIcon />
                  </IconButton>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
