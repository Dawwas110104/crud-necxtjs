"use client"

import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { map } from "zod";

const Create = () => {
  const router = useRouter();

  const [datasets, setDatasets] = useState({
    pro: "",
    unit_model: "",
    component: "",
    type: "",
    group: "",
    serial_number: "",
    arrival_date: "",
    customer: "",
    site: "",
    finish_retest: "",
    ro_number: "",
    ro_date: "",
    status: "",
    remark_production: "",
    po: "",
    po_date: "",
  });

  const [types, setTypes] = useState([]);
  const [groups, setGroups] = useState([]);


  const onChange = (e) => {
    setDatasets({ ...datasets, [e.target.name]: e.target.value });
  };
  
  const handleCreateDataset = async () => {
    console.log("datasets => ", datasets)
    const response = await fetch("/api/dataset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datasets),
    });

    if (response.ok) {
      router.push("/");
    } else {
      alert("Failed to create task");
    }
  };

  useEffect(() => {
    const getTypes = async () =>  {
      const response = await fetch("api/getTypes");
      const data = await response.json();
      setTypes(data);
    }

    const getGroups = async () =>  {
      const response = await fetch("api/getGroups");
      const data = await response.json();
      setGroups(data);
    }

    getTypes()
    getGroups()
  }, []);

  return (
    <>
      <div className="container mx-auto mt-8 max-w-[560px]">
        <div className="flex justify-between items-center pb-4 border-b border-dashed border-gray-900 mb-4">
          <h1 className="text-3xl font-semibold">Form</h1>
        </div>

        <form className="mb-20">
          <div className="mb-4">
            <label>Pro</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="text"
              name="pro"
              value={datasets?.pro}
              onChange={onChange}
            />
          </div>

          <div className="mb-4">
            <label>Unit Model</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="text"
              name="unit_model"
              value={datasets?.unit_model}
              onChange={onChange}
            />
          </div>

          <div className="mb-4">
            <label>Description Component</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="text"
              name="component"
              value={datasets?.component}
              onChange={onChange}
            />
          </div>

          <div className="mb-4">
            <label>Type</label>
            <select
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              name="type"
              value={datasets?.type}
              onChange={onChange}
            >
              <option value="">Select a type</option>
              {types.map((type) => (
                <option key={type.id} value={type.name}>
                  {type.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label>Group</label>
            <select
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              name="group"
              value={datasets?.group}
              onChange={onChange}
            >
              <option value="">Select a group</option>
              {groups.map((group) => (
                <option key={group.id} value={group.name}>
                  {group.name}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label>Serial Number</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="text"
              name="serial_number"
              value={datasets?.serial_number}
              onChange={onChange}
            />
          </div>

          <div className="mb-4">
            <label>Arrival Date</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="date"
              name="arrival_date"
              value={datasets?.arrival_date}
              onChange={onChange}
            />
          </div>

          <div className="mb-4">
            <label>Customer</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="text"
              name="customer"
              value={datasets?.customer}
              onChange={onChange}
            />
          </div>

          <div className="mb-4">
            <label>Site</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="text"
              name="site"
              value={datasets?.site}
              onChange={onChange}
            />
          </div>

          <div className="mb-4">
            <label>Finish Re-Test</label>
            <input
              className="mt-1 px-4 py-2 border border-gray-300 rounded-md block w-full"
              type="date"
              name="finish_retest"
              value={datasets?.finish_retest}
              onChange={onChange}
            />
          </div>

          <button
            className="bg-green-600 hover:bg-opacity-80 text-white rounded-lg px-4 py-2 duration-200 w-full"
            type="button"
            onClick={handleCreateDataset}
          >
            Create
          </button>
        </form>
      </div>
      <Head>
        <title>Create Dataset</title>
      </Head>
    </>
  );
};

export default Create;