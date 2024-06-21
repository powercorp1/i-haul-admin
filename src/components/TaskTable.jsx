import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { USERS } from "../data";

import { useState } from "react";

import "./../App.css";

const columns = [
  {
    accessorKey: "profile",
    header: "Profile",
    cell: (props) => {
      <img
        src={props?.getValue()}
        alt="..."
        className="rounded-full w-10 h-10 object-cover"
      >
        {" "}
      </img>;
    },
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: (props) => {
      <span>{props.getValue()}</span>;
    },
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    cell: (props) => {
      <span>{props.getValue()}</span>;
    },
  },
  {
    accessorKey: "age",
    header: "Email",
    cell: (props) => {
      <span>{props.getValue()}</span>;
    },
  },
  {
    accessorKey: "visits",
    header: "Phone",
    cell: (props) => {
      <span>{props.getValue()}</span>;
    },
  },
];

const DataTable = () => {
  const [data, setData] = useState(USERS);

  const [globalFilter, setGlobalFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table);
  return (
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
            <td colSpan={12}>No Record Found!</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};
export default DataTable;
