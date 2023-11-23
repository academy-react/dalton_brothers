import { useState, useEffect } from "react";
import { Combobox } from "@headlessui/react";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";

function MyCombobox() {
  const [people, setPeople] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const getCourses = async () => {
    const result = await basicGet("/Home/GetCoursesWithPagination");
    setPeople(result.courseFilterDtos);
  };

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) => {
          return person.title.toLowerCase().includes(query.toLowerCase());
        });
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <Combobox value={selectedPerson} onChange={setSelectedPerson}>
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        displayValue={(person) => person.name}
      />
      <Combobox.Options>
        {filteredPeople.map((person) => (
          <Combobox.Option key={person.courseId} value={person}>
            {person.title}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}

export default MyCombobox;
