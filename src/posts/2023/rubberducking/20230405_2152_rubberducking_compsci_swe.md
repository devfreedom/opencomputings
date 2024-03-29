---
title: "[러버덕 타임] 관점지향 프로그래밍?"
date: 2023-04-05T21:52
thumb: "rubber-duck.jpg"
tags: 
    - ❮러버덕❯
    - 컴퓨터공학
    - 프로그래밍
    - 자바
    - 백엔드
---

각종 프로그래밍 패러다임 중에서 명령형, 함수형, 절차형, 선언형, 객체지향, 이벤트 주도형 등은 들어봤어도 '관점지향(aspect-oriented) 프로그래밍'은 처음 들어봤습니다. 찾아보니까 독자적인 '프로그래밍 패러다임'이라기보다는 소프트웨어 공학 내지는 프로젝트 설계 차원에서의 '접근법'에 가깝더군요. 저는 자바, 백엔드, 객체지향 프로그래밍을 깊게 해보지 않아서 저에게는 굉장히 낯선 개념인데, 객체지향 프로그래밍을 보조하는 역할으로써 "객체지향 프로그래밍에서의 절차지향(goto)"이라는 표현을 접하니까 이해하기가 그나마 수월하더군요. 간략하게나마 개념을 설명하듯이 적어봤습니다.

---

### 관점지향 프로그래밍이란?

관점지향 프로그래밍(Aspect-oriented programming)이란 여러 이해관계자들의 다양한 관점을 반영하기 위해 횡단 분할 기법을 활용하는 개발 방법론입니다. '횡단(또는 절단) 관심사(cross-cutting concerns)'란 소프트웨어의 핵심 기능 요소들, 즉 '핵심 관심사(core concerns)'들에 영향을 미치지만, 그러한 요소에 캡슐화되는 대신 그것들을 독립적으로 아우르는(cross-cutting) 기능 요소를 의미합니다. 횡단 분할 기법이란 이러한 횡단 관심사들을 핵심 기능들에 비종속적으로 사이사이에 구현하여 모듈화를 증가시키고 재사용성을 추구하며 요구되는 사항들을 세분화해 적용시키는 방법입니다.

사진 중심의 소셜 미디어 서비스를 예로 들어 보겠습니다. 사용자의 관점에서 중요한 것은 다른 사람들에게 내 사진을 보여주고, 다른 사람들의 사진을 보고, 여러 사람들과 공유하고 반응을 나누는 다채로운 사용자 경험이라고 할 수 있겠습니다. 시스템 관리자(sysadmin)의 관점에서 중요한 것은 사용자 데이터와 서비스가 안전하게 관리되는 것입니다. 개발자의 관점에서 중요한 것은 지연이나 오류가 발생하지 않는 효율적이고 기능적인 서비스 설계일 것입니다. 경영자의 관점에서는 광고라던가 유료 구독 서비스처럼 수익을 창출할 수 있는 요소들을 반영하는 것이 중요할 것입니다. 이 경우에는 사용자들이 사진을 업로드하고 그 사진을 플랫폼상에 보여주는 기능, 사진에 붙은 반응 및 공유 횟수를 관리하는 기능 등은 핵심 관심사라고 할 수 있고, 이와 별개로 사용자 계정 정보를 확인하는 기능이라던가 사용자의 접속 상태를 모니터링하는 기능, 맞춤형 표적 광고 기능처럼 모든 핵심 관심사를 관통하여 작동해야 하는 기능들은 횡단 관심사라고 할 수 있습니다. 관점지향 개발은 이런 다양한 요구사항들을 하나의 소프트웨어 내에서 분리하여 구현하는데 효과적이지만, 코드의 수행 흐름이 다소 복잡하여 디버깅이 어렵고, 프로그래밍 언어 자체적으로 지원하지 않아 별도의 라이브러리가 필요하며, 불필요하게 사용되면 상당한 오류를 초래할 수 있다는 단점이 있습니다.

관점지향 개발론에서의 용어는 다음과 같은 것들이 있습니다.
- 애스펙트(Aspect): 관점, 횡단 관심사, 즉 핵심적인 기능에 별도로 얹혀질 모듈을 추상적으로 의미합니다.
- 타겟(Target): 애스펙트가 붙을 대상을 의미합니다.
- 어드바이스(Advice): 추상적 애스펙트를 실제 코드로 구현한 것을 의미합니다.
- 포인트컷(Point Cut): 어드바이스가 '실행'될 애스펙트상의 지점이나 이벤트를 의미합니다.
- 조인포인트(Join Point): 애스펙트나 어드바이스가 '적용'될, 메인 프로그램상의 지점이나 이벤트를 의미합니다.
- 결합(Weaving): 어드바이스를 조인포인트에 연결 및 삽입하는 과정입니다.


### 관점지향 프로그래밍의 예시

