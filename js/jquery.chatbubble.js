/*!
 * Uses the jQuery lightweight plugin boilerplate by @ajpiano
 */

;(function ( $, window, document, undefined ) {


    var chatBubble = "chatBubble",
       
        defaults = {
            typingSpeed: 40 // words per minute
        };

    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = chatBubble;

        this.init();
    }

    Plugin.prototype = {

        init: function() {
            var self = this;

            $(self.element).addClass('cb__list');
           
            var messages = this.options.messages;
            var count = messages.length;
            var typingSpeed = this.options.typingSpeed || this.defaults.typingSpeed;

            var i = 0;

            function addMessage() {
                self.addMessage(self.element, messages[i], typingSpeed).then(function() {
                i++;
                if (i < count) addMessage();
                });
            }

            addMessage();
        },

        addMessage: function(el, message, typingSpeed) {
         
            var $listItem = $('<li></li>');
            var $bubble = $('<div class="bubble typing">...</div>');
            var words = message.split(' ').length; 

            var speed = (words / typingSpeed) * 6000;
            if (speed < 1000) speed = 1000;
            if (speed > 10000) speed = 10000;

            $listItem.html($bubble);
            $(el).append($listItem);
          
            return new Promise(function(resolve, reject) {
                window.setTimeout(function() {
                    $bubble.html(message).removeClass('typing');
                    resolve(true);
                },speed);
            
            });
        }
    };

    $.fn[chatBubble] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + chatBubble)) {
                $.data(this, "plugin_" + chatBubble,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );