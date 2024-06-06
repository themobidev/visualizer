function initSortable() {
    jQuery(canBeSortable.join()).sortable({
        delay: 300
    })
}

export default initSortable;