예를 들어 증권사의 주식거래 시스템에서 관점지향 개발론을 적용하기 위해서는 우선 비즈니스 로직 차원에서 이해관계자들을 정의하고 그들의 관점 및 요구사항에 대해서 생각해볼 필요가 있습니다.
- 사용자: 원활한 증권 거래, 빠른 응답 속도, 사용 편의성, 서비스 신뢰성, 낮은 거래비용 등
- 경영 부서: 수익 창출, 비용 절감, 마케팅 포인트, 서비스 경쟁력 등
- 전산 부서: 시스템의 가용성, 신뢰성, 안정성, 보안성, 효율성, 유지보수성, 최적화 등

그 다음 각 관점별로 요구되는 핵심 관심사와 횡단 관심사를 고려해봅니다.
- 핵심 관심사: 국내외 증권거래소 및 종목 열람 기능, 시장지표 및 시장상황 관련 정보 제공 기능, 주식 매수/매도 주문 기능, 주식 매매 체결 확인 기능 등
- 횡단 관심사: 증권전산망/금융공동망 접속 기능, 사용자 인증 및 계정 관리 기능, 네트워크 보안 상태 점검 기능, 데이터 무결성 보장 기능, 시스템상의 시간과 거래소 시간 동기화 기능 등

관점지향 프로그래밍은 Spring과 같은 서버사이드 자바 프로그래밍에서 주로 활용되고 있습니다. 자바에서는 주로 AspectJ라는 라이브러리를 사용해 관점지향 프로그래밍을 합니다. 주식거래 시스템의 경우 '주식 매수 주문 전 예수금 확인'을 위해서 다음과 같이 관점지향 프로그래밍을 활용할 수 있습니다. 

```
@Aspect                                                         // AspectJ로 관점지향 개발을 적용하겠다고 선언함.
public class depositChecker {                                   // 무언가를 수행하기 전에 예수금을 확인하는 것이 'depositChecker 횡단 관심사(애스펙트)'임을 나타내고, 이를 코드(어드바이스)로 구현하겠다고 선언함.

	@Pointcut("execution(maxPurchaseCalc() && orderBuy())")     // 'depositChecker라는 횡단 관심사(애스펙트)'는 여기에서 실행된다는 '포인트컷' 지시자를 설정함.
	private void checkDeposit()                                 // 'depositChecker라는 횡단 관심사(애스펙트)'를 '예수금 확인 메소드 checkDeposit()'라는 실제 코드(어드바이스)로 구현함.
    {
        ...
    }                                    

	@Before("checkDeposit()")                                   // 예수금이 충분히 있는지를 확인하는 checkDeposit()이 먼저 수행되어야만,
    public void before(JoinPoint joinpoint)                     // 다음과 같은 '메인 프로그램상의 코드(조인포인트)'를 수행할 수 있다는 조건을 걸어줌. 
    {                                                           
                                                                // (즉, 'depositChecker 횡단 관심사(애스펙트)'를 아래의 메인 기능(조인포인트)들에 '적용' 하겠다는 의미)
        ...
        maxPurchaseCalc();                                      // 일단 예수금이 충분하다고 먼저 확인이 되어야만, 매수 가능한 최대 수량을 계산하는 maxPurchaseCalc() 라던가
        orderBuy();                                             // 해당 주식의 매수 주문을 넣는 orderBuy() 등의 기능을 수행할 수 있다는 의미.
        ...                  
    }

	@After("checkDeposit()")                                    // checkDeposit() 수행 이후 예수금이 충분히 있다는 것이 확인되어야만,
	public void after(JoinPoint, joinpoint)                     // 다음과 같은 '메인 프로그램상의 코드(조인포인트)'를 수행한다는 조건을 걸어줌.
	{ 
                                                                // (즉, 'depositChecker 횡단 관심사(애스펙트)'를 아래의 메인 기능(조인포인트)들에 '적용' 하겠다는 의미)
        ... 
        orderBuy();                                             // 예수금이 충분하다고 확인이 되었으니, 그 이후에 해당 주식의 매수 주문을 넣는 orderBuy()를 수행한다는 의미.
        ...
    }    
}
```

---

무슨 개념인지는 대략적으로 이해가 되지만, 실제로 구현하라고 하면 상당히 헤멜 정도로 이질적이네요. 일단은 이런게 있다는 정도로만 알아두고 나중에 자바로 백엔드 개발을 하게 되면 그때 다시 공부하는걸로...

본문은 다음의 자료들을 참고해서 공부를 한 내용이고, 저는 학생이다보니 틀린 내용이 있을 수 있습니다. 알려주시면 정정하도록 하겠습니다.

- Aspect-oriented programming. In *Wikipedia*.
- Cross-cutting concerns. In *Wikipedia*.
- AspectJ. In *Wikipedia*.
- VMware. (n.d.). [Chapter 6 - Aspect Oriented Programming with Spring](https://docs.spring.io/spring-framework/docs/2.5.5/reference/aop.html). *Spring Source*.