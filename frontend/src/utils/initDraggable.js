function initDragable() {
    jQuery(".drag-element").each(function() {
        var e = jQuery(this).data("connect");
        jQuery(this).draggable({
            scope: e,
            connectToSortable: e,
            appendTo: "body",
            helper: "clone",
            revert: "invalid",
            start: function(e, a) {
                if (jQuery("body").hasClass("tinymce"))
                    return !1
            },
            stop: function(a, n) {
                jQuery(e).each(function() {
                    if (jQuery(this)[0] === jQuery(n.helper).parent()[0]) {
                        var e = jQuery(n.helper).data("layout");
                        jQuery(n.helper).replaceWith(e),
                        initSortable()
                    }
                })
            }
        })
    })
}

export default initDraggable;