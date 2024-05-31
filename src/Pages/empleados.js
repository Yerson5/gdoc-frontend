import '../App.css';
import { useState } from "react"
import Axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import imagenGeDOC from '../Images/GeDOC.jpeg';

function Empleados() {

    const [nombre,setNombre] = useState(""); 
    const [edad,setEdad] = useState(); 
    const [pais,setPais] = useState(""); 
    const [cargo,setCargo] = useState(""); 
    const [anios,setAnios] = useState();
    const [id,setId] = useState();
  
    const [editar,setEditar] = useState(false);
  
    const [empleadosList, setEmpleados] = useState([]);

    const headers = {
      'Content-Type': 'application/json',
    }
       
    const add = ()=>{
      Axios.post("http://18.226.222.188:3001/create",{
        nombre:nombre,
        edad:edad,
        pais:pais,
        cargo:cargo,
        anios:anios
      }, {
        headers: headers
      }).then(()=>{
        getEmpleados();
        limpiarCampos();
  
        Swal.fire({
          title: "<strong>Registor Exitoso</strong>",
          html: "<i>El empleado</i>\t" + nombre + "\t<i>fue registrado de manera exitosa</i>",
          icon: 'success',
          timer: 2000
  
        })
        
      });
    } 
  
  
    const update = ()=>{
      Axios.put("http://18.226.222.188:3001/update",{
        id:id,
        nombre:nombre,
        edad:edad,
        pais:pais,
        cargo:cargo,
        anios:anios
      }).then(()=>{
        getEmpleados();
        limpiarCampos();
  
        Swal.fire({
          title: "<strong>Actualizacion exitosa</strong>",
          html: "<i>El empleado</i>\t" + nombre + "\t<i>fue actualizado de manera exitosa</i>",
          icon: 'success',
          timer: 2000
  
        })
      });
    }   
  
    const deleteEmple = (id)=>{
      Axios.delete(`http://18.226.222.188:3001/delete/${id}`).then(()=>{
        getEmpleados();
        limpiarCampos();
  
        Swal.fire({
          title: "<strong>Eliminacion exitosa</strong>",
          html: "<i>El empleado</i>\t" + nombre + "\t<i>fue eliminado de manera exitosa</i>",
          icon: 'success',
          timer: 2000
  
        })
      });
    }   
  
    const limpiarCampos = ()=>{
      setNombre("");
      setEdad("");
      setPais("");
      setCargo("");
      setAnios("");
    }
  
  
  
    const editarEmpleado = (val)=>{
        setEditar(true);
  
        setNombre(val.nombre);
        setEdad(val.edad);
        setPais(val.pais);
        setCargo(val.cargo);
        setAnios(val.anios);
        setId(val.id);
    } 
  
  
    const getEmpleados = ()=>{
      Axios.get("http://18.226.222.188:3001/empleados").then((response)=>{
        setEmpleados(response.data);
      });
    }
  
  
    getEmpleados();
  
    return (
      <div className='container'>
        <div className="card text-center">
          <div className="card-header">
            GESTION DE EMPLEADOS
          </div>
          <div>
          <img src={imagenGeDOC} alt="GeDOC" />
          </div>
          <div className="card-body">
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Nombre:</span>
              <input type="text" 
              onChange={(event)=>{
                setNombre(event.target.value);
              }}
              className="form-control" value={nombre} placeholder="Ingrese un nombre" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
  
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Edad:</span>
              <input type="number" value={edad}
              onChange={(event)=>{
                setEdad(event.target.value);
              }}
              className="form-control" placeholder="Ingrese una Edad" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
  
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Pais:</span>
              <input type="text" value={pais}
              onChange={(event)=>{
                setPais(event.target.value);
              }}
              className="form-control" placeholder="Ingrese un pais" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
  
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Cargo:</span>
              <input type="text" value={cargo}
              onChange={(event)=>{
                setCargo(event.target.value);
              }}
              className="form-control"  placeholder="Ingrese un cargo" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
  
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">Años de Experiencia:</span>
              <input type="number" value={anios}
              onChange={(event)=>{
                setAnios(event.target.value);
              }}
              className="form-control"  placeholder="Ingrese los años" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
  
          </div>
          <div className="card-footer text-muted">
            {
              editar?
              <div>
              <button className='btn btn-warning m-3' onClick={update}>actualizar</button>
              <button className='btn btn-info m-3' onClick={add}>Cancelar</button>
              </div>
              :<button className='btn btn-success' onClick={add}>Registrar</button>
            }          
          </div>
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Edad</th>
              <th scope="col">Pais</th>
              <th scope="col">Cargo</th>
              <th scope="col">Experiencia</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              empleadosList.map((val,key)=>{
                return <tr key={val.id}>
                  <th>{val.id}</th>
                  <td>{val.nombre}</td>
                  <td>{val.edad}</td>
                  <td>{val.pais}</td>
                  <td>{val.cargo}</td>
                  <td>{val.anios}</td>
                  <td>
                  <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                  <button type="button" 
                  onClick={()=>{
                    editarEmpleado(val);
                  }}
                  className="btn btn-info">Editar</button>  
                  <button type="button" onClick={()=>{deleteEmple(val.id); }} className="btn btn-danger">Eliminar</button>
                  </div>
                  </td>
                </tr>
              })
            }   
          </tbody>
        </table>
      </div>
    );
  }
  export default Empleados;
