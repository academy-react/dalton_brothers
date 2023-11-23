import { useState, Fragment, useEffect } from "react";
import { Combobox } from "@headlessui/react";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";
// import { CheckIcon } from "@heroicons/react/20/solid";

const people = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

function MyCombobox() {
  const [courseList, setCourseList] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");

  const getCourses = async () => {
    const result = await basicGet("/Home/GetCoursesWithPagination");
    setCourseList(result.courseFilterDtos);
  };

  console.log(selectedPerson);
  const filteredPeople =
    query === ""
      ? courseList
      : courseList.filter((person) => {
          return person.title.toLowerCase().includes(query.toLowerCase());
        });
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <Combobox value={selectedPerson}>
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        displayValue={selectedPerson}
        className={
          "xl:mt-[300px] xl:w-[600px] lg:w-[50vw] lg:mt-[150px] w-96 text-right text-black outline-none font-irSans  relative flex flex-row flex-nowrap h-[65px] mx-auto mt-[100px] border-2 rounded-full py-1 justify-start items-center px-5 gap-3"
        }
      />
      <Combobox.Options
        className={
          "border-2 border-black bg-[white] z-10 w-[600px] h-[500px] mx-auto absolute left-[35%] bottom-[-50%]"
        }
      >
        {filteredPeople.map((el, index) => (
          <Combobox.Option
            key={index}
            value={el.title}
            as={Fragment}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:text-black my-2 border-2 border-red-200"
          >
            {({ active }) => (
              <li
                onClick={(el) => setSelectedPerson(el.target.firstChild.data)}
                className={`${
                  active ? "bg-blue-500 text-white" : "bg-white text-black"
                }`}
              >
                {el.title}
              </li>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
    </Combobox>
  );
}

export default MyCombobox;
