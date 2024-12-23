import { RouteObject } from "react-router-dom";
import { HomeView } from "./views/home";
import FormPart1 from "./views/formPart1";
import FormPart2 from "./views/formPart2";
import PersonList from "./components/PersonList";

export function getAppRoutes(): RouteObject[] {
  return [
    {
      index: true,
      element: <HomeView />,
    },
    {
      path: "form/1",
      element: <FormPart1 />,
      children: [
        {
          index: true,
          element: <PersonList />,
        },
      ],
    },
    {
      path: "form/2",
      element: <FormPart2 />, // Assuming FormPart2 is your second form part
      children: [
        {
          index: true,
          element: <PersonList />,
        },
      ],
    },
  ];
}
