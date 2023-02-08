export const getCategoriesString = (filterCategory: Set<FormDataEntryValue>) => {
    let categoriesString = '';
    filterCategory.forEach((item) => {
        categoriesString = categoriesString.concat(`, `, JSON.stringify(item));
    })

    categoriesString = categoriesString.substring(1);

    if (categoriesString.length) {
        return categoriesString;
    }
    else {
        return `""`;
    }
}