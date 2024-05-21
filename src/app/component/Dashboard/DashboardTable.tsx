"use client";

import { TProduct } from "@/type/type";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import Image from "next/image";

interface TAllProduct {
  getAllProducts: TProduct[];
}

const DashboardTable = ({ getAllProducts }: TAllProduct) => {
  return (
    <Table removeWrapper aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>SL NO</TableColumn>
        <TableColumn>Items</TableColumn>
        <TableColumn>Brand</TableColumn>
        <TableColumn>Product Id</TableColumn>
        <TableColumn>Price</TableColumn>
      </TableHeader>
      <TableBody>
        {getAllProducts?.map((item: TProduct) => (
          <TableRow key={item._id}>
            <TableCell>{item.id}</TableCell>
            <TableCell className="inline-flex items-center gap-3">
              <Image
                src={item.image[0]}
                alt="table img"
                height={20}
                width={50}
                className="rounded-xl w-10 h-10"
              />
              {item.title}
            </TableCell>
            <TableCell>{item.brand}</TableCell>
            <TableCell>{item._id}</TableCell>
            <TableCell>${item.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DashboardTable;
