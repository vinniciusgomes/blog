import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./styles/theme";

import { Container, Title, Subtitle, User, SwitchButton } from "./styles";

function Example() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <Container>
        <Title>{theme} mode</Title>
        <SwitchButton onClick={() => toggleTheme()}>
          {theme === "dark" ? (
            <img src="./assets/sun.svg" />
          ) : (
            <img src="./assets/moon.svg" />
          )}
        </SwitchButton>
        <Subtitle className="mt-4">
          by:
          <User
            href="https://github.com/vinniciusgomes"
            target="_blank"
            className="ml-2"
          >
            @vinniciusgomes
          </User>
        </Subtitle>
      </Container>
    </ThemeProvider>
  );
}

export default Example;
