"use client"

import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react"

const Coba = () => {
  const { data: session, status } = useSession()
  const [datasets, setDatasets] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch("api/dataset");
      const data = await response.json();
      setDatasets(data);
    };

    fetchTasks();
    console.log("session: ", status)
  }, []);

  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
          <h1 className="text-3xl font-semibold">Datasets</h1>
          <Link
            className="bg-green-600 hover:bg-opacity-80 text-white rounded-lg px-4 py-2 duration-200"
            href="/create"
          >
            Create New
          </Link>
        </div>

        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Pro</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Unit Model</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Description Component</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Type</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Group</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Serial Number</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Arrival Date</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Customer</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Site</th>
                      <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Finish Re-Test</th>
                      <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {datasets.length > 0 ? (
                      datasets.map((dataset) => (
                        <tr key={dataset.id} className="hover:bg-gray-100">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">{dataset.pro}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{dataset.unit_model}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{dataset.component}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{dataset.type}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{dataset.group}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{dataset.serial_number}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{new Date(dataset.arrival_date).toLocaleDateString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{dataset.customer}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{dataset.site}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{new Date(dataset.finish_retest).toLocaleDateString()}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex w-full justify-between">
                            <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800">Edit</button>
                            <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800">Delete</button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={11} className="py-2 text-center">No data</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Head>
        <title>Task</title>
      </Head>
    </>
  );
};

export default Coba;