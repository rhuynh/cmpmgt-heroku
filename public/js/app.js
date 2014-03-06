$(function() {
	$(document).foundation();

	var deviceDetector = {
		isMobile: function() {
			return Modernizr.mq('only screen and (max-width: 40em');
		},
		isTablet: function() {
			return Modernizr.mq('only screen and (min-width: 40.063em)');
		},
		isDesktop: function() {
			return Modernizr.mq('only screen and (min-width: 64.063em')
		}
	};

	function resizeSideNav() {
		$('.container-side-nav').height($('.container-detail').height());
	}

	function init() {
		var viewMap = {
			corvette: 'view-corvette',
			i8: 'view-i8',
			r8: 'view-r8'
		};

		$('.side-nav li a').click(function(e) {
			var carModel = $(e.target).data('car');
			var content = $('#' + viewMap[carModel]).html();
			$('.detail').html(content);
			$('.container-detail .title').html(carModel);
			if (deviceDetector.isMobile()) {
				$('.pane-right').toggleClass('show');
			}
			//delay so that we can get the proper dimension
			setTimeout(resizeSideNav, 100);
		});

		$(window).resize(resizeSideNav);
		resizeSideNav();

		$('.button-back').click(function(e) {
			if (deviceDetector.isMobile()) {
				$('.pane-right').toggleClass('show');
			}		
		})
	}

	init();
})
