"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useLogStore } from "@/store";
import { cn } from "@/lib/utils";

export default function Logs() {
  // List from supabase
  const logs = useLogStore((state) => state.logs);

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Date</TableHead>
            <TableHead className="w-1/3">hours</TableHead>
            <TableHead className="w-1/3">Note</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Object.keys(logs).map((key) => {
            const log = logs[key];

            return (
              <TableRow
                key={key}
                className={cn(log.hour <= 5 ? "bg-red-100" : "")}
              >
                <TableCell>{log.date.toDateString()}</TableCell>
                <TableCell>{log.hour}</TableCell>
                <TableCell>{log.note}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
