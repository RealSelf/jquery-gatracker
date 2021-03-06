// Copyright 2012, RealSelf, Inc
// author: Matt Towers <matt@realself.com>
// Dual licensed under the MIT and GPL licenses (just like jQuery):

// GNU General Public License v3.0
// http://www.gnu.org/licenses/gpl.html

// ~~~~~~~~~~~~~~~~~~
// The MIT License
// http://www.opensource.org/licenses/mit-license.php

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

// ~~~~~~~~~~~~~~~~~~
;(function( $ ) {

    $.gatracker = function(element, options) {
        this.options = {};

        element.data('gatracker', this);

        this.init = function(element, options) {
            this.options = $.extend({}, $.gatracker.defaults, options);

            if( this.options.trackEvent ) {
                var self = this;        
                element.find('[data-gaevent-category][data-gaevent]').each(function() {
                    var evt = '' != $(this).data('gaevent') ? $(this).data('gaevent') : self.options.trackEventEvent;
                    $(this).bind(evt, function() {
                        var category = $(this).data('gaevent-category');
                        var action = undefined != $(this).data('gaevent-action') ? $(this).data('gaevent-action') : $(this).data('gaevent');
                        var label = undefined != $(this).data('gaevent-label') ? $(this).data('gaevent-label') : '';
                        var value = undefined != $(this).data('gaevent-value') ? $(this).data('gaevent-value') : 0;

                        _gaq.push(['_trackEvent', category, action, label, value, true]);
                    });
                });
            }

            if( this.options.trackPageview ) {
                var self = this;
                element.find('[data-gapageview]').each(function() {
                    var evt = '' != $(this).data('gapageview') ? $(this).data('gapageview') : self.options.trackPageViewEvent;
                    var link = undefined != $(this).data('gapageview-url') ? $(this).data('gapageview-url') : $(this).attr('href');
                    if( undefined != link ) {
                        $(this).bind(evt, function() {
                            _gaq.push(['_trackPageview', link]);
                        });
                    }
                });
            }                              
        };

        this.init(element, options);
    }

    $.fn.gatracker = function(options) {
        return this.each(function() {
            (new $.gatracker($(this), options));
        });
    }

    $.gatracker.defaults = {
        trackEvent : true,
        trackEventEvent : 'click',
        trackPageview : true,
        trackPageViewEvent : 'click'
    }

})(jQuery);