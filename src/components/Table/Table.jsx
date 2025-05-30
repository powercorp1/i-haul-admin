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

import { useNavigate } from "react-router-dom";
import { USERS } from "../../data";
import { useState } from "react";
import { MdOutlineEdit, MdOutlineDeleteOutline, } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import Filters from "./Filters";

import ChangePasswordModal from "../Modal/ChangePasswordModal";
import ActiveModal from "../Modal/ActiveModal";
const TanStackTable = () => {
  const columnHelper = createColumnHelper();

   const [showPasswordModal, setShowPasswordModal] = useState(false);
   const [showActiveModal, setActiveModal] = useState(false);

const navigate=useNavigate();
const editHandler=()=>{
  navigate("/edituser");
}
  const columns = [
    columnHelper.accessor("profile", {
      cell: (info) => (
        <img
          src={info?.getValue()}
          alt="..."
          className="rounded-full w-10 h-10 object-cover"
        />
      ),
      header: "Profile",
    }),
    columnHelper.accessor("firstName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "First Name",
    }),
    columnHelper.accessor("lastName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Last Name",
    }),
    columnHelper.accessor("email", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Email",
    }),
    columnHelper.accessor("phone", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Phone Number",
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
        <span className="actions flex gap-2">
          <a onClick={editHandler}>
            <MdOutlineEdit className="text-blue-600 text-lg" />
          </a>{" "}
          <MdOutlineDeleteOutline className="text-red-600 text-lg" />{" "}
          
           <button onClick={()=>setShowPasswordModal(true)}>
             <IoLockClosedOutline className="text-green-600 text-lg" />
           </button>
          
        </span>
      ),
      header: "Action",
    }),
  ];
  const [data] = useState(() => [...USERS]);
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
    <div className="main-container m-5 flex flex-col">
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      ></Filters>

      <div className="Table">
        <table className="w-full text-left border-2">
          <thead className="bg-primary-statusbar">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="capitalize px-3.5 py-2 text-primarFFFFFFy-textcolor"
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
                  className={`
                    ${
                      i % 2 === 0
                        ? "bg-primary-line1 text-left "
                        : "bg-primary-line2 text-left"
                    }
                    `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3.5 py-2 text-[#3C4C65]">
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
      {showPasswordModal && (
        <ChangePasswordModal
          onClose={() => setShowPasswordModal(false)}
        ></ChangePasswordModal>
      )}

      {showActiveModal && (
        <ActiveModal
          onClose={() => setActiveModal(false)}
          string="User"
        ></ActiveModal>
      )}
    </div>
  );
};

export default TanStackTable;
