import React from "react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import { STORE } from "../../data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { LuTruck } from "react-icons/lu";

import Filters from "./Filters";
import ActiveModal from "../../components/Modal/ActiveModal";

const Serviceable = () => {
  const navigate=useNavigate();
  const addStateHandler=()=>{
    navigate("/addstate")
  }
  const importHandler = () => {
    navigate("/importcsv");
  };
  const columnHelper = createColumnHelper();

  const [showActiveModal, setActiveModal] = useState(false);

  const [check, setCheck] = useState(true);

  const isCheck=()=>{

    const elements = document.getElementsByClassName("rowCheck1");

    for(var i=0;i<elements.length;i++){
        elements[i].checked=document.getElementById("headerCheck").checked;
    }

  }
  const columns = [
    columnHelper.accessor("checkBox", {
      cell: (info) => (
        <label>
          <input type="checkbox" id="rowCheck" className="rowCheck1"/>
        </label>
      ),
      header: (
        <label>
          <input type="checkbox" id="headerCheck" onClick={isCheck}/>
        </label>
      ),
    }),
    columnHelper.accessor("stateName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "State Name",
    }),

    columnHelper.accessor("active", {
      cell: (info) => (
        <button onClick={()=>setActiveModal(true)} className="active-button bg-primary-button text-white rounded-3xl h-8 w-16">
          <div className="text-sm text-primary-textcolor">{info.getValue()}</div>
        </button>
      ),
      header: "Active/In-Active",
    }),
    columnHelper.accessor("status", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Status",
    }),
    columnHelper.accessor("action", {
      cell: (info) => (
        <span className="actions">
          <MdOutlineDeleteOutline className="text-red-600 text-lg" />
        </span>
      ),
      header: "Action",
    }),
  ];
  const [data] = useState(() => [...STORE]);

  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <div className="bg-white m-9 border-2">
      <section className="flex flex-col">
        <div className="p-4 mr-5 flex justify-end">
          <div className="px-3">
            <a onClick={addStateHandler}>
              <button className="active-button bg-primary-button text-black rounded-md h-10 w-20">
                <div className="text-sm text-primary-textcolor ">Add State</div>
              </button>
            </a>
          </div>
          <a onClick={importHandler}>
            <button className="active-button bg-primary-button text-black rounded-md h-10 w-20  ">
              <div className="text-sm text-primary-textcolor ">Import CSV</div>
            </button>
          </a>
        </div>
        <hr className="border-gray-300 border mb-6" />
        <div className="main-container m-5 flex flex-col">
          <div className="flex justify-end">
            <Filters
              columnFilters={columnFilters}
              setColumnFilters={setColumnFilters}
            ></Filters>
          </div>

          <div className="Table">
            <table className="w-full text-left border-2">
              <thead className="bg-primary-statusbar">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="capitalize px-3.5 py-2 text-primary-textcolor"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.length ? (
                  table.getRowModel().rows.map((row, i) => (
                    <tr
                      key={row.id}
                      className={`${
                        i % 2 === 0 ? "bg-primary-line1 " : "bg-primary-line2 "
                      }`}
                    >
                      {row.getVisibleCells().map((cell) => (
                        <td
                          key={cell.id}
                          className="px-3.5 py-2 text-[#3C4C65]"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))
                ) : (
                  <tr className="text-center h-32">
                    <td colSpan={12}>No Record Found!</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          <div className="mt-5 ">
            <div className="mb-3">
              <text className="font-bold pl-2">
                Page {table.getState().pagination.pageIndex + 1} of{" "}
                {table.getPageCount()}
              </text>
            </div>

            <div className="flex items-center gap-4">
              <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
              </Button>
              <Button
                variant="text"
                className="flex items-center gap-2"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      {showActiveModal && (
        <ActiveModal
          onClose={() => setActiveModal(false)}
          string="State"
        ></ActiveModal>
      )}
    </div>
  );
};

export default Serviceable;
