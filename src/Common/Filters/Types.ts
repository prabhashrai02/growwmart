export type FilterData = {
    sort?: FormDataEntryValue | null;
    selectCategory?: Set<FormDataEntryValue>;
    priceFilter?: number;
    searchValue?: FormDataEntryValue;
}