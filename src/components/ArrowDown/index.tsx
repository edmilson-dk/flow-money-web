import { FiChevronDown } from "react-icons/fi";

import { ArrowDownWrapper } from "src/styles/components/ArrowDown";

export function ArrowDown() {
  return (
    <ArrowDownWrapper>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div>
        <FiChevronDown size="100%"/>
      </div>
    </ArrowDownWrapper>
  );
}