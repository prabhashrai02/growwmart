export type FilterData = {
    sort?: FormDataEntryValue | string | null;
    selectCategory?: Set<FormDataEntryValue | string>;
    priceFilter?: number | null;
    searchValue?: FormDataEntryValue | string;
}