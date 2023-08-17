$(function () {
	$('.projects__dots-btn').on('click', function () {
		$('.projects__dots-btn').removeClass('projects__dots-btn--active')
		$(this).addClass('projects__dots-btn--active')
	})
})