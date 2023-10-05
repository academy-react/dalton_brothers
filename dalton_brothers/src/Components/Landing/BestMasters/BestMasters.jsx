import master from "../../../assets/Images/master.png";

const BestMasters = () => {
  return (
    <div className=" w-[77%] mx-auto mt-14  ">
      <h2 className=" font-black text-4xl h-28 flex justify-end items-center font-sha">
        اساتید برتر
      </h2>
      <div className=" w-[97%] mx-auto h-[410px] flex justify-center items-center">
        <picture className=" w-[600px] ">
          <img src={master} alt="BestMasters picture"></img>
        </picture>
      </div>
    </div>
  );
};

export { BestMasters };
