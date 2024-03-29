---
title: "[꿀팁] 우분투에서 특수코덱 없는 일반 블루투스 스피커/이어폰으로도 고품질 오디오 누리기"
date: 2023-03-09T19:19
thumb: "ubuntu-logo.png"
tags: 
    - ❮꿀팁❯
    - 우분투
    - 리눅스
    - 운영체제
    - 블루투스
---

블루투스 기술은 프로토콜 그 자체도 매우 복잡하지만, 리눅스에서는 특히나 더 엉망입니다. 블루투스 스택과 관리자가 상당히 파편화되어있고 작동 방식도 제각각 다른 경우가 많아서 호환성이 상당히 낮다고 할 수 있습니다. BlueZ에서 인식되지 않는 블루투스 장치가 Blueman에서는 인식되는 경우도 있고, 제가 경험한 바로는 심지어 일반적인 블루투스 마우스조차 사용할 수 없었습니다. '블루투스 장치'로 페어링은 정상적으로 되지만 '마우스'로 인식이 되지 않는 증상이어서 커서를 움직일 수 없는 증상이었습니다. 그마저도 기기를 껐다가 켜면 페어링조차 풀려서 블루투스 장치 목록에 똑같은 이름의 마우스가 여러 개 등록되는 지경까지 이르렀네요.

하드웨어로의 접근이 상당히 개방적인 리눅스의 저주라고 할 수 있는데, 그렇다고 해서 꼭 단점만 있는 것은 아닙니다. 지금 설명드릴 내용은 오히려 그 개방성을 적극적으로 사용해서 기기의 성능을 향상시키는 사례입니다.

일반적으로 블루투스에서는 A2DP 프로파일 오디오 출력에 블루투스 표준 음향 코덱인 SBC(low-complexity Sub Band Codec)를 사용합니다. 최대 44.1kHz 328kbps(48kHz 345kbps)의 비트레이트를 지원하는데요, 스펙은 다음과 같습니다.

- 오디오 채널: Joint Stereo, Stereo, Dual Channel, Mono
- 주파수 밴드 수: 4 또는 8
- 오디오 프레임 당 오디오 블록 수: 4, 8, 12, 16
- 양자화 과정에서 사용되는 최대 및 최소 bitpool: 2 ~ 53

오디오 채널은 기본값으로는 Stereo나 Joint Stereo를 사용하게 되는데 이 모드는 왼쪽 오른쪽 두 채널을 합해 하나의 비트풀을 사용합니다. 하지만 오디오 채널을 Dual Channel모드로 바꿔주게 되면 왼쪽과 오른쪽에 비트풀을 각각 적용하게 되어 비트풀의 숫자를 바꾸지 않더라도 가용 비트레이트가 두 배 가량 증가하게 됩니다. 음질이 그만큼 좋아지게 됩니다. 

