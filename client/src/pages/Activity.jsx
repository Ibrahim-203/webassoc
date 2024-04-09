import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { BsSearch } from "react-icons/bs";

const activity = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col lg:flex-row justify-center gap-2">
        <div className="px-9 mt-3">
          <div className="flex flex-col border border-primary rounded-md p-3 gap-y-2 mt-3" id="actu">
            <div className="flex ">
                <p className="border border-blue-700 text-white  py-1 px-2 rounded-md hover:text-black hover:bg-transparent bg-blue-700 cursor-pointer">
              Sport
                </p>
            </div>
            <div className="flex flex-col md:flex-row  gap-x-2">
                <img src="../src/assets/images/foot.jpg" className="md:w-80 rounded-md w-full md:rounded-s-md " alt="" />
                <div className="">
                    <h1 className="text-4xl">Titre 1</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ad atque doloremque non dolorum facere ullam quaerat. Quis, maxime perferendis.</p>
                </div>
                
            </div>
          </div>
          <div className="flex flex-col border border-primary rounded-md p-3 gap-y-2 mt-3" id="actu">
            <div className="flex ">
                <p className="border border-blue-700 text-white  py-1 px-2 rounded-md hover:text-black hover:bg-transparent bg-blue-700 cursor-pointer">
              Education
                </p>
            </div>
            <div className="flex flex-col md:flex-row  gap-x-2">
                <img src="../src/assets/images/cercle-etude.jpg" className="md:w-80 rounded-md w-full md:rounded-s-md " alt="" />
                <div className="">
                    <h1 className="text-4xl">Titre 2</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ad atque doloremque non dolorum facere ullam quaerat. Quis, maxime perferendis.</p>
                </div>
                
            </div>
          </div>
        </div>
        <div className="filter md:h-40 lg:h-screen h-auto border md:w-full lg:w-[400px] w-full border-l-gray-500 p-3">
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
          <div className="grid grid-cols-3 gap-2"> 
          <button className="outline outline-1 outline-offset-1 outline-blue-500 rounded-md hover:bg-blue-500 hover:text-white hover:outline-none duration-150">Sport</button>
          <button className="outline outline-1 outline-offset-1 outline-blue-500 rounded-md hover:bg-blue-500 hover:text-white hover:outline-none duration-150">Formation</button>
          <button className="outline outline-1 outline-offset-1 outline-blue-500 rounded-md hover:bg-blue-500 hover:text-white hover:outline-none duration-150">Education</button>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default activity;
