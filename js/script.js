const clanModule = (() => {

    return {

        pageScrollFunction:() => {
			$(document).ready(function() {
				$('.nav-link').on('click', function() {
					$.scrollTo($(this).attr('href'), 800, {
						offset: -60
					});
				});
			});
        },
        
        hideCollapsedNavbar: () => {
			$(document).on('click',function(){
				$('.collapse').collapse('hide');
			})
        },

        registerEventHandlers: function() {
			
		},
        
        initialize: (() => {
			document.addEventListener('DOMContentLoaded', () => {
				clanModule.pageScrollFunction();
				clanModule.registerEventHandlers();
				clanModule.hideCollapsedNavbar();
				
			});
		})()
    }
})();