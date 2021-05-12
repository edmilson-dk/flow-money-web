export type DashboardDataPaginateProps = {
  nextCbFetch: () => void;
  prevCbFetch: () => void;
  nextDisabled?: boolean;
  prevDisabled?: boolean;
}