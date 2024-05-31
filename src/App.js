import React, { useState } from "react";
import MyRouter from "./routers/router";
import styled, { ThemeProvider } from "styled-components"; // Importa ThemeProvider de styled-components
import { BrowserRouter } from 'react-router-dom';
import SideBar from './Components/Sidebar';
import { Light, Dark } from "./styles/Themes";


export const ThemeContext = React.createContext(null);

function App() {
  const [theme, setTheme] = useState("light");

  const themeStyle = theme === "light" ? Light : Dark;

  const CambiarTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <>
      <ThemeContext.Provider value={{ setTheme, theme }}>
        <ThemeProvider theme={themeStyle}> {/* Usar ThemeProvider */}
          <BrowserRouter>
            <Container className={sidebarOpen ? "sidebarState active" : ""}>
                  <SideBar sidebarOpen={sidebarOpen}setSidebarOpen={setSidebarOpen}/>                
                  <MyRouter />
            </Container>
          </BrowserRouter>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

const Container = styled.div`

  display:grid;
  grid-template-columns:90px auto;
  background:${({ theme }) => theme.bgtotal};
  &.active{
    grid-template-columns:455px auto;

  }

`;

export default App;
