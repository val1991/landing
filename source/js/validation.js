(function () {
	var me = {};

	me.isEmail = function (email) {
		var re = /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,6})$/;
		return re.test(email);
	};

	me.isNumber = function (number) {
		var re = /^\d+$/;
		return re.test(number);
	};

	me.isNotEmpty = function (str) {

		return Boolean(str);
	};



	ITVDN.validation = me;
}());