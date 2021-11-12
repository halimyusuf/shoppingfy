import Sidenav from "./sidenav";
import { Box } from "@mui/material";

export default function DefaultLayout({ children }) {
  return (
    <Box sx={{ display: "flex" }}>
      <div>
        <Sidenav />
      </div>
      <Box sx={{ marginLeft: "65px" }}> {children} </Box>
    </Box>
  );
}
