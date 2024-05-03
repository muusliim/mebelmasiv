import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from "@/components/ui/pagination";

type Props = {
	itemsPerPage: number;
	totalItems: number;
	currentPage: number;
	paginate: (pageNumber: number) => void;
	prevPage: () => void;
	nextPage: () => void;
};
export function PaginationItems({
	itemsPerPage,
	totalItems,
	paginate,
	prevPage,
	nextPage,
	currentPage,
}: Props) {
	const pageNumbers: number[] = [];

	for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	const active = (e: any, i: number): boolean =>
		e.target.innerText === pageNumbers[i];

	return (
		<Pagination className="mt-10">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						href="#"
						onClick={prevPage}
						className={
							currentPage === pageNumbers[0]
								? "opacity-50 pointer-events-none"
								: ""
						}
					/>
				</PaginationItem>
				{pageNumbers.map((number) => (
					<PaginationItem key={number}>
						<PaginationLink
							href="#"
							onClick={() => paginate(number)}
							isActive={currentPage === number}
						>
							{number}
						</PaginationLink>
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationNext
						href="#"
						onClick={nextPage}
						className={
							currentPage === pageNumbers[pageNumbers.length - 1]
								? "opacity-50 pointer-events-none"
								: ""
						}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
}
