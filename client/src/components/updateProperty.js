import React, { useState } from "react";

export const UpdateProperty = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const getPropertyById = () => {
    fetch(`http://localhost:5000/getProperty/${searchTerm}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "propertyData");
        setData(data.data);
      });
  };

  return (
    <>
      {/* <AdminHome /> */}

      <div className=" flex justify-center pt-5 pb-5  ">
        <div className="w-1/2  p-6 bg-white border border-gold rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <h1 className="flex justify-center text-lg">
            Update Property Information
          </h1>
          <div className="flex">
            <label
              htmlFor="first_name"
              className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Property ID to Update
            </label>
            <input
              type="text"
              id="first_name"
              className="ml-6 mr-6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
            />
            <button
              onClick={getPropertyById}
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search Property
            </button>
          </div>
          {data.map((property, index) => (
            <div key={index}>
              <form className="flex-wrap w-full">
                {/* <form onSubmit={handleSubmit} className="flex-wrap w-full"> */}
                <div className="grid gap-6 mb-6 md:grid-cols-2"></div>

                <label
                  htmlFor="PropertyType"
                  className="mt-4 block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Property Type
                </label>
                <select
                  defaultValue=""
                  id="countries"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  {/* onChange={(e) => setPropertytype(e.target.value)} */}
                  <option disabled>Choose Type</option>
                  {/* <option value="PS">Preselling</option> */}
                  <option value="RFO">Ready For Occupancy</option>
                </select>

                <div>
                  <label
                    htmlFor="first_name"
                    className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Selling Price
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    value={property.sellingprice}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // onChange={(e) => setSellingprice(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    value={property.description}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Bedrooms
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    value={property.bedrooms}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // onChange={(e) => setBedrooms(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="last_name"
                    className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Bathrooms
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    value={property.bathrooms}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // onChange={(e) => setBathrooms(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Car Parks
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={property.carparks}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // onChange={(e) => setCarparks(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block mb-1 pt-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Floor Area
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={property.floorarea}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    // onChange={(e) => setFloorarea(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Home Features
                  </label>
                  <textarea
                    value={property.homefeatures}
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Please separate each features using a comma"
                    // onChange={(e) => setHomefeatures(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Neighborhood Features
                  </label>
                  <textarea
                    value={property.neighborhoodfeatures}
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Please separate each features using a comma"
                    // onChange={(e) => setNeighborhoodfeatures(e.target.value)}
                  ></textarea>
                </div>
                <h2 className="flex pt-3 text-sm ">Nearby Establishments</h2>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Food Hubs
                  </label>
                  <textarea
                    value={property.foodhubs}
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Please separate each features using a comma"
                    // onChange={(e) => setFoodhubs(e.target.value)}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Grocery
                  </label>
                  <textarea
                    value={property.grocery}
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Please separate each features using a comma"
                    // onChange={(e) => setGrocery(e.target.value)}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Gym
                  </label>
                  <textarea
                    value={property.gym}
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Please separate each features using a comma"
                    // onChange={(e) => setGym(e.target.value)}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    School
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Please separate each features using a comma"
                    // onChange={(e) => setSchool(e.target.value)}
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Mall/Store
                  </label>
                  <textarea
                    value={property.store}
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Please separate each features using a comma"
                    // onChange={(e) => setStore(e.target.value)}
                  ></textarea>

                  <label
                    htmlFor="message"
                    className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Hospital
                  </label>
                  <textarea
                    value={property.hospital}
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Please separate each features using a comma"
                    // onChange={(e) => setHospital(e.target.value)}
                  ></textarea>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block pt-3 mb-1 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Neighborhood Vicinity
                  </label>
                  <textarea
                    value={property.neighborhoodvicinity}
                    id="message"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=" Please separate each features using a comma"
                    // onChange={(e) => setNeighborhoodvicinity(e.target.value)}
                  ></textarea>
                </div>

                {/* <div className="pt-4 pb-3 flex items-center justify-center w-full">
              <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                  <p className="mb-1 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">You can upload up to 5 images.</p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
              </label>
          </div>  */}

                <button
                  type="submit"
                  className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Update
                </button>
              </form>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
