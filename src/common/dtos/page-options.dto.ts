export interface PageOptionsDtoParameters {
  page: number;
  size: number;
}

export class PageOptionsDto {
  readonly page: number;
  readonly limit: number;
  readonly offset: number;

  constructor({ page, size }: PageOptionsDtoParameters) {
    const limit = +size || 10;
    const offset = page * limit || 0;

    this.page = +page;
    this.limit = limit;
    this.offset = offset;
  }
}
