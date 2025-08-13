if (!window.lightdm) {

	function Prompt(name) {
		this.type = name;
		this.func = null;
	}
	Prompt.prototype = {};
	Prompt.prototype.connect = function(func) {
		this.func = func;
	};
	Prompt.prototype.print = function(text, type) {
        alert(text);
	};
	

	window.lightdm = {};

	lightdm.hostname = 'test-host';

	lightdm.sessions= [
		{ name: 'GNOME', key: 'gnome' },
		{ name: 'Plasma (X11)', key: 'plasma' },
		{ name: 'Cinnamon', key: 'cinnamon' },
		{ name: 'Xfce Session', key: 'xfce' },
		{ name: 'MATE', key: 'mate' },
        { name: 'LXQt', key: 'lxqt' }
	];

	lightdm.users = [
		{ username: 'sowan', display_name: 'Sowan', image :'images/sowan.jpg', session: 'gnome' },
		{ username: 'yerin', display_name: 'Yerin', image :'images/yerin.jpg', session: 'plasma' },
		{ username: 'eunha', display_name: 'Eunha', image :'images/eunha.jpg', session: 'cinnamon' },
		{ username: 'yuju', display_name: 'Yuju', image :'images/yuju.jpg', session: 'xfce' },
		{ username: 'sinb', display_name: 'SinB', image :'images/sinb.jpg', session: 'mate' },
		{ username: 'umju', display_name: 'Umji', image :'images/umji.jpg', session: 'lxqt' }
	];

	lightdm.show_prompt = new Prompt('show_prompt');
	lightdm.show_error = new Prompt('show_error');
	lightdm.authentication_complete = new Prompt('authentication_complete');

	lightdm.default_pw = 'test';
	lightdm.input = {};
	lightdm.authenticate = function() {
		lightdm.show_prompt.func('id', 0);
		lightdm.show_prompt.func('password', 1);
		lightdm.authentication_complete.func();
	};

	lightdm.respond = function(input) {
		if(lightdm.input.id) {
			lightdm.input.pw = input;
		} else {
			lightdm.input.id = input;
		}
	};

	lightdm.start_session = function(key) {
		if (lightdm.input.pw == lightdm.default_pw) {
			alert('Login Succeed.');
		} else {
			alert('Login Failed.');
		}
		lightdm.input = {};
	};
	

	lightdm.suspend = function() {
		alert('System Suspended.');
		document.location.reload(true);
	};

	lightdm.hibernate = function() {
		alert('System Hibernated.');
		document.location.reload(true);
	};

	lightdm.restart = function() {
		alert('System restart.');
		document.location.reload(true);
	};

	lightdm.shutdown = function() {
		alert('System Shutdown.');
		document.location.reload(true);
	};
}