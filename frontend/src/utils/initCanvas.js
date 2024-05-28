function initCanvas() {
    jQuery("#canvas").on("click", '[class*="col-"] a, [class*="col-"] button', function(e) {
        e.preventDefault()
    }),
    jQuery("#trash").droppable({
        hoverClass: "trash-hover",
        tolerance: "touch",
        drop: function(e, a) {
            a.draggable.fadeOut().remove()
        }
    }),
    jQuery("#canvas").on("click", canBeSelected.join(), function(e) {
        e.stopPropagation(),
        $this = jQuery(this),
        jQuery(".dropdown.open").removeClass("open"),
        $this.hasClass("selected") ? ($this.parent().hasClass("row") || $this.parent().hasClass("col-editable-parent")) && jQuery("body").hasClass("tinymce") && initTinyMCE() : (jQuery(canBeSelected.join()).removeClass("selected"),
        $this.addClass("selected"),
        ($this.parent().hasClass("row") || $this.parent().hasClass("col-editable-parent")) && jQuery("body").hasClass("tinymce") && initTinyMCE())
    }),
    jQuery("#canvas").on({
        mouseenter: function(e) {
            if (!jQuery("body").hasClass("tinymce") && !jQuery(this).hasClass("drag-element")) {
                jQuery(this).prepend('<div class="section_controls"><a href="#" ng-click="saveSection($event)"><span class="glyphicon glyphicon glyphicon-save"></span> Save Section</a><a href="#" ng-click="editSection($event)"><span class="glyphicon glyphicon glyphicon-edit"></span> Edit Section</a><a href="#" ng-click="deleteSection($event)"><span class="glyphicon glyphicon glyphicon-trash"></span> Delete Section</a></div>');
                var a = $(this).find(".section_controls");
                bindAngular(a)
            }
        },
        mouseleave: function(e) {
            jQuery(this).find(".section_controls").remove()
        }
    }, "#box_wrapper > *", function(e) {}),
    jQuery("#canvas").on({
        mouseenter: function(e) {
            if (!jQuery("body").hasClass("tinymce") && !jQuery(this).hasClass("drag-element")) {
                jQuery(this).prepend('<div class="section_controls"><a href="#" ng-click="editColumn($event)"><span class="glyphicon glyphicon glyphicon-edit"></span> Edit Column</a><a href="#" ng-click="deleteColumn($event)"><span class="glyphicon glyphicon glyphicon-trash"></span> Delete Column</a></div>');
                var a = $(this).find(".section_controls");
                bindAngular(a)
            }
        },
        mouseleave: function(e) {
            jQuery(this).find(".section_controls").remove()
        }
    }, '#box_wrapper [class*="col-"]', function(e) {})
}

export default initCanvas;