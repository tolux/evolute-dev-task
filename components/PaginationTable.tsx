import { Data } from "@/@types";
import Link from "next/link";
import { FC } from "react";

export const PaginationTable: FC<{ pages: Data[] }> = ({ pages }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>view info</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((pageContent) => (
            <tr key={pageContent.id}>
              <td> {pageContent.name} </td>
              <td> {pageContent.status} </td>
              <td>
                <Link href={`details/${pageContent.id}`}> view</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
