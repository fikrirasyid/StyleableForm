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

	// Do use value as placeholder
	$.fn.styleableTextPlaceholder = function(){
		$(this).each(function(){
			var input = $(this);
			if (input.is('input[type="text"]')){
				// Creating Variables
				var default_value = input.val();

				// Placeholder behavior
				input.on({
					'focus' : function(){
						if($(this).val() == default_value){
							$(this).val('');
						}
					},
					'blur' : function(){
						if($(this).val() == ''){
							$(this).val(default_value);
						}						
					}
				});
			}
		});
	}

})(jQuery);