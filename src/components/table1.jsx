import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable,
  } from "@tanstack/react-table";
  import { USERS } from "../data";
  import { useState } from "react";
  import { MdOutlineEdit,MdOutlineDeleteOutline, } from "react-icons/md";
  import { IoLockClosedOutline } from "react-icons/io5";

  import "./table.css"
  
  const TanStackTable = () => {
    const columnHelper = createColumnHelper();
  
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
        cell: (info) => <button className="active-button">
        {info.getValue()}
      </button>,
        header: "Active/In-Active",
      }),
      columnHelper.accessor("status", {
        cell: (info) =><span>{info.getValue()}</span>,
        header: "Status",
      }),
      columnHelper.accessor("action", {
        cell: (info) =>  <span className="actions"><MdOutlineEdit className="edit-btn"/> <MdOutlineDeleteOutline className="del-btn"/> <IoLockClosedOutline className="lock-btn"/>
        </span>,
        header: "Action",
      }),
      
    ];
    const [data] = useState(() => [...USERS]);
    const [globalFilter,] = useState("");
  
    const table = useReactTable({
      data,
      columns,
      state: {
        globalFilter,
      },
      getFilteredRowModel: getFilteredRowModel(),
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
    });
  
    return (
        <div className="Table">
          <table className="border border-gray-700 w-full text-left">
          <thead className="bg-gray-600">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="capitalize px-3.5 py-2">
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
                  ${i % 2 === 0 ? "bg-gray-500" : "bg-gray-400"}
                  `}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-3.5 py-2">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr className="text-center h-32">
                <td colSpan={12}>No Recoard Found!</td>
              </tr>
            )}
          </tbody>
        </table>
        </div>
    );
  };
  
  export default TanStackTable;
  