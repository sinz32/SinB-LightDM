var user, session;

window.addEventListener('load', (e) => setTimeout(() => {
    var src = '';
    for (var n = 0; n < lightdm.sessions.length; n++) {
        src += '<div onclick=\'selectSession(' + n + ');\'>' + lightdm.sessions[n].name + '</div>'
    }
    document.getElementById('session_menu').innerHTML = src;

    var src = '';
    for (var n = 0; n < lightdm.users.length; n++) {
        src += '<div onclick=\'selectUser(' + n + ');\'>' + lightdm.users[n].display_name + '</div>'
    }
    document.getElementById('user_list').innerHTML = src;
    selectUser(4);
    document.getElementById('user_pw').focus();
}, 100));

function openSessionMenu() {
    var element = document.getElementById('session_menu');
    if (element.style.display == 'block') element.style.display = 'none';
    else element.style.display = 'block';
}

function openPowerMenu() {
    var element = document.getElementById('power_menu');
    if (element.style.display == 'block') element.style.display = 'none';
    else element.style.display = 'block';
}

function openUserList() {
    var element = document.getElementById('user_list');
    if (element.style.display == 'block') element.style.display = 'none';
    else element.style.display = 'block';
}

function selectSession(n) {
    session = lightdm.sessions[n];
    document.getElementById('session').innerHTML = lightdm.sessions[n].name;
    document.getElementById('session_menu').style.display = 'none';
}

function selectUser(n) {
    user = lightdm.users[n];
    session = user.session;
    for (var n = 0; n < lightdm.sessions.length; n++) {
        if (lightdm.sessions[n].key == user.session) {
            window.session = lightdm.sessions[n];
            document.getElementById('session').innerHTML = lightdm.sessions[n].name;
            break;
        }
    }
    document.getElementById('user_name').innerHTML = user.display_name;
    document.getElementById('user_image').src = user.image;
    document.getElementById('user_list').style.display = 'none';
}

function passwordSumbit() {
    if (event.keyCode == 13) login();
}

function login() {
    var pw = document.getElementById('user_pw').value;
    lightdm.show_prompt.connect((text, type) => {
        if (type == 0) {
            lightdm.respond(user.username);
        } else if (type == 1) {
            lightdm.respond(pw);
        }
    });
    lightdm.authentication_complete.connect(() => {
        lightdm.start_session(session.key);
    })
    lightdm.authenticate();
}