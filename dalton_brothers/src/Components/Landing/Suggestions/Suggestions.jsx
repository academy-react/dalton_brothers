

const Suggestions = () => {
  return (
    <div>
        <div className="border border-yellow-300 m-auto w-[1500px] h-[550px] mt-[30px] flex flex-row-reverse ">
            <div className="border  border-black w-1/2">
                <h2 className="text-2xl text-end" > پیشنهادات و شکایات </h2>
                <div  className="border border-indigo-400 mt-[15px] m-auto w-[600px] h-[450px] flex flex-col ">
                    <h4 className="text-xl mr-[20px] mt-[15px] text-right"> ایمیل </h4>
                    <div className="border border-gray-500 w-[480px] m-auto h-[50px] min-h-[50px]  mt-[20px] mb-[10px] "></div>
                    <h4 className="text-xl mr-[20px] text-right  mt-[20px] "> متن پیام شما </h4>
                    <textarea className=" mt-[20px] border border-gray-500 min-h-[100px] w-[480px] m-auto"></textarea>
                    <button className="border border-indigo-500 bg-cyan-500 rounded-[15px] w-[130px] h-[50px] m-auto "> ارسال </button>
                </div>
            </div>
            <div className="border  border-red-600 w-1/2"></div>
        </div>
    </div>
  )
}

export  {Suggestions}