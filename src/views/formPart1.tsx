import { Outlet } from "react-router-dom";
import Part1 from "../components/Form/Part1";

const FormPart1 = () => {
  return (
    <>
      <Part1 />
      <Outlet />
    </>
  );
};

export default FormPart1;
