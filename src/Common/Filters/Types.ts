export type FilterData = {
    sort?: FormDataEntryValue | string | null;
    selectCategory?: Set<FormDataEntryValue | string>;
    priceFilter?: number | null;
    searchValue?: FormDataEntryValue | string;
}

export type QueryData = {
    value: string | string[] | undefined;
    sort: string | string[] | undefined;
    selectCategories: string | string[] | undefined;
    priceFilter: string | string[] | undefined;
}

export type PrefetchedData = {
    sort: string | null,
    filterCategories: Set<FormDataEntryValue>,
}