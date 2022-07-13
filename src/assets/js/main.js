export class Test {
	testing() {
		var pass_show = false;
		$('#toggle-password').click(function () {
			if (pass_show) {
				$('input[name=password]').attr('type', 'password');
				$(this).attr('src', 'https://famoscompany.com:443/assets/front-end/client-site/images/ic-password-show.png')
			} else {
				$('input[name=password]').attr('type', 'text');
				$(this).attr('src', 'https://famoscompany.com:443/assets/front-end/client-site/images/ic-password-hide.png')
			}
			pass_show = !pass_show;
		})
	}
}

// dropbar
// $('select').each(function () {
// 	var $this = $(this),
// 		numberOfOptions = $(this).children('option').length;

// 	$this.addClass('select-hidden');
// 	$this.wrap('<div class="select"></div>');
// 	$this.after('<div class="select-styled"></div>');

// 	var $styledSelect = $this.next('div.select-styled');
// 	$styledSelect.text($this.children('option').eq(0).text());

// 	var $list = $('<ul />', {
// 		'class': 'select-options'
// 	}).insertAfter($styledSelect);

// 	for (var i = 0; i < numberOfOptions; i++) {
// 		$('<li />', {
// 			text: $this.children('option').eq(i).text(),
// 			rel: $this.children('option').eq(i).val()
// 		}).appendTo($list);
// 	}

// 	var $listItems = $list.children('li');

// 	$styledSelect.click(function (e) {
// 		e.stopPropagation();
// 		$('div.select-styled.active').not(this).each(function () {
// 			$(this).removeClass('active').next('ul.select-options').hide();
// 		});
// 		$(this).toggleClass('active').next('ul.select-options').toggle();
// 	});

// 	$listItems.click(function (e) {
// 		e.stopPropagation();
// 		// e.addClass('halo');
// 		$styledSelect.text($(this).text()).removeClass('active');
// 		$this.val($(this).attr('rel'));
// 		$list.hide();
// 		//console.log($this.val());
// 	});

// 	$(document).click(function () {
// 		$styledSelect.removeClass('active');
// 		$list.hide();
// 	});

// });
