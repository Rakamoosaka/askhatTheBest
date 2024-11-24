import React from "react";

const HomeMainPart = () => {
  return (
    <div className="flex justify-center items-center gap-44 mt-32">
      <img src="/homepageIcon.svg" alt="homepageIcon" className="w-80" />
      <div className="flex flex-col items-starts space-y-4">
        {/* Heading */}
        <p className=" text-3xl font-semibold ">
          Бесплатный, веселый и <br />
          эффективный способ <br />
          узнать историю <br />
          Казахстана!
        </p>

        {/* Buttons */}
        <a
          href="/signup"
          className="bg-[#C47937] text-center text-white px-6 py-2 rounded-xl w-11/12 text-lg font-semibold shadow-md hover:opacity-90"
        >
          Начать
        </a>
        <a
          href="/login"
          className="text-center border-2 text-[#C47937] px-6 py-2 rounded-xl w-11/12 text-lg font-semibold shadow-md hover:opacity-90"
        >
          У меня есть аккаунт
        </a>
      </div>
    </div>
  );
};

export default HomeMainPart;
