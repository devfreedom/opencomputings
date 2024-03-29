---
title: "[트러블슈팅] 노트북에서 우분투 시작시 디스플레이 백라이트가 최대 또는 최소로 설정되는 증상 해결하기"
date: 2023-03-14T19:05
thumb: "ubuntu-logo.png"
tags: 
    - ❮트러블슈팅❯
    - 우분투
    - 리눅스
    - 운영체제
---

노트북에서 우분투를 사용하려고 할 때, 하드웨어 구성마다 다르지만 일반적으로 우분투가 부팅될 때 노트북 액정의 백라이트 밝기가 100% 또는 0%로 시작되는 증상이 있습니다. 우분투 우측 상단 설정 팝업에서 백라이트 밝기 슬라이더를 움직이면 백라이트 밝기 조절 자체는 되지만, 내가 지정한 밝기가 저장되지 않고 다음 부팅시에는 최대값 또는 최소값으로 강제되는 증상입니다.

이걸 해결하기 위해서 시도하는 방법들이 몇가지 있는데,

1. GRUB에서 GRUB_CMDLINE_LINUX_DEFAULT 설정값을 바꿔주는 방법
    ```
    GRUB_CMDLINE_LINUX_DEFAULT="quiet splash acpi_backlight=vendor"
    ```

2. xbacklight를 사용하는 방법 (이건 우분투의 경우 그래픽 서버가 X11에서 Wayland로 넘어가면서 무용지물이 됐습니다)

3. 후속작인 acpilight 및 각종 백라이트 조절 유틸리티들을 사용하는 방법

등이 있지만, 실제로 해보면 성공하는 경우가 거의 없습니다. 굉장히 짜증나지만 뭐... 사소한 하드웨어조차 직접 설정해주는 이 맛에 리눅스 쓰는거 아니겠습니까.

한번 설정해둔 백라이트 밝기 설정값을 저장해서 다음 부팅시에도 사용하는게 정상적인 운영체제의 설계고 우분투도 설계는 그렇게 되어 있는걸로 알고 있습니다. 하지만 리눅스의 하드웨어 관리 체계가 다소 복잡하고, 리눅스 특유의 개방성으로 인해 하드웨어와의 호환성이 보장되지 않다 보니, 그 값이 부팅 과정에서 소실되거나, 사용되지 않거나, 아니면 하드웨어를 다시 인식하면서 우분투가 임의로 최대 밝기로 설정하는 버그로 추측됩니다. 그래서 이 호환성을 어렵게 찾아 만들어내느니 그냥 우분투가 시작될 때 적당한 수준의 밝기로 백라이트를 자동으로 낮추도록 예약 작업을 걸어줄 수는 있습니다. 단순하지만 확실한 반쪽짜리 해결책이라고 할 수 있겠네요.

리눅스가 하드웨어에서 인식하는 백라이트 밝기 값은 우리가 일반적으로 생각하는 0~100% 범위의 값이 아닙니다. 그래서 일단은 내가 지정하고자 하는 백라이트 밝기의 실제 raw 데이터를 파악할 필요가 있습니다.

1. 기본값으로 설정하기에 적당한 밝기로 노트북의 백라이트를 조절합니다.

2. 터미널을 열고 다음 명령어를 입력합니다. ####### 라고 표시된 자리에다가 AMD APU를 사용하는 노트북의 경우 **amdgpu_bl0**을, Nvidia GPU를 사용하는 노트북의 경우 **nvidia_0**을, Intel 내장 그래픽을 사용하는 노트북의 경우 **acpi_video0** 또는 **intel_backlight**를 입력해주면 됩니다.
    ```
    $ cat /sys/class/backlight/#######/brightness
    ```

3. 표시되는 숫자가 바로 현재 백라이트의 밝기 설정값입니다. 이 숫자를 기억하세요.

자, 이제 우분투가 시작될 때 백라이트 밝기를 오류값인 '최대값' 대신 내가 원하는 임의의 값으로 바꾸도록 예약 작업, 즉 cron job을 만들어줍시다.

1. 터미널을 열고 루트 권한으로 crontab을 실행시켜줍니다.
    ```
    $ sudo crontab -e
    ```

2. cron 목록 맨 마지막 줄에 다음 명령줄을 추가하고 저장하세요.
    ```
    @reboot (sleep 10 ; echo 133 > /sys/class/backlight/#######/brightness) &
    ```

위에서 언급했듯이 ####### 자리에는 본인 노트북에 장착된 그래픽 제조사에 맞는 값을 입력해주세요.

sleep 뒤의 숫자는 부팅이 되고나서 이 작업을 실행하기까지 임의로 딜레이를 걸어주는 시간을 의미합니다. 우분투가 부팅될 때 백라이트 관련 그래픽 모듈이 가동되기도 전에 이 작업을 실행해버리면 백라이트 밝기는 변경될 수 없으므로, 잠시 기다려줄 필요가 있기 때문입니다. 숫자가 너무 작으면 방금 언급했듯이 백라이트가 변경되지 않는 문제가 발생하고, 숫자가 너무 크면 부팅이 되고 한참 뒤에 밝기가 바뀌는 현상이 생기므로, 3~15 정도의 적당한 값을 입력해보세요. 시행착오가 필요할 수 있습니다.

echo 뒤의 숫자는 부팅시 변경할 기본 백라이트 밝기값입니다. 위에서 알아낸 백라이트 밝기 raw 데이터를 입력해주면 됩니다.

crontab을 저장하고 나서 노트북을 껐다가 켜면, 이제는 우분투가 시작될 때 눈부신 최대 밝기 대신 내가 원하는 적당한 밝기로 바뀌는 것을 확인할 수 있습니다. 문제 해결!