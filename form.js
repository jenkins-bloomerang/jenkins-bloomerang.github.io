function normalizeHeights() {
	setMaxHeight('.rowone > .internalblock');
	setMaxHeight('.rowtwo > .internalblock');
	setMaxHeight('.rowthree > .internalblock');
	setMaxHeight('.rowfour > .internalblock');
}

function setMaxHeight(elementClass) {
	var elements = document.querySelectorAll(elementClass);
	var maxHeight = 0;

	for (var i = 0; i < elements.length; ++i) {
		maxHeight = elements[i].clientHeight > maxHeight
		            ? elements[i].clientHeight
		            : maxHeight;
	}

	for (var i = 0; i < elements.length; ++i) {
		elements[i].style.height = maxHeight;
	}
}