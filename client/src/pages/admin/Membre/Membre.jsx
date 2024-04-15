import Sidebar from "../../../../components/Sidebar";

const Membre = () => {
  return (
    <div className="flex text-white font-secondaryFont m-0">
      <Sidebar />
      <div className=" w-[80%] text-black p-7">
        <div className="header flex justify-between ">
          <h1 className="text-3xl font-semibold"> Listes des membres</h1>
          <span className="bg-blue-600 rounded-md p-2 cursor-pointer text-white">
            Ajouter un membre
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
              <th scope="col" class="px-6 py-4">Nom</th>
              <th scope="col" class="px-6 py-4">Prénom</th>
              <th scope="col" class="px-6 py-4">Série</th>
              <th scope="col" class="px-6 py-4">Cartier</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10">
              <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
              <td class="whitespace-nowrap px-6 py-4">Mark</td>
              <td class="whitespace-nowrap px-6 py-4">Otto</td>
              <td class="whitespace-nowrap px-6 py-4">@mdo</td>
              <td class="whitespace-nowrap px-6 py-4">@mdo</td>
            </tr>
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

export default Membre;
