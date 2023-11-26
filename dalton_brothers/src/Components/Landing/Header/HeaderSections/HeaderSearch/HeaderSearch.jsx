import { useState, Fragment, useEffect } from "react";
import { useNavigate } from "react-router";
import { Combobox, Transition } from "@headlessui/react";
import { basicGet } from "../../../../../Core/Services/api/course/courseList/courseList";

function MyCombobox() {
  const [courseList, setCourseList] = useState([]);
  const [articleList, setArticleList] = useState([]);
  const [selectedPerson, setSelectedPerson] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const getCourses = async () => {
    const result = await basicGet("/Home/GetCoursesWithPagination");
    setCourseList(result.courseFilterDtos);
  };
  const getArticles = async () => {
    const result = await basicGet("/News?PageNumber=1&RowsOfPage=10");
    const response = result.news;
    // console.log(result.news);
    setArticleList(response);
  };

  const filteredPeople =
    query === ""
      ? []
      : courseList.filter((person) => {
          return person.title.toLowerCase().includes(query.toLowerCase());
        });
  const filteredArticles =
    query === ""
      ? []
      : articleList.filter((person) => {
          return person.title.toLowerCase().includes(query.toLowerCase());
        });

  const transfer = (title) => {
    // for course
    const selectedCourse = filteredPeople.find((el) => el.title === title);
    selectedCourse !== undefined &&
      navigate(`/courseDetail/${selectedCourse.courseId}`);
    // for news
    const selectedNews = filteredArticles.find((el) => el.title === title);
    selectedNews !== undefined && navigate(`/newsDetail/${selectedNews.id}`);
  };
  useEffect(() => {
    getCourses();
    getArticles();
  }, []);
  return (
    <Combobox
      value={selectedPerson}
      as={"div"}
      className="xl:mt-[300px] xl:w-[604px] lg:w-[50vw] lg:mt-[150px] mt-[100px] min-[400px]:w-96 w-[90%] mx-auto h-[65px] text-right text-black font-irSans relative flex flex-row-reverse flex-wrap "
    >
      <Combobox.Input
        onChange={(event) => setQuery(event.target.value)}
        displayValue={selectedPerson}
        className={
          "w-full  outline-none h-[65px] border-2 rounded-full py-1 flex justify-start items-center px-5 gap-3 mb-3"
        }
        placeholder="دِنبال چی دَری ..."
      />
      {/* <Transition
        enter="transition-all duration-200"
        enterFrom="absolute bottom-[-55%] left-[34.5%]"
        enterTo="absolute bottom-[-47%] left-[34.5%] "
        leave="transition-all duration-200"
        leaveFrom="absolute bottom-[-47%] left-[34.5%] "
        leaveTo="absolute bottom-[-55%] left-[34.5%]"
      > */}
      <Combobox.Options
        className={
          "border-2 border-r-0 bg-white z-50 w-[50%] h-[500px] mx-auto rounded-3xl rounded-r-none overflow-scroll"
        }
      >
        <h1 className="w-full flex justify-start pr-[60px] items-center font-irSBold py-[20px] bg-[#fcbf49] text-white font-bold text-xl">
          دوره ها
        </h1>
        {filteredPeople.map((el, index) => (
          <Combobox.Option
            key={index}
            value={el.title}
            as={Fragment}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:text-black transition-all duration-300 relative"
          >
            {({ active }) => (
              <li
                onClick={(el) => {
                  setSelectedPerson(el.target.firstChild.data);
                  setQuery(el.target.firstChild.data);
                  transfer(el.target.firstChild.data);
                }}
                className={`${
                  active
                    ? "bg-[#f1f5f9] text-black h-[60px] flex items-center justify-start pr-8 font-irSBold"
                    : " text-black h-[60px] flex items-center justify-start pr-5 font-irSBold"
                }`}
              >
                {el.title}
              </li>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
      {/* </Transition> */}
      {/* <Transition
        enter="transition-all duration-200"
        enterFrom="absolute bottom-[-55%] left-[50%]"
        enterTo="absolute bottom-[-47%] left-[50%] "
        leave="transition-all duration-200"
        leaveFrom="absolute bottom-[-47%] left-[50%] "
        leaveTo="absolute bottom-[-55%] left-[50%]"
      > */}
      <Combobox.Options
        className={
          "border-2 border-l-0 bg-white z-50 w-[50%] h-[500px] mx-auto  rounded-3xl rounded-l-none overflow-scroll"
        }
      >
        <h1 className="w-full flex justify-start pr-[60px] items-center font-irSBold py-[20px] bg-[#fcbf49] text-white font-bold text-xl">
          اخبار
        </h1>
        {filteredArticles.map((el, index) => (
          <Combobox.Option
            key={index}
            value={el.title}
            as={Fragment}
            className="ui-active:bg-blue-500 ui-active:text-white ui-not-active:text-black transition-all duration-200"
          >
            {({ active }) => (
              <li
                onClick={(el) => {
                  setSelectedPerson(el.target.firstChild.data);
                  setQuery(el.target.firstChild.data);
                  transfer(el.target.firstChild.data);
                }}
                className={`${
                  active
                    ? "bg-[#f1f5f9] text-black pr-8 h-[60px] flex items-center justify-start font-irSBold"
                    : " text-black h-[60px] flex items-center justify-start pr-5 font-irSBold"
                }`}
              >
                {el.title}
              </li>
            )}
          </Combobox.Option>
        ))}
      </Combobox.Options>
      {/* </Transition> */}
    </Combobox>
  );
}

export default MyCombobox;
