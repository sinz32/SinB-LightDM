# 여자친구/비비지 신비 LightDM 테마
© 2023-2025 SinZ, All rights reserved.

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

***

# GFRIEND/VIVIZ SinB LightDM Theme
© 2023-2025 SinZ, All rights reserved.

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
