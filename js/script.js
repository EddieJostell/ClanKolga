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
			/*document.getElementById("c9Games").addEventListener("click", c9Module.getResultsFromDatabase);*/
			/*console.log("button working?");*/
		},
        
        initialize: (() => {
			document.addEventListener('DOMContentLoaded', () => {
				c9Module.pageScrollFunction();
				c9Module.registerEventHandlers();
				c9Module.getResultsFromDatabase();
				c9Module.hideCollapsedNavbar();
				c9Module.contactFormFunction();
			});
		})()
    }
})();