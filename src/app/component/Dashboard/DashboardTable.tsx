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
            <TableCell>{item.title}</TableCell>
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
