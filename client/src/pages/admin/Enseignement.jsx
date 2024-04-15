import { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import { FaEdit, FaTrash,FaPlus  } from "react-icons/fa";
import axios from 'axios';


const Enseignement = () => {

  // Séclaration de variable
  const [listeOfEnseignement, setListOfEnseignement] = useState([])

  useEffect(()=>{
    
    axios.get("http://localhost:3001/enseignement").then((response)=>{
      setListOfEnseignement(response.data);
    })
  },[])

  return (
    <div className="flex text-white font-secondaryFont m-0">
      <Sidebar />
      <div className=" w-[80%] text-black p-7">
        <div className="header flex justify-between ">
          <h1 className="text-3xl font-semibold"> Listes des enseignements</h1>
          <span className="bg-blue-600 rounded-md p-2 cursor-pointer text-white">
            Ajouter une enseignement
          </span>
        </div>
        <div class="flex flex-col">
  <div class="overflow-x-auto  ">
    <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div class="overflow-hidden">
        <table
          class="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead
            class="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
            <tr>
              <th scope="col" class="px-6 py-4">#</th>
              <th scope="col" class="px-6 py-4">Libelle enseignement</th>
              <th scope="col" class="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {listeOfEnseignement.map((enseignement, index)=>(
              <tr
              class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10" key={index}>
              <td class="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
              <td class="whitespace-nowrap px-6 py-4">{enseignement.libelle}</td>
              <td class="whitespace-nowrap px-6 py-4">
              <span className='flex gap-4'>
                  <FaPlus  className='text-blue-300 text-2xl cursor-pointer'/>
                  <FaEdit className='text-orange-300 text-2xl cursor-pointer'/>
                  <FaTrash  className='text-red-600 text-2xl cursor-pointer'/>
                  </span>
              </td>
            </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
  );
};

export default Enseignement;
