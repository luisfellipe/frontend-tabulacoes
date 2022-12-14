import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        disabled
        _disabled={{
          bgColor: "colorBackground.paginationItem",
          cursor: "pointer"
        }}
        _hover={{
          bgColor: "colorBackground.paginationItemHover"
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bg="colorText.paginationItem"
      _hover={{
        bgColor: "colorBackground.paginationItemHover"
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}
