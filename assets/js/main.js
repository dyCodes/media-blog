/*!
 *--------------
 * Template Name: EventPlanner - v1.0
 * Template URL: dycodes.github.com/EventPlanner
 * Author: Yusuf Daudu - dyCodes
 * Author URL: github.com/dycodes
 * License: https://dycodes.github.com/EventPlanner/license
 *---------------------------------
 */

/***
 * DOM Selector helper function
 */
const selectElem = (elem, all = false) => {
	elem = elem.trim();
	if (all) {
		return [...document.querySelectorAll(elem)];
	} else {
		return document.querySelector(elem);
	}
};

/***
 * Scrolls to an element with header offset
 */
const scrollto = elem => {
	let elementPos = selectElem(elem).offsetTop;
	// header offset - 60
	window.scrollTo({
		top: elementPos - 60,
		behavior: 'smooth'
	});
};
