# 여자친구/비비지 신비 LightDM 테마
© 2023-2025 SinZ, All rights reserved.

[여기서](https://sinz32.github.io/SinB-LightDM/) 미리 사용해볼 수 있어요.

![image](https://sinz32.github.io/SinB-LightDM/images/SinB-lightdm-theme.jpg)
![image](https://sinz32.github.io/SinB-LightDM/images/0.jpg)
![image](https://sinz32.github.io/SinB-LightDM/images/1.jpg)

## 사용법

- [lightdm-nody-greeter](https://github.com/JezerM/nody-greeter) 설치
- 이 `repository`를 `clone`한 뒤에, `/usr/share/web-greeter/themes/` 폴더로 이동
```sh
$ git clone https://github.com/sinz32/SinB-LightDM
$ sudo mv SinB-LightDM /usr/share/web-greeter/themes/
```
- `/etc/lightdm/web-greeter.yml` 파일을 열어서 `theme: ???` 부분에 테마 이름 작성
```yml
greeter:
    debug_mode: False
    detect_theme_errors: True
    screensaver_timeout: 0
    secure_mode: True
    theme: SinB-LightDM
    icon_theme:
    time_language:
```
-  `LightDM`이 `nody-greeter`를 `greeter`로 사용하도록 설정
- "/etc/lightdm/lightdm.conf" 파일을 수정해서 nody-greeter를 사용하도록 설정해주세요.
- 앞에 적힌 #이 주석을 의미하니, greeter-session=lightdm-gtk-greeter 앞에 #을 붙여서 주석처리하고, greeter-session=nody-greeter 앞에 있는 #을 지워서 주석을 해제하면 돼요.

## 로그인 버튼 어디갔나요?
- 비밀번호 입력하신 뒤에 엔터치면 로그인됩니다.

***

# GFRIEND/VIVIZ SinB LightDM Theme
© 2023-2025 SinZ, All rights reserved.

- [Demo](https://sinz32.github.io/SinB-LightDM/)

## How to use?

- Install [lightdm-nody-greeter](https://github.com/JezerM/nody-greeter) first
- Clone this `repository` and movt it to `/usr/share/web-greeter/themes/`.
```sh
$ git clone https://github.com/sinz32/SinB-LightDM
$ sudo mv SinB-LightDM /usr/share/web-greeter/themes/
```
- Open `/etc/lightdm/web-greeter.yml` and write the theme's name in the `theme: ???` section.
```yml
greeter:
    debug_mode: False
    detect_theme_errors: True
    screensaver_timeout: 0
    secure_mode: True
    theme: SinB-LightDM
    icon_theme:
    time_language:
```
- Configure `LightDM` to use `nody-greeter` as its `greeter`

## How to Login?
- Press `Enter` key on your keyboard after input password
