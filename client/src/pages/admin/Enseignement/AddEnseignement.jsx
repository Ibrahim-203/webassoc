import { useState } from "react";
import Sidebar from "../../../../components/Sidebar";
import { useFormik } from "formik";
import axios from "axios";
const AddEnseignement = () => {
    const [enseignement, setEnseignement] = useState({})
  const formik = useFormik({
    initialValues: {
        libelle: "",
    },
    onChange:(values)=>{
        console.log(values);
    },
    onSubmit: (values) => {
      setEnseignement(values)
      axios.post("http://localhost:3001/enseignement",enseignement).then((response)=>{
        alert(response.data)
      })
    },
  });

  return (
    <div className="flex text-white font-secondaryFont m-0">
      <Sidebar />
      <div className=" w-[80%] text-black p-7">
        
          <h1 className="text-2xl">Ajouter un enseignement</h1>
          <div className="w-72 flex p-3 rounded-md border">
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="libelle">Libelle enseignement</label>
                <input
                  type="text"
                  name="libelle"
                  className="border-b-2 outline-none focus:border-b-primary duration-150"
                  onChange={formik.handleChange}
                  value={formik.values.libelle}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 rounded-md text-white p-1 mt-3"
              >
                Enregistrer
              </button>
            </form>
          </div>

        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 bg-white font-medium dark:border-white/10 dark:bg-body-dark">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Libelle enseignement
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody></tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEnseignement;
