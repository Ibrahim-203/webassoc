import Sidebar from "../../../components/Sidebar";

const adminDashboard = () => {
  
  return (
    <div className="flex text-white font-secondaryFont">
      <Sidebar/>
      <div className="p-7">
        <h1 className="text-3xl font-semibold text-black"> Home Page </h1>
      </div>
    </div>
  );
};

export default adminDashboard;
