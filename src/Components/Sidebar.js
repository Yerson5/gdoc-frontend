// Importa styled-components
import styled from "styled-components";
import logo from "../Images/GeDOC.jpeg"
import { v } from "../styles/Variables"
import  {LuMenuSquare }  from "react-icons/lu";
import {Link} from "react-router-dom"


// Define el componente SideBar como una función nombrada
export default function SideBar({ sidebarOpen, setSidebarOpen }) {
  const ModSidebaropen =()=>{
    setSidebarOpen(!sidebarOpen);
  }
  return (
    // Utiliza el componente estilizado Container
    <Container isOpen={sidebarOpen}>
      <button className="Sidebarbutton"
      onClick={ModSidebaropen}>
      <LuMenuSquare/>
      </button>
      <div className="Logocontent">
        <div className="imgcontent">
          <img src={logo} alt="imagen"/>
        </div>
        <h2>
          Gestion Documental
        </h2>
      </div>

      {linksArray.map(({icon, label, to})=>(
        <div className="LinkContainer" key={label}>
          <Link to={to}>
            <div className="Linkicon">
              {icon}
              {sidebarOpen &&(
              <span>{label}</span>
              )

              }
            </div>

          </Link>

        </div>
      ))}
    </Container>
  );
}

const linksArray=[{
  label: "Home",
  icon: <LuMenuSquare />,
  to: "/"
} ,

{
  label: "Empleados",
  icon: <LuMenuSquare/>,
  to: "/empleados"
} ,

{
  label: "Documentos",
  icon: <LuMenuSquare/>,
  to: "/vistas"
} ,
{
  label: "Vistas",
  icon: <LuMenuSquare/>,
  to: "/vistas"
} ,

]


// Define el componente estilizado Container fuera del cuerpo del componente
const Container = styled.div`
color: ${(props) => props.theme.text};
background: ${(props) => props.theme.bg};
position: sticky;
padding-top: 10px;
.Sidebarbutton {
    position:absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props)=>props.theme.bgtgderecha};
    box-shadow: 0 0 10px ${(props)=>props.theme.bg3}, 0 0 20 px ${(props)=>props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cusor: pointer;
    transition: all 0.3s;
    transform: ${(isOpen)=>(isOpen?`initial`:`rotate(180deg)`)};
  }
  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: ${v.lgSpacing}; // Corregido el padding-bottom
    .imgcontent {
      display: flex;
      img {
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({ isOpen }) => (isOpen ? `scale(0.7)` : `scale(0.1)`)};
    }
  }

  .LinkContainer{
    margin: 8px 0;
    padding: 0 15%;
    :hover{
      background: &{(props)=>props.theme.bg3};
      
    }
  }
`;


