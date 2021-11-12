import { Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ReplayIcon from "@mui/icons-material/Replay";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";

export default function Sidenav() {
  const [current, setCurrent] = useState(0);

  return (
    <Box
      sx={{
        position: "fixed",
        backgroundColor: "#fff",
        height: "100vh",
        width: "65px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 0",
        flexDirection: "column",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          background: "#3F3D56",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FavoriteIcon sx={{ color: "#F9A109" }} />
      </Box>
      <Box sx={{ alignContent: "center" }}>
        <Box>
          <Box
            sx={{
              position: "absolute",
              left: 0,
              width: "6px",
              height: "45.98px",
              background: "#F9A109",
              borderRadius: "0px 4px 4px 0px",
            }}
          ></Box>
          <FormatListBulletedIcon sx={{ fontSize: 27, margin: "10px 0" }} />
        </Box>
        <Box>
          <ReplayIcon sx={{ fontSize: 27, margin: "10px 0" }} />
        </Box>
        <Box>
          <InsertChartIcon sx={{ fontSize: 27, margin: "10px 0" }} />
        </Box>
      </Box>
      <Box
        sx={{
          background: "#F9A109",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AddShoppingCartIcon sx={{ color: "#fff" }} />
      </Box>
    </Box>
  );
}
