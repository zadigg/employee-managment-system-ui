import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AddEmployee from "./components/CRUD/AddEmployee";
import EmployeeList from "./components/CRUD/EmployeeList";
import UpdateEmployee from "./components/CRUD/UpdateEmployee";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<EmployeeList />}></Route>
          <Route path="/" element={<EmployeeList />}></Route>\
          <Route path="/employeeList" element={<EmployeeList />}></Route>
          <Route path="/addEmployee" element={<AddEmployee />}></Route>
          <Route path="/editEmployee/:id" element={<UpdateEmployee />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
