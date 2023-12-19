"use client";

import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

interface PaginationProps {
  totalPages: any;
  onPageChange: (pageNo: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [active, setActiveValue] = React.useState(0);

  const getItemProps = (index: any) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "#5C98F2",
      onClick: () => {
        setActiveValue(index);
        onPageChange(index);
      },
    } as any);

  const next = () => {
    if (active === totalPages) return;

    setActiveValue(active + 1);
    onPageChange(active + 1);
  };

  const prev = () => {
    if (active === 0) return;

    setActiveValue(active - 1);
    onPageChange(active + 1);
  };

  const totalPagesArray = Array.from(
    { length: totalPages },
    (_, index) => index
  );

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 0}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {totalPagesArray.map((item: number, index: number) => (
          <IconButton key={index} {...getItemProps(item)}>
            {item + 1}
          </IconButton>
        ))}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === totalPages - 1}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
