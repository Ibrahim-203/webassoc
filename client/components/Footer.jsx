
const footer = () => {
    return (
        <>
        <footer class=" text-white mt-3">
            <div className="grid md:grid-cols-2 gap-2 lg:grid-cols-4 py-5 bg-black/5 text-black">
            <div className="flex flex-col text-center">
                <p className="text-xl">Adresse</p>
                <p>Lazaret CUR Antsirana, 201</p>
            </div>
            <div className="flex flex-col text-center">
                <p className="text-xl">Contact</p>
                <p>+261 32 xx xxx xx</p>
            </div>
            <div className="flex flex-col text-center">
                <p className="text-xl">Email</p>
                <p>aesa@gmail.com</p>
            </div>
            <div className="flex flex-col text-center">
                <p className="text-xl">Président</p>
                <p>Jean Olivier</p>
            </div>
            </div>
            <div className="bg-primary p-2">
                Copyright 2024 AESA 
            </div>
        </footer>
        </>
    );
};

export default footer;