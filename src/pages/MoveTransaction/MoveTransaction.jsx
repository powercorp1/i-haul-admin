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

import { TRANSACTION } from "../../data";
import { useState } from "react";

import Filters from "./Filters";

const MoveTransaction = () => {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor("moveId", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Move ID",
    }),
    columnHelper.accessor("userName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "User Name",
    }),
    columnHelper.accessor("moverName", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Mover Name",
    }),
    columnHelper.accessor("amount", {
      cell: (info) => <span>{info.getValue()}</span>,
      header: "Amount",
    }),
  ];
  const [data] = useState(() => [...TRANSACTION]);

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
        <div className="main-container m-5 flex flex-col">
          <Filters
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
          ></Filters>

          <div className="Table">
            <table className="w-full text-center border-2">
              <thead className="bg-[#637083]">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <th
                        key={header.id}
                        className="capitalize px-3.5 py-2 text-[#FFFFFF]"
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
                        i % 2 === 0 ? "bg-[#F2F2F2] " : "bg-[#FFFFFF] "
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
    </div>
  );
};

export default MoveTransaction;
