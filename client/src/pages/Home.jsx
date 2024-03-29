import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleCarryBox, faUser,faChartSimple, faHandPeace } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <>
        <Navbar/>
       {/* <!-- Banner section --> */}
    <section id="banner" className="h-screen flex bg-[url('../src/assets/images/bg-banner.jpg')] bg-no-repeat bg-cover bg-center">
        <div className="flex items-center bg-gradient-to-r from-[#dbdbdb] w-full h-full to-[#ffffff09]">
            <div className="flex flex-col  md:w-[40%] md:mx-10 mx-auto w-96">
                <p className="font-secondaryFont text-secondary text-">Réussissons ensemble</p>
                <p className="md:text-5xl text-3xl pb-4 font-thirdFont">Association des Etudiants <span className="text-primary">Sambirano</span> Antsiranana</p>
            {/* <!-- <p className="leading-10 pb-4 md:text-2xl font-secondaryFont">Etre dans une bonne équipe est toujous mieux qu'être seul, préparons une avenir radieux pour la ville du sambirano</p> --> */}
            <div className="flex">
            <a href="#" className="bg-white text-primary rounded-md  p-3 transition ease-in-out duration-300 hover:scale-110 hover:bg-primary hover:text-white">S'inscrire</a>
            </div>
            </div>
        </div>
            
        {/* <!-- <div className="basis-1/2 flex justify-center">
            <div className="flex flex-col justify-center align-middle">
                <img src="../Assets/images/banner-1.svg" width="600px" height="600px" alt="Banner">
            </div>
            
        </div> --> */}
    </section>

    {/* <!-- About association --> */}
    <section
      id="about-section"
      className="bg-primary py-4 flex md:flex-row flex-col px-2 gap-6 font-secondaryFont items-center justify-center"
    >
      <h2 className="md:w-[25%] w-full text-2xl md:text-left text-center text-white">
        Vivez en groupe pour une meilleur experience universitaire
      </h2>
      <p
        className="md:w-[60%] w-full text-secondary md:text-left before:content-[' '] md:before:w-[4px] md:before:h-[10%] md:before:bg-secondary md:before:absolute md:before:left-[27%] md:before:rounded-full text-center"
      >
        Une association qui regroupe tous venant de la ville d'Ambanja qui s'y
        intéresse, ensemble on collabore pour avoir la meilleur résultat
        possible
      </p>
      <div className="flex">
        <a
          href="#"
          className="bg-white text-primary rounded-md p-3 transition ease-in-out duration-300 hover:scale-110 hover:bg-primary hover:text-white"
          >S'inscrire</a
        >
      </div>
    </section>

    {/* <!-- Concepts section --> */}
    <section className="py-16">
      <h1
        className="font-secondaryFont text-center text-black text-4xl border-bottom"
      >
        Concepts
      </h1>
      <div
        className="group flex md:flex-row flex-col w-[80%] gap-10 justify-center mx-auto mt-[50px]"
      >
        <div
          className="text-center bg-black/5 group-hover:blur-sm group-hover:scale-[0.85] duration-500 hover:!blur-none hover:!scale-100 rounded-lg cursor-pointer space-y-3 p-3"
        >
          <FontAwesomeIcon
                  icon={faPeopleCarryBox}
                  size="7x"
                  className="text-secondary"
                />
          <p className="text-primary">Entraide</p>
          <p className="text-black font-secondaryFont">
            Etre dans une association permet à chacun de profiter d'une vie
            communautaire non loin d'une ambiance familiale
          </p>
        </div>
        <div
          className="text-center bg-black/5 group-hover:blur-sm group-hover:scale-[0.85] duration-500 hover:!blur-none hover:!scale-100 rounded-lg cursor-pointer space-y-3 p-3"
        >
          <FontAwesomeIcon
                  icon={faUser}
                  size="7x"
                  className="text-secondary"
                />
          <p className="text-primary">Fraternité</p>
          <p className="text-black font-secondaryFont">
            Etre dans une association permet à chacun de profiter d'une vie
            communautaire non loin d'une ambiance familiale
          </p>
        </div>
        <div
          className="text-center bg-black/5 group-hover:blur-sm group-hover:scale-[0.85] duration-500 hover:!blur-none hover:!scale-100 rounded-lg cursor-pointer space-y-3 p-3"
        >
          <FontAwesomeIcon
                  icon={faChartSimple}
                  size="7x"
                  className="text-secondary"
                />
          <p className="text-primary">Evolutivité</p>
          <p className="text-black font-secondaryFont">
            Etre dans une association permet à chacun de profiter d'une vie
            communautaire non loin d'une ambiance familiale
          </p>
        </div>
        <div
          className="text-center bg-black/5 group-hover:blur-sm group-hover:scale-[0.85] duration-500 hover:!blur-none hover:!scale-100 rounded-lg cursor-pointer space-y-3 p-3"
        >
          <FontAwesomeIcon
                  icon={faHandPeace}
                  size="7x"
                  className="text-secondary"
                />
          <p className="text-primary">Paix</p>
          <p className="text-black font-secondaryFont">
            Etre dans une association permet à chacun de profiter d'une vie
            communautaire non loin d'une ambiance familiale
          </p>
        </div>
      </div>
    </section>

    {/* <!-- Activity section --> */}
    <section
      className="py-5 bg-red-50 w-full min-h-[570px] md:p-24 p-5 relative overflow-hidden block z-10 bg-[url('../src/assets/images/bg-africa.jpg')] bg-cover bg-no-repeat bg-center bg-fixed before:content-[''] before:absolute before:inset-0 before:block before:bg-primary before:opacity-75 before:z-[-5] text-white"
    >
      <div id="back" className="mb-11 rounded-sm m-4">
        <h1 className="font-secondaryFont text-center text-4xl border-bottom">
          Activités
        </h1>
        <p className="text-center font-secondaryFont mt-5">
          Les activités Au sein de l'association
        </p>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-4">
          <div
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          >
            <div className="h-96 w-100">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                src="../src/assets/images/cercle-etude.jpg"
                alt=""
              />
            </div>
            <div
              className="absolute inset-0 group-hover:bg-primary/70 group-hover:from-black/70"
            ></div>
            <div
              className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
            >
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Cercle d'étude
              </h1>
              <p
                className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-secondaryFont"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button
                className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                See More
              </button>
            </div>
          </div>
          <div
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          >
            <div className="h-96 w-100">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                src="../src/assets/images/foot.jpg"
                alt=""
              />
            </div>
            <div
              className="absolute inset-0 group-hover:bg-primary/70 group-hover:from-black/70"
            ></div>
            <div
              className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
            >
              <h1 className="font-dmserif text-3xl font-bold text-white">
                Tournois paques
              </h1>
              <p
                className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-secondaryFont"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button
                className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                See More
              </button>
            </div>
          </div>
          <div
            className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30"
          >
            <div className="h-96 w-100">
              <img
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125"
                src="../src/assets/images/111.jpg"
                alt=""
              />
            </div>
            <div className="absolute inset-0 group-hover:bg-primary/70"></div>
            <div
              className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0"
            >
              <h1 className="text-3xl font-bold text-white">Cours de cuisine</h1>
              <p
                className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 font-secondaryFont"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
                dolore adipisci placeat.
              </p>
              <button
                className="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60"
              >
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* <!-- Photos section --> */}
    <section className="my-10">
      <h1
        className="font-secondaryFont text-center text-black text-4xl border-bottom"
      >
        Photos
      </h1>
      <p className="text-black text-center mt-5 font-secondaryFont">
        Photos souvenir des étudiants au sein de l'association
      </p>
      <div
        className="my-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-[80%]"
      >
        <div className="overflow-hidden hover:rounded-md transition-all">
          <a
            className="example-image-link"
            href="../src/assets/images/photo-1.jpg"
            data-lightbox="example-set"
            ><img
              src="../src/assets/images/photo-1.jpg"
              className="example-image hover:grayscale hover:scale-105 transition-all"
              alt=""
          /></a>
        </div>
        <div className="overflow-hidden hover:rounded-md transition-all">
          <a
            className="example-image-link"
            href="../src/assets/images/photo-1.jpg"
            data-lightbox="example-set"
            ><img
              src="../src/assets/images/photo-1.jpg"
              className="example-image hover:grayscale hover:scale-105 transition-all"
              alt=""
          /></a>
        </div>
        <div className="overflow-hidden hover:rounded-md transition-all">
          <a
            className="example-image-link"
            href="../src/assets/images/photo-1.jpg"
            data-lightbox="example-set"
            ><img
              src="../src/assets/images/photo-1.jpg"
              className="example-image hover:grayscale hover:scale-105 transition-all"
              alt=""
          /></a>
        </div>
        <div className="overflow-hidden hover:rounded-md transition-all">
          <a
            className="example-image-link"
            href="../src/assets/images/photo-1.jpg"
            data-lightbox="example-set"
            ><img
              src="../src/assets/images/photo-1.jpg"
              className="example-image hover:grayscale hover:scale-105 transition-all"
              alt=""
          /></a>
        </div>
        <div className="overflow-hidden hover:rounded-md transition-all">
          <a
            className="example-image-link"
            href="../src/assets/images/photo-1.jpg"
            data-lightbox="example-set"
            ><img
              src="../src/assets/images/photo-1.jpg"
              className="example-image hover:grayscale hover:scale-105 transition-all"
              alt=""
          /></a>
        </div>
      </div>
    </section>
    <Footer/>
        </>
    );
};

export default Home;