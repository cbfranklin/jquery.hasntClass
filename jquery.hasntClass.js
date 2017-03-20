/*!
 * jQuery.hasntClass plugin
 */

(function($) {
    // wrap jQuery's .hasClass in a local function
    function hasClassName($element, className) {
        return $element.hasClass(className);
    }

    $.fn.hasntClass = function(className) {
        if (!hasClassName(className)) {
            return true;
        }
        return false;
    };
})(jQuery);
