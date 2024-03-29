const login = () => {
  return (
    <>
      <div className="flex bg-primary items-center justify-center h-screen">
        <div
          id="login-box"
          className="flex flex-col md:w-[300px] gap-5 bg-white rounded-xl px-7 py-5"
        >
          <h1 className="text-center text-2xl">LOGIN</h1>
          <div className="flex flex-col">
            <label htmlFor="username">Username</label>
            <input
              className="border-b-2 px-2 py-1  focus:rounded-md outline-primary"
              placeholder="Identifiant"
              type="text"
              name="Username"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="border-b-2 px-2 py-1 focus:rounded-md outline-primary"
              placeholder="Mot de passe"
              type="password"
              name="password"
            />
          </div>
          <div className="flex justify-center">
            <button className="blue-btn ">Se connecter</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default login;
