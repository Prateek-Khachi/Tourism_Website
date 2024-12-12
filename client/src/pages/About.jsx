import aboutImg from "../assets/images/about_img.png";
import { FaExternalLinkAlt } from "react-icons/fa";

const About = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[90%] max-w-2xl rounded-xl shadow-xl p-3 flex flex-col gap-3">
        <h1 className="text-4xl text-center font-semibold">About</h1>
        <div className="w-max flex flex-col">
          <img src={aboutImg} className="w-40 h-40" alt="Image" />
          <h1 className="text-xl font-semibold text-center">Prateek Khachi</h1>
        </div>
        <ul className="list-disc w-max mx-5">
          <li className="hover:underline hover:text-blue-600 cursor-pointer">
            <a
              className="flex items-center gap-2"
              href="https://github.com/singhprince9875"
              target="_blank"
            >
              Git-Hub <FaExternalLinkAlt />
            </a>
          </li>
          <li className="hover:underline hover:text-blue-600 cursor-pointer">
            <a
              className="flex items-center gap-2"
              href="https://linkedin.com/in/"
              target="_blank"
            >
              LinkedIn <FaExternalLinkAlt />
            </a>
          </li>
        </ul>
        <p>
        Welcome to our travel and booking website, your ultimate destination for seamless and enjoyable travel planning. Whether you’re looking to explore new destinations or revisit your favorite spots, our platform ensures a hassle-free booking experience tailored to your needs. From flights to hotels, and exclusive tour packages to personalized itineraries, we’ve got it all covered.

Discover a wide range of options, compare prices, and book in just a few clicks. Our user-friendly interface and secure payment gateway make your travel planning not only easy but also reliable. Stay updated with real-time availability and special deals to make the most of your journeys.

With our dedicated customer support team, your queries and concerns are addressed promptly, ensuring a stress-free experience from start to finish. Let us help you turn your travel dreams into reality. Book your next adventure with us today and embark on unforgettable journeys with ease.


        </p>
      </div>
    </div>
  );
};

export default About;
