import {
  Pagination as ShadcnPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

type PaginationProps = {
  page: number;
  pageSize: number;
  initialPage: number;
  total: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  page,
  pageSize,
  initialPage,
  total,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / pageSize);
  const disabledPrevPage = page <= initialPage;
  const disabledNextPage = page >= totalPages;

  const handlePrevPage = () => {
    if (!disabledPrevPage) {
      onPageChange(page - 1);
    }
  };

  const handleNextPage = () => {
    if (!disabledNextPage) {
      onPageChange(page + 1);
    }
  };

  return (
    <ShadcnPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            size="sm"
            onClick={handlePrevPage}
            disabledIcon={disabledPrevPage}
            className={`${!disabledPrevPage && 'cursor-pointer'}`}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            isActive
            size="sm"
            className="rounded-full border-primary bg-primary text-secondary font-bold"
          >
            {page}
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            size="sm"
            onClick={handleNextPage}
            disabledIcon={disabledNextPage}
            className={`${!disabledNextPage && 'cursor-pointer'}`}
          />
        </PaginationItem>
      </PaginationContent>
    </ShadcnPagination>
  );
};

export default Pagination;