러시아의 개발자 [ValdikSS](https://github.com/ValdikSS)는 안드로이드 시스템, 정확히는 AOSP기반 커스텀 롬으로 유명한 [LineageOS에 이런 방식을 적용해서](https://www.lineageos.org/engineering/Bluetooth-SBC-XQ/) 블루투스 오디오 음질을 대폭 향상시키는 데 기여했습니다. ValdikSS는 비트풀값이 다른 코덱 변수와 연동되지 않고 독립된 변수로써 조작이 가능한 점은 A2DP 규격의 설계적 오류인 것 같다고 언급하는데, 덕분에 이를 활용해서 블루투스 음질을 향상시킬 수 있게 된겁니다. 

Dual Channel 모드를 적용한 SBC 코덱은 SBC XQ 또는 SBC Dual Channel HD라고 지칭하는 것으로 보입니다. SBC XQ의 최대 장점은 호스트 기기나 클라이언트 기기가 별도의 독점 유료 오디오 코덱인 LDAC이나 aptX를 탑재하지 않더라도, 모든 블루투스 장치에서 그에 버금가는 (심지어 능가하는) 고품질 오디오를 누릴 수 있다는 점입니다. 제가 실제로 SBC만 지원하는 블루투스 스피커와 이어폰을 리니지OS에서 SBC XQ로 연결해서 음악 감상을 해봤는데 충분히 체감할 수 있는 음질 향상이 있었습니다. 다만 안타깝게도 개발자에게 여러 개인적인 사정이 있었고, 리니지OS도 AOSP에 맞춰 업데이트가 이루어지면서 merge conflict가 발생해 코드 커밋이 abandoned 상태로 남아 되어 더 이상 SBC XQ는 지원되지 않고 있습니다. 그 대신 대안으로 Dual Channel 모드를 사용하지 않고도 더 나은 호환성을 보장하는 음질 향상 방법을 찾아냈다고 개발자가 언급한 적이 있어서 기대는 됩니다만 아직까지 소식이 들리지 않고 있네요.

구글이 점점 플랫폼과 생태계에 대한 통제를 (그리고 보안도) 강화하고 있기 때문에 자유도가 점점 줄어들고 있는 안드로이드에서는 어쩔 수 없지만, 다행히 PC용 리눅스에서는 이 방법을 여전히 직접 사용할 수 있습니다. 개발자 [Kevin Norman](https://github.com/kn100)은 [본인의 블로그](https://kn100.me/improving-bluetooth-audio-linux/)에서 그 방법을 소개하고 있습니다.

일단은 지금 가지고 있는 블루투스 오디오 기기가 LDAC이나 aptX 등의 고음질 코덱을 지원한다면 먼저 그 코덱을 시도해볼 것을 추천하고 있습니다. [pulseaudio-modules-bt](https://github.com/EHfive/pulseaudio-modules-bt/wiki/Packages) 모듈을 설치한 뒤 PulseAudio를 재시작하면 고음질 코덱을 선택할 수 있다고 합니다.

만약 여전히 SBC XQ를 사용하고 싶다면 다음 작업을 해주면 됩니다.

1. 현재 활성화된 블루투스 오디오 기기를 끄고 연결을 해제합니다. 

2. PulseAudio 설정 파일을 텍스트 에디터로 불러옵니다.

    ```
    $ sudo gedit /etc/pulse/default.pa
    ```

3. 다음과 같은 내용을 가진 줄을 찾습니다.

    ```
    load-module module-bluetooth-discover
    ```

4. 해당 줄에 다음과 같이 옵션을 추가합니다. *sbc_cmode=dual*은 Dual Channel 모드를 강제하고, *sbc_min_bp=53*는 최소 비트풀을, *sbc_max_bp=53*는 최대 비트풀을, *sbc_freq=44k*는 44.1KHz 주파수를 강제하게 됩니다.

    ```
    load-module module-bluetooth-discover a2dp_config="sbc_cmode=dual sbc_min_bp=53 sbc_max_bp=53 sbc_freq=44k"
    ```

5. 다음 명령으로 PulseAudio를 재시작합니다.

    ```
    $ pulseaudio -k
    ```

이 방법을 우분투에 적용해 실제로 블루투스 스피커를 사용해본 결과, 역시나 충분히 체감할 수 있는 음질 향상이 있었습니다. 다만 저 설정을 그대로 사용하면 최소와 최대 비트풀이 모두 53으로 고정되다보니 조금이라도 블루투스 신호가 약해지거나 접속이 불안정해지면 음악이 끊기기 시작했습니다. 이런 증상이 생긴다면 *sbc_min_bp* 설정값을 적당히 낮은 숫자로 바꿔주시면 됩니다. 아무래도 비트레이트가 높아 데이터량이 증가하기 때문에 고음질을 유지하기 위해서는 가급적 2.4GHz 주파수 간섭이 없는 환경에서 블루투스 오디오 기기를 가까이 두고 사용하시는게 좋습니다. 와이파이는 5GHz 대역을 사용하고 키보드나 마우스는 유선으로 사용하면 도움이 되겠네요.

---

### 추가 정보

우분투 22.10 버전부터는 PulseAudio가 아니라 PipeWire가 기본 오디오 서버로 교체되면서 이 방법은 사용할 수 없게 되었습니다.

대신 PipeWire에서 자체적으로 SBC XQ를 지원합니다. 블루투스 오디오 장치가 연결된 상태에서, 우분투 시스템 설정에서 '소리' 항목으로 들어가면 'High Fidelity Playback (A2DP Sink, codec SBC-XQ)'를 선택할 수 있습니다.