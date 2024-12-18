import { Outlet } from "react-router-dom";
import Part2 from "../components/Form/Part2";

const FormPart1 = () => {
  return (
    <>
      <Part2 />
      <Outlet />
    </>
  );
};

export default FormPart1;
