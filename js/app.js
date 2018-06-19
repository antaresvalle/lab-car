// La funcionalidad de tu proyecto

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {opacity: 0.5});
});

document.addEventListener('DOMContentLoaded', function() {
	var elems = document.querySelectorAll('select');
	var instances = M.FormSelect.init(elems, {dropdownOptions: "option1"});
});
