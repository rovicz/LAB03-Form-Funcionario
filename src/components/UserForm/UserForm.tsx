export const UserForm = () => {
  return (
    <>
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-[#0A0A0A] dark:border-[#0A0A0A80]">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Registrar Funcionário
              </h1>
              <form className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#00000050] dark:border-[#FFFFFF80] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Insira o nome do funcionário."
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="age"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Idade
                  </label>
                  <input
                    type="date"
                    name="age"
                    id="age"
                    placeholder="••••••••"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#00000050] dark:border-[#FFFFFF80] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="cargo"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Cargo
                  </label>
                  <input
                    type="text"
                    name="cargo"
                    id="cargo"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#00000050] dark:border-[#FFFFFF80] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="O cargo do funcionário."
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="salario"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Salário
                  </label>
                  <input
                    type="number"
                    name="salario"
                    id="salario"
                    className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-[#00000050] dark:border-[#FFFFFF80] dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="O salário do funcionário"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Cadastrar o funcionário
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
