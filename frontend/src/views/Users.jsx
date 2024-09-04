import React from "react";

export default function Users() {
  const usersData = [
    {
      name: "John Doe",
      products: "House Materials",
      type: "admin",
      date: "15-09-2024",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="flex gap-3 lg:gap-10 mt-3">
      <div className="lg:w-[40%]">
        <h1 className="text-3xl tracking-widest">USER PROFILE</h1>
        <form className="mt-4 space-y-2 pr-10">
          <label>Name</label>
          <input
            type="text"
            placeholder="Jane Doe"
            className="w-full  bg-gray-300 px-2 py-2 rounded-sm placeholder:text-black"
          />

          <label className="mt-4">Email Address</label>
          <input
            type="email"
            placeholder="Jane@example.c"
            className="w-full bg-gray-300 px-2 py-2 rounded-sm placeholder:text-black"
          />

          <label className="mt-4"> Password </label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full bg-gray-300 px-2 py-2 rounded-sm placeholder:text-black"
          />

          <label className="mt-4">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm password"
            className="w-full bg-gray-300 px-2 py-2 rounded-sm placeholder:text-black"
          />
          <button className="bg-black text-white px-4 py-2 rounded-sm mt-5 hover:bg-gray-600 ">
            UPDATE
          </button>
        </form>
      </div>
      <div className="lg:w-[60%]">
        <h1 className="text-3xl tracking-widest">ALL USERS</h1>
        <div className="mt-8 flow-root ">
          <div className="-mx-4 -my-2 sm:-mx-6 ">
            <div className="inline-block min-w-full py-2 align-middle">
              <table className="min-w-full border-separate border-spacing-0 ">
                <thead>
                  <tr className="text-start">
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-5 pr-3  text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="sticky text-start top-0 z-10 hidden border-b border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell"
                    >
                      Products
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 hidden border-b text-start border-gray-300 bg-white bg-opacity-75 px-3 py-3.5 text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter lg:table-cell"
                    >
                      Type
                    </th>
                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 text-start bg-white bg-opacity-75 px-3 py-3.5  text-sm font-semibold text-gray-900 backdrop-blur backdrop-filter"
                    >
                      Created At
                    </th>

                    <th
                      scope="col"
                      className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {usersData?.map((data, personIdx) => (
                    <tr key={personIdx} className="text-start cursor-pointer">
                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "whitespace-nowrap uppercase py-4 pl-3 pr-3 text-sm font-medium text-gray-900 sm:pl-6 lg:pl-8"
                        )}
                      >
                        {data?.name}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell uppercase text-start"
                        )}
                      >
                        {data?.products}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell uppercase text-start"
                        )}
                      >
                        {data?.type}
                      </td>
                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "hidden whitespace-nowrap px-3 py-4 text-sm text-gray-500 sm:table-cell uppercase text-start"
                        )}
                      >
                        {data?.date}
                      </td>

                      <td
                        className={classNames(
                          personIdx !== data.length - 1
                            ? "border-b border-gray-200"
                            : "",
                          "relative whitespace-nowrap py-4 pl-3 pr-4 text-start text-sm font-medium sm:pr-8 lg:pr-8 "
                        )}
                      >
                        <a
                          href=""
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          Edit
                        </a>
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
  );
}
