import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { ThemeContext } from "..";

function ThemeChange() {
  return (
    <Box
      sx={{
        background: "#f3ece7",
        textAlign: "center",
      }}
    >
      <ThemeContext.Consumer>
        {({ theme, changeTheme }) => (
          <Button
            sx={{
              fontSize: "15px",
            }}
            onClick={changeTheme}
          >
            {theme}
          </Button>
        )}
      </ThemeContext.Consumer>
    </Box>
  );
}

export default ThemeChange;
