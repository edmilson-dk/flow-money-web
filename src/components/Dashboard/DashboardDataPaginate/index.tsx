import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { DashboardDataPaginateWrapper } from "src/styles/components/Dashboard/DashboardDataPaginate";
import { DashboardDataPaginateProps } from "./types";

export const DashboardDataPaginate = React.memo(({ nextCbFetch, prevCbFetch }: DashboardDataPaginateProps) => {
  console.log("chan")
  return (
    <DashboardDataPaginateWrapper>
      <button type="button" onClick={prevCbFetch}>
        <span>
          <FiChevronLeft size="100%"/>
        </span>
      </button>
      <button type="button" onClick={nextCbFetch}>
        <span>
          <FiChevronRight size="100%"/>
        </span>
      </button>
    </DashboardDataPaginateWrapper>
  );
});