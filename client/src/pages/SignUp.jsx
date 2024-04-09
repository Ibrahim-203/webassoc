import React from 'react';
 import {useFormik} from 'formik'

const SignUp = () => {
    const formik =  useFormik({
        initialValues: {
            name:'',
            surname:'',
            date_naiss:''
        },
        onSubmit : values =>{
            console.log(values);
        }
    }
    )
    return (
        <>
            <section className="min-h-screen bg-[url(../src/assets/images/111.jpg)] bg-no-repeat bg-cover font-secondaryFont flex items-center justify-center">
                <div className="p-3 bg-white backdrop-blur-lg rounded-md w-[80%] ">
                    <p className='text-center text-3xl mb-5'>Inscription</p>
                    <form onSubmit={formik.handleSubmit}>
                    <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-5 mg:gap-y-10'>
                    <div className='flex flex-col'>
                        <label htmlFor="name">Nom</label>
                        <input type="text" name='name' className='border-b-2 outline-none focus:border-b-primary duration-150' onChange={formik.handleChange} value={formik.values.name}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="surname">Prénom</label>
                        <input type="text" name='surname' className='border-b-2 outline-none focus:border-b-primary duration-150' onChange={formik.handleChange} value={formik.values.surname}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="date_naiss">Date de naissance</label>
                        <input type="date" name='date_naiss' className='border-b-2 focus:outline-none focus:border-b-primary' onChange={formik.handleChange} value={formik.values.date_naiss}/>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="cin">Numéro CIN</label>
                        <input type="text" name='cin' className='border-b-2 focus:outline-none focus:border-b-primary' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="Cartier">Cartier</label>
                        <input type="text" name='Cartier' className='border-b-2 focus:outline-none focus:border-b-primary' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="college">Collège antécédant</label>
                        <input type="text" name='college' className='border-b-2 focus:outline-none focus:border-b-primary' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="annee_bacc">Année du bacc</label>
                        <input type="text" name='college' className='border-b-2 focus:outline-none focus:border-b-primary' />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="annee_bacc">Enseignement</label>
                        <select type="text" name='enseignement' className='border-b-2 focus:outline-none focus:border-b-primary p-1 rounded-md'>
                            <option value="tech" className='font-secondaryFont'>Technique</option>
                            <option value="general">Général</option>
                        </select>
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="annee_bacc">Série du bacc</label>
                        <select type="text" name='enseignement' className='border-b-2 focus:outline-none focus:border-b-primary p-1 rounded-md'>
                            <option value="1" >A1</option>
                            <option value="2">A2</option>
                            <option value="3">D</option>
                        </select>
                    </div>
                    <button type="submit" className='bg-blue-600 rounded-md text-white'>Enregistrer</button>
                    </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default SignUp