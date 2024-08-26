export interface PaginationQuery {
  offset: number;
  limit: number;
}
export function buildPaginationWithPages(query: { page: number; limit: number }) {
  const limit = query.limit || 10;
  const offset = (query.page - 1) * limit || 0;

  return {
    offset,
    limit,
  };
}
