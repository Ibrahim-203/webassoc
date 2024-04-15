import React, { useEffect, useState } from 'react';
import Sidebar from "../../../../components/Sidebar";
import axios from 'axios';
import { FaEdit, FaTrash  } from "react-icons/fa";



const User = () => {
  const [listOfUsers,setListOfUsers] = useState([])
  useEffect(()=>{
    
    axios.get("http://localhost:3001/auth").then((response)=>{
      setListOfUsers(response.data);
    })
  },[])
  return (
    <div className="flex text-white font-secondaryFont">
      <Sidebar />
      <div className="p-7 w-[100%] text-black">
        <div className="header flex justify-between ">
          <h1 className="text-3xl font-semibold"> Listes des Utilisateur</h1>
          <span className="bg-blue-600 rounded-md p-2 cursor-pointer text-white">
            Ajouter un Utilisateur
          </span>
        </div>
        <div className="flex flex-col">
  <div className="overflow-x-auto ">
    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table
          className="min-w-full text-left text-sm font-light text-surface dark:text-white">
          <thead
            className="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
            <tr>
              <th scope="col" className="px-6 py-4">#</th>
              <th scope="col" className="px-6 py-4">identifiant</th>
              <th scope="col" className="px-6 py-4">Rôle</th>
              <th scope="col" className="px-6 py-4">Action</th>
            </tr>
          </thead>
          <tbody>
          {listOfUsers.map((user,index)=>(
                <tr
                className="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10" key={user.id}>
                <td className="whitespace-nowrap px-6 py-4 font-medium">{index+1}</td>
                <td className="whitespace-nowrap px-6 py-4">{user.username}</td>
                <td className="whitespace-nowrap px-6 py-4">{user.role}</td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span className='flex gap-4'>
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

export default User;