// client/src/components/Pagination.tsx

import React from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onChange(page: number): void;
}

export const Pagination: React.FC<PaginationProps> = ({
                                                          currentPage,
                                                          totalPages,
                                                          onChange
                                                      }) => {
    if (totalPages <= 1) {
        return null;
    }

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <nav className="pagination" aria-label="Навигация по страницам">
            {currentPage > 1 && (
                <button
                    type="button"
                    className="pagination-link pagination-prev"
                    onClick={() => onChange(currentPage - 1)}
                >
                    ←
                </button>
            )}

            {pages.map((page) => (
                <button
                    key={page}
                    type="button"
                    className={`pagination-link ${
                        page === currentPage ? "is-active" : ""
                    }`}
                    onClick={() => onChange(page)}
                >
                    {page}
                </button>
            ))}

            {currentPage < totalPages && (
                <button
                    type="button"
                    className="pagination-link pagination-next"
                    onClick={() => onChange(currentPage + 1)}
                >
                    →
                </button>
            )}
        </nav>
    );
};
