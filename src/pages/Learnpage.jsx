import React from "react";
import { Link } from "react-router-dom";

const Learnpage = () => {
  // Dummy data for now
  const lessonDescription =
    "На этом уроке узнаете как древние люди создавали и пользовались инструментами";
  const videoSrc = "/path-to-your-video.mp4"; // Replace with actual video URL
  const memeSrc = "/path-to-your-meme.jpg"; // Replace with actual image URL

  return (
    <div className="min-h-screen flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-[#d4b575] text-black px-8 flex items-center justify-start">
        <Link to="/home">
          <img src="/logoSimple.svg" alt="Logo" className="h-28 mr-2" />
        </Link>
        <h1 className="text-2xl font-extrabold">6 класс - Палеолит</h1>
      </header>

      {/* Progress Bar */}
      <div className="w-3/4 bg-gray-200 rounded-lg mt-6">
        <div
          className="bg-[#d4b575] text-xs font-medium text-blue-100 text-center p-2.5 leading-none rounded-lg"
          style={{ width: "15%" }}
        >
          15%
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-6 mt-10 w-3/4">
        {/* Left Box (Description) */}
        <div className="bg-[#e8a763] text-white p-6 rounded-lg w-full md:w-3/12">
          <h2 className="text-lg font-semibold mb-2">Инструменты</h2>
          <p>{lessonDescription}</p>
        </div>

        {/* Middle Box (Video) */}
        <div className="flex flex-col rounded-lg w-full md:w-5/12 h-40">
          <video controls className="w-full h-full rounded-lg" src={videoSrc}>
            Your browser does not support the video tag.
          </video>
          <button className="bg-[#e8a763] text-white py-3 px-6 rounded-lg w-full mt-8 hover:bg-[#d78f52]">
            Продолжить
          </button>
        </div>

        {/* Right Box (Meme) */}
        <div className="flex items-center justify-center bg-gray-200 rounded-lg w-full md:w-3/12 h-40">
          <img
            src={memeSrc}
            alt="Meme"
            className="object-contain max-h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Learnpage;
