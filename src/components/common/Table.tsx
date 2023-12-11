import {
  Pagination,
  TableBody,
  TableHeader,
  Table as NextUITable,
  TableRow,
  TableCell,
  TableColumn,
} from "@nextui-org/react";
import {
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { useState } from "react";

interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  total_items?: number;
  current_page?: number;
  total_pages?: number;
}

export function Table<T extends object>(props: ReactTableProps<T>) {
  const [page, setPage] = useState(props.current_page || 1);

  const table = useReactTable({
    data: props.data,
    columns: props.columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <NextUITable
      bottomContent={
        props.total_pages &&
        props.total_pages > 0 && (
          <div className="flex justify-center w-full">
            <Pagination
              isCompact
              showControls
              showShadow
              color="primary"
              page={page}
              total={props.total_pages || 1}
              onChange={(page) => setPage(page)}
            />
          </div>
        )
      }
      classNames={{
        wrapper: "min-h-[222px] ",
      }}
    >
      <TableHeader>
        {table.getFlatHeaders().map((header) => (
          <TableColumn
            key={header.id}
            className="px-6 py-4 text-[10px] font-medium text-gray-900"
          >
            {header.isPlaceholder
              ? null
              : flexRender(header.column.columnDef.header, header.getContext())}
          </TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows.map((row) => (
          <TableRow key={row.id} className='border-b" bg-white'>
            {row.getVisibleCells().map((cell) => (
              <TableCell
                className="px-6 py-4 text-[10px] font-light text-gray-900 whitespace-nowrap"
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </NextUITable>
  );
}
