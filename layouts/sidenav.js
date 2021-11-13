import { useState } from "react";
import { Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ReplayIcon from "@mui/icons-material/Replay";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import SidenavMideIcon from "../components/sidenav.mid.icon";
import Link from "next/link";

export default function Sidenav() {
  const [current, setCurrent] = useState(0);

  const midIcons = [
    { icon: FormatListBulletedIcon, route: "/" },
    { icon: ReplayIcon, route: "/" },
    { icon: InsertChartIcon, route: "/" },
  ];

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
        {midIcons.map((m, i) => (
          <SidenavMideIcon key={i} Icon={m.icon} isCurrent={current === i} />
        ))}
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
          cursor: "pointer",
        }}
      >
        <Link href="/shopping/cart" passHref>
          <AddShoppingCartIcon sx={{ color: "#fff" }} />
        </Link>
      </Box>
    </Box>
  );
}
