import List from "@mui/material/List";
import useReadPerson from "../hooks/useReadPerson";
import { PersonDto } from "../api/customers";
import PersonItem from "./PersonItem";

const PersonList = () => {
  const { personList, isLoading, isError } = useReadPerson();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {personList &&
        personList
          .slice(0)
          .reverse()
          .map(
            (person: PersonDto, index: number): JSX.Element => (
              <PersonItem key={person.firstName + index} person={person} />
            )
          )}
    </List>
  );
};

export default PersonList;
