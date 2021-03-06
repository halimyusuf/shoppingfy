import { Box } from "@mui/material";
import ShoppingCart from "../../../components/shopping.cart";

export default function MainShoppingCart() {
  return (
    <Box sx={{ width: "350px", maxWidth: "calc(100vw - 65px)" }}>
      <ShoppingCart />
    </Box>
  );
}
