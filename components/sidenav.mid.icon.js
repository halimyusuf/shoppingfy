import { Box } from "@mui/material";

export default function SidenavMideIcon({ Icon, isCurrent }) {
  return (
    <Box>
      {isCurrent && (
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
      )}
      <Icon sx={{ fontSize: 27, margin: "10px 0", cursor: "pointer" }} />
    </Box>
  );
}
