/*
 * StyleableForm. A suite of jQuery plugins to style un-styleable form elements
 * developed by @fikrirasyid 
 * http://fikrirasyid.com
 */


(function($){

	// Styling Checkbox, huh?
	$.fn.styleableCheckbox = function(){
		$(this).each(function(){
			var checkbox = $(this);
			if (checkbox.is('input[type="checkbox"]')){
				// Setting Up Variables
				var name 					= checkbox.attr('id');
				var name_wrap 				= name + '-wrap';
				var name_checkbox 			= name + '-checkbox';
				var name_checkbox_selector 	= '#' + name_checkbox;

				// Wrapping Checkbox
				checkbox.wrap('<span class="styleable-checkbox-wrap" id="'+name_wrap+'"></span>');
				checkbox.after('<span class="styleable-checkbox" id="'+name_checkbox+'"></span>');
				checkbox.hide();

				// If Checked By Default
				if(checkbox.is(':checked')){
					$(name_checkbox_selector).addClass('checked');
				}

				// When The Customized Checkbox is Checked
				$('body').on('click', name_checkbox_selector, function(){
					$(this).toggleClass('checked');
					checkbox.trigger('click');
				});
			}
		});
	}

})(jQuery);