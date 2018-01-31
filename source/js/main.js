(function () {
	var me = {};

	var form = document.querySelector('.form-container');
	var closeButton = null;

	function onClose() {
		
		me.close();
		closeButton.removeEventListener('click', onClose)

	}


	me.open = function () {
		form.classList.remove('is-hidden');

		closeButton = document.querySelector('.form__close-button');
		closeButton.addEventListener('click', onClose);
		document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        form.classList.add('is-hidden');
    }
};
			
		};
	

	me.close = function () {
		form.classList.add('is-hidden');
	};


	me.isValid = function () {

		if (!me.isAllCompleted(document.querySelectorAll('[data-valid="required"]'))) {

			console.log('заполните');
			return false

		} else if (!ITVDN.validation.isEmail(document.querySelector('[data-email]').value)) {
			console.log('заполните email');
			return false
		} else if (!ITVDN.validation.isNumber(document.querySelector('[data-number]').value)) {
			console.log('заполните номер');
			return false
		}

			return true;
	};

	me.isAllCompleted = function (data) {

		var result = true;

		for (var i = 0; i < data.length; i++) {
			if (!ITVDN.validation.isNotEmpty(data[i].value)){
				result = false;

				break
			}
		}

		return result;
	};

	ITVDN.form = me;

}());

(function () {
	var openFormButton = document.querySelector('.btn-down');

	var form = document.querySelector('.form');

	var nav = document.querySelector('.nav');

	if (openFormButton) {
		openFormButton.addEventListener('click', function(e) {
			e.preventDefault();
			ITVDN.form.open();
		})
	}

	if (form) {
		form.addEventListener('submit', function (e) {
			e.preventDefault();
			if (ITVDN.form.isValid()) {
				console.log('all good');
			} else {
				console.log('is not valid');
			}
		})
	}


	if(nav) {
		nav.addEventListener('click', function (e) {

			var target = e.target;

			if (target.tagName.toLowerCase() !== 'a') {
				return;
			}
			
			e.preventDefault();

			ITVDN.navigation.toggleToActiveLink(target);	

		});
	}

}());