import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer';

const contact = () => {
    return (
        <>
            <Navbar />
            <section class="flex justify-center items-center mt-14 flex-col md:gap-5 gap-10">
        <h1 class="border-bottom text-3xl">Contactez-nous</h1>
        <p class="px-5 text-center">Envoie nous un retour ici, et nous ferons un grand plaisir de vous répondre.</p>
        <div class="flex md:w-[80%] rounded-md overflow-hidden shadow-xl">
            <div class="bg-[url(../src/assets/images/bg-africa.jpg)] bg-cover hidden md:inline-flex basis-1/2"></div>
            <div class="mt-7  md:basis-1/2 p-5">
                <form action="" method="post" class="grid grid-cols-2 gap-2 *:outline-none *:border-b-2 *:placeholder-gray-300">
                    <input type="text" name="name" class="focus:placeholder-opacity-0" placeholder="Nom"/>
                    <input type="text" name="phone" class="focus:placeholder-opacity-0" placeholder="Phone"/>
                    <input type="text" name="email" class="focus:placeholder-opacity-0" placeholder="email"/>
                    <input type="text" name="website"  class="focus:placeholder-opacity-0" placeholder="website"/>
                    <textarea name="message" id="" cols="" placeholder="Message" rows="5" class="col-span-2 resize-none focus:placeholder-opacity-0"></textarea>
                    <button class="blue-btn">Envoyer</button>
                </form>
            </div>
        </div>
        
    </section>
        <Footer/>
        </>
    );
};

export default contact;