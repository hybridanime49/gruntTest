/*
 * TestingJqueryPlugin
 * https://github.com/hybridanime49/gruntTest
 *
 * Copyright (c) 2013 hybridanime49
 * Licensed under the MIT license.
 */

(function($) {

  // Collection method.
  $.fn.TestingJqueryPlugin = function() {
    return this.each(function(i) {
      // Do something awesome to each selected element.
      $(this).html('awesome' + i);
    });
  };

  // Static method.
  $.TestingJqueryPlugin = function(options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.TestingJqueryPlugin.options, options);
    // Return something awesome.
    return 'awesome' + options.punctuation;
  };

  // Static method default options.
  $.TestingJqueryPlugin.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].TestingJqueryPlugin = function(elem) {
    // Is this element awesome?
    return $(elem).text().indexOf('awesome') !== -1;
  };

}(jQuery));
