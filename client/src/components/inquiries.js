import React, { Component, useEffect, useState } from "react";
import { useRef } from "react";
import AdminHome from "./adminHome";

export default function Inquiries({ allInquiries }) {
  //setting state
  const [data, setData] = useState([]);
  // const [limit, setLimit] = useState(5);
  // const [pageCount, setPageCount] = useState(1);
  const currentPage = useRef();

  useEffect(() => {
    currentPage.current = 1;
    getAllInquiries();
    // getPaginatedUsers();
  }, []);

  //fetching all inquiries
  const getAllInquiries = () => {
    fetch("http://localhost:5000/getAllInquiries", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "allInquiries");
        setData(data.data);
      });
  };

  return (
    <>
      <AdminHome />

      <div className="container shadow-md sm:rounded-lg">
        <table className="text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Contact no.
              </th>
              <th scope="col" className="px-6 py-3">
                email address
              </th>
              <th scope="col" className="px-6 py-3">
                address
              </th>
              <th scope="col" className="px-6 py-3">
                Occupation
              </th>
              <th scope="col" className="px-6 py-3">
                Message
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => (
              // <li key={item.id}>{item.name}</li>
              <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {data.fname} {data.mname} {data.lname}
                </th>
                <td className="px-6 py-4">{data.contact}</td>
                <td className="px-6 py-4">{data.email}</td>
                <td className="px-6 py-4">{data.address}</td>
                <td className="px-6 py-4">{data.occupation}</td>
                <td className="px-6 py-4 overflow-auto">{data.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
