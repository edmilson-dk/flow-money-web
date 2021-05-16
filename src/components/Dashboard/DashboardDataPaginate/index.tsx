import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { DashboardDataPaginateWrapper } from "src/styles/components/Dashboard/DashboardDataPaginate";
import { DashboardDataPaginateProps } from "./types";

export const DashboardDataPaginate = ({ nextCbFetch, prevCbFetch, nextDisabled, prevDisabled }: DashboardDataPaginateProps) => {

  return (
    <DashboardDataPaginateWrapper>
      <button type="button" onClick={prevCbFetch} disabled={prevDisabled}>
        <span>
          <FiChevronLeft size="100%"/>
        </span>
      </button>
      <button type="button" onClick={nextCbFetch} disabled={nextDisabled}>
        <span>
          <FiChevronRight size="100%"/>
        </span>
      </button>
    </DashboardDataPaginateWrapper>
  );
};