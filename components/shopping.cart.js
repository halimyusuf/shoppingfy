import { Box, Container, Input } from "@mui/material";
import Image from "next/image";
import styles from "../styles/shopping.cart.module.css";

export default function ShoppingCart() {
  const active = true;
  return (
    <>
      <Box
        sx={{
          background: "#FFF0DE",
          maxWidth: "100%",
          height: "calc(100vh - 120px)",
          padding: "2vh 0",
        }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "300px" }}>
            <Box
              sx={{
                margin: "0 20px",
                background: "#80485B",
                height: "135px",
                borderRadius: "24px",
                padding: "15px 20px",
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  paddingRight: "25px",
                  transform: "rotate(-15deg)",
                }}
              >
                <Image
                  src="/wine-bottle.png"
                  width="40"
                  height="115"
                  alt="Wine bottle"
                  quality="original"
                />
              </Box>
              <Box>
                <Box sx={{ fontSize: "16px", lineHeight: "20px" }}>
                  Didn’t find what you need?
                </Box>
                <Box
                  sx={{
                    marginTop: "15px",
                    background: "#FFFFFF",
                    borderRadius: "12px",
                    width: "120px",
                    color: "#34333A",
                    padding: "12px 21px",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                >
                  Add item
                </Box>
              </Box>
            </Box>
          </Box>
          <Box>No items</Box>
          <Box sx={{ width: "fit-content" }}>
            <Image
              src="/shopping-cart-human.svg"
              width={300}
              height={150}
              alt="Shopping cart"
            ></Image>
          </Box>
        </Box>
      </Box>
      <Box
        className={`${styles.inputCont} ${active ? styles.inputActive : ""}`}
        sx={{
          height: "120px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#fff",
        }}
      >
        <Box sx={{ position: "relative", width: "350px", maxWidth: "95%" }}>
          <input type="text" placeholder="Enter a name" />
          <Box
            sx={{
              position: "absolute",
              padding: "15px 18px",
              background: active ? "#F9A109" : "#C1C1C4",
              borderRadius: "12px",
              color: "white",
              right: "0",
              top: "0",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            save
          </Box>
        </Box>
      </Box>
    </>
  );
}
