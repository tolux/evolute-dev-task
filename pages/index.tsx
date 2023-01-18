import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import type { Data } from "@/@types";
import { pageDivide } from "@/util/pageDivider";
import Link from "next/link";
import Pagination from "@/components/Pagination";
import { PaginationTable } from "@/components/PaginationTable";

export default function Home({ pagedata }: { pagedata: Data[] }) {
  const pageSize = 25;
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => setCurrentPage(page);

  const pages = pageDivide(pagedata, currentPage, pageSize);

  return (
    <div className="container">
      <p>page info</p>
      <Link href="/statistics">view statistics</Link>
      <PaginationTable pages={pages} />
      <Pagination
        items={pagedata.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/data");
  const data: Data[] = await res.json();

  return {
    props: {
      pagedata: data,
    },
  };
}
