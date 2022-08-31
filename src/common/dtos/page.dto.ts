export interface PageDtoParameters<T> {
  rows: T[];
  count: number;
  limit: number;
  page: number;
}

export class PageDto<T> {
  readonly rows: T[];
  readonly totalItems: number;
  readonly totalPages: number;
  readonly currentPage: number;

  constructor({ rows, count, limit, page }: PageDtoParameters<T>) {
    const currentPage = page || 0;
    const totalPages = Math.ceil(count / limit);

    this.rows = rows;
    this.totalItems = count;
    this.totalPages = totalPages;
    this.currentPage = currentPage;
  }
}
