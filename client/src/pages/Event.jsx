import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { BsSearch } from "react-icons/bs";

const event = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center gap-2">
        <div className="px-9 mt-3">
          <div
            className="flex flex-col border border-primary rounded-md p-3 gap-y-2 mt-3"
            id="actu"
          >
            <div className="flex ">
              <p className="border border-blue-700 text-white  py-1 px-2 rounded-md hover:text-black hover:bg-transparent bg-blue-700 cursor-pointer">
                Fêtes
              </p>
            </div>
            <div className="flex flex-col md:flex-row  gap-x-2">
              <img
                src="../src/assets/images/reception.jpg"
                className="md:w-80 rounded-md w-full md:rounded-s-md "
                alt=""
              />
              <div className="">
                <h1 className="text-4xl">Titre 1</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem ad atque doloremque non dolorum facere ullam
                  quaerat. Quis, maxime perferendis.
                </p>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col border border-primary rounded-md p-3 gap-y-2 mt-3"
            id="actu"
          >
            <div className="flex ">
              <p className="border border-blue-700 text-white  py-1 px-2 rounded-md hover:text-black hover:bg-transparent bg-blue-700 cursor-pointer">
                Soutenance
              </p>
            </div>
            <div className="flex flex-col md:flex-row  gap-x-2">
              <img
                src="../src/assets/images/soutenance.jpg"
                className="md:w-80 rounded-md w-full md:rounded-s-md "
                alt=""
              />
              <div className="">
                <h1 className="text-4xl">Titre 2</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem ad atque doloremque non dolorum facere ullam
                  quaerat. Quis, maxime perferendis.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="filter md:h-screen h-auto border md:w-[400px] border-l-gray-500 p-3">
          {/* Search bar */}
          <div className="flex p-2">
            <BsSearch className={`text-black ${open && "mr-2"} `} />
            <input
              type={"search"}
              placeholder="Chercher"
              className={`focus:outline-none border-b focus:border-primary text-black text-base bg-transparent w-full`}
            />
          </div>
          <p className="mb-3 text-xl">Catégories</p>
          <div className="">
            <button className="outline outline-1 outline-offset-1 p-1 mr-2 outline-blue-500 rounded-md hover:bg-blue-500 hover:text-white hover:outline-none duration-150">
              Fêtes
            </button>
            <button className="outline outline-1 outline-offset-1 p-1 mr-2 outline-blue-500 rounded-md hover:bg-blue-500 hover:text-white hover:outline-none duration-150">
              Soutenance
            </button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default event;
