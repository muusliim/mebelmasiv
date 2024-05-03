"use client";
import { useState } from "react";
import CatalogItem from "./CatalogItem";
import { PaginationItems } from "./Pagination";

const CatalogItemsContainer = ({ catalogItems }: any) => {
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage] = useState(12);

	const lastItemIndex = currentPage * itemsPerPage;
	const firstItemIndex = lastItemIndex - itemsPerPage;
	const currentItems = catalogItems.slice(firstItemIndex, lastItemIndex);

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber) ;
    const nextPage = () => setCurrentPage(currentPage + 1);
    const prevPage = () => setCurrentPage(currentPage - 1);

	return (
		<>
			<div className="flexCenter flex-wrap gap-12 lg:gap-14">
				{currentItems.map((item: any, i: number) => (
					<div key={catalogItems[i].ctgheading}>
						<CatalogItem
							image={item.ctgimage}
							heading={item.ctgheading}
							descrFirst={item.ctgdescr}
							descrSecond={item.ctgdescr_2}
							descrThird={item.ctgdescr_3}
							price={item.price}
						/>
					</div>
				))}
			</div>
			{catalogItems.length > 12 && (
				<PaginationItems
					itemsPerPage={itemsPerPage}
					totalItems={catalogItems.length}
                    paginate={paginate}
                    nextPage={nextPage}
                    prevPage={prevPage}
                    currentPage={currentPage}
				/>
			)}
		</>
	);
};

export default CatalogItemsContainer;
