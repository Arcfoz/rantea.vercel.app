"use client";
import { FC } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface PaginationProps {
  pageCount: number;
}

interface PaginationArrowProps {
  direction: "left" | "right";
  href: string;
  isDisabled: boolean;
}

const PaginationArrow: FC<PaginationArrowProps> = ({ direction, href, isDisabled }) => {
  const router = useRouter();
  const isLeft = direction === "left";
  const disabledClassName = isDisabled ? "opacity-50 cursor-not-allowed" : "";

  return (
    <button onClick={() => router.push(href)} className={`join-item btn ${disabledClassName}`} aria-disabled={isDisabled} disabled={isDisabled}>
      {isLeft ? "«" : "»"}
    </button>
  );
};

export default function PaginationButton({ pageCount }: Readonly<PaginationProps>) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    for (let i = 1; i <= pageCount; i++) {
      paginationItems.push(
        <PaginationItem key={i}>
          <PaginationLink href={createPageURL(i)} isActive={i === currentPage}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return paginationItems;
  };

  return (
    <div className="w-64 mx-auto my-6">
      <div className="join">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              {<PaginationPrevious href={createPageURL(currentPage - 1)} aria-disabled={currentPage <= 1} tabIndex={currentPage <= 1 ? -1 : undefined} className={currentPage <= 1 ? "pointer-events-none opacity-50" : undefined} />}
            </PaginationItem>
            {renderPaginationItems()}
            <PaginationItem>
              {
                <PaginationNext
                  href={createPageURL(currentPage + 1)}
                  aria-disabled={currentPage >= pageCount}
                  tabIndex={currentPage >= pageCount ? +1 : undefined}
                  className={currentPage >= pageCount ? "pointer-events-none opacity-50" : undefined}
                />
              }
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
