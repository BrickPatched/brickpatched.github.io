var content_nav_api

$(document).ready(function() {
	generateConstants()
})

$("#apiInputSearch").bind('input', function() {
	var input = $(this).val().toLowerCase()

	content_nav_api.children().not('p').each(function() {
		var parent = $(this)
		var parentContainer = parent.children('ul').first()
		var parentMatch = false

		parent.find('ul').first().children().each(function() {
			var apiName = $(this).children().first().text().toLowerCase()

			if (~apiName.indexOf(input)) {
				$(this).removeClass('d-none')
				if (!parentMatch) {
					parentMatch = true
				}
			}
			else {
				$(this).addClass('d-none')
			}
		})

		if (parentMatch) {
			parent.removeClass('d-none')

			if (input.length > 2) {
				parentContainer.collapse("show")
			}
			else {
				parentContainer.collapse("hide")
			}
		}
		else {
			parent.addClass('d-none')
			parentContainer.collapse("hide")
		}
	})
})

function generateConstants() {
	// cache indexes
	content_nav_api = $("#apiNav")
}