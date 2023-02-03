import React from "react";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { ThemeContext } from "..";

function ThemeChange() {
  return (
    <Box>
      <ThemeContext.Consumer>
        {({ theme, changeTheme }) => (
          <Button onClick={changeTheme}>{theme}</Button>
        )}
      </ThemeContext.Consumer>
    </Box>
  );
}

export default ThemeChange;
