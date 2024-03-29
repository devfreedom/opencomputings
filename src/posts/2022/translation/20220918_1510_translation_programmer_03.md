---
title: "[번역] 3. 당신이 평범한 프로그래머라는 신호들"
date: 2022-09-18T15:10
thumb: "programmer.jpg"
tags: 
    - ❮번역❯
    - 프로그래밍
    - 컴퓨터공학
---

1. [당신이 프로그래머가 되어서는 안된다는 신호들](https://www.opencomputings.com/20220917_2047_translation_programmer_01)
2. [당신이 형편없는 프로그래머라는 신호들](https://www.opencomputings.com/20220918_1400_translation_programmer_02)
3. [당신이 평범한 프로그래머라는 신호들](https://www.opencomputings.com/20220918_1510_translation_programmer_03)
4. [당신이 유능한 프로그래머라는 신호들](https://www.opencomputings.com/20220918_1534_translation_programmer_04)
5. [당신이 대단한 프로그래머라는 신호들](https://www.opencomputings.com/20220918_1546_translation_programmer_05)

자 이제 수준을 조금 더 높여서, 그래도 직업으로써 프로그래밍을 할 수 있는 개발자들은 어떤 특징들을 가지고 있고, 그 다음 단계로 발전하려면 어떤 노력을 해야 하는지 알아볼까요?

---

## Signs that you are a mediocre programmer
## 당신이 평범한 프로그래머라는 신호들

### 1. Inability to think in sets (집합 개념으로 생각하지 못함)

Transitioning from imperative programming to functional and declarative programming will immediately require you to think about operating on sets of data as your primitive, not scalar values. The transition is required whenever you use SQL with a relational database (and not as an object store), whenever you design programs that will scale linearly with multiple processors, and whenever you write code that has to execute on a SIMD-capable chip (such as modern graphics cards and video game consoles).

명령형 프로그래밍에서 함수형 및 선언형 프로그래밍으로 넘어가려면 기본적으로 스칼라 값이 아닌 데이터의 집합 단위로 연산하는 사고방식을 필요로 합니다. 이러한 변화는 릴레이션형 데이터베이스에서 SQL을 사용(객체 저장소처럼 사용하지 않고)하거나, 다중 프로세서에 선형적으로 스케일링되는 프로그램을 설계할 때나, 그래픽 카드나 콘솔 게임기 등 SIMD를 지원하는 칩에서 실행되는 코드를 작성할 때 필요합니다.

**Symptoms 증상**

The following count only when they're seen on a platform with Declarative or Functional programming features that the programmer should be aware of.

프로그래머가 인지해야 할 선언형 또는 함수형 프로그래밍 기능이 있는 플랫폼에서 다음과 같은 증상이 나타날 때.


- Performing atomic operations on the elements of a collection within a for or foreach loop
    - for 또는 foreach 루프 내부에 있는 콜렉션의 요소들에 원자적 연산을 수행함
- Writing Map or Reduce functions that contain their own loop for iterating through the dataset
    - 데이터셋을 순차적으로 훑기 위해서 자체적인 루프를 가진 Map 또는 Reduce 함수를 작성함
- Fetching large datasets from the server and computing sums on the client, instead of using aggregate functions in the query
    - 쿼리상에서 aggregate 함수를 사용하는 대신, 거대한 데이터베이스를 서버에서 가져와 클라이언트의 컴퓨터에서 sum 연산을 수행함
- Functions acting on elements in a collection that begin by performing a new database query to fetch a related record
    - 연관된 레코드를 가져오는 새로운 데이터베이스 쿼리를 수행하는 방식으로 시작하는, 콜렉션의 요소들에 작용하는 함수를 작성함
- Writing business-logic functions with tragically compromising side-effects, such as updating a user interface or performing file I/O
    - UI를 업데이트하거나 파일 입출력을 수행하는 등의 치명적인 영향을 부작용으로 가진 비즈니스 로직 함수를 작성함 
- Entity classes that open their own database connections or file handles and keep them open for the lifespan of each object
    - 자체적인 데이터베이스 커넥션 또는 파일 핸들을 열고서는 각 객체의 수명 내내 열어두는 개체 클래스를 작성함

**Remedies 치료법**

Funny enough, visualizing a card dealer cutting a deck of cards and interleaving the two stacks together by flipping through them with his thumbs can jolt the mind into thinking about sets and how you can operate on them in bulk. Other stimulating visualizations are:

우습게도, 카지노 딜러가 카드 묶음을 반으로 나누고 엄지로 모서리를 튕겨 카드를 섞어 끼우는 것을 머릿속에서 그려보면, 데이터 집합과 그것을 묶어서 연산하는 것을 바로 떠올리실 수 있을겁니다. 또 다른 흥미로운 시각화를 살펴볼까요:

- freeway traffic passing through an array of toll booths (parallel processing)
    - 톨게이트들을 통과하는 여러 줄의 고속도로 차량 행렬 (병렬 처리)
- springs joining to form streams joining to form creeks joining to form rivers (parallel reduce/aggregate functions)
    - 샘물이 모여 개울이 되고, 개울이 모여 더 큰 개천이 되고, 그것이 모여 강이 되는 것 (병렬 리듀스/어그리게이트 함수)
- a newspaper printing press (coroutines, pipelines)
    - 신문 윤전기 (코루틴, 파이프라인)
- the zipper tag on a jacket pulling the zipper teeth together (simple joins)
    - 지퍼백의 입구를 봉하는 지퍼 (단순 조인)
- transfer RNA picking up amino acids and joining messenger RNA within a ribosome to become a protein (multi-stage function-driven joins, see animation)
    - 단백질을 형성하기 위해 tRNA가 아미노산을 잡고 리보솜 내부의 mRNA를 합치는 과정 (다단계 함수 주도 조인)
- the above happening simultaneously in billions of cells in an orange tree to convert air, water and sunlight into orange juice (Map/Reduce on large distributed clusters)
    - 오렌지 나무에 있는 수십억 개의 세포에서 공기, 물, 햇빛을 오렌지 과즙으로 바꾸기 위해 위와 같은 과정들이 동시에 일어나는 것 (대형 분산 클러스터에서의 맵/리듀스) 

If you are writing a program that works with collections, think about all the supplemental data and records that your functions need to work on each element and use Map functions to join them together in pairs before you have your Reduce function applied to each pair.

콜렉션을 다루는 프로그램을 작성하고 있으시다면, 당신의 함수가 각 요소에 작동하기 위해서 필요한 모든 보충적 데이터와 레코드를 생각해 보십시오. 그리고 리듀스 함수가 각 쌍에 적용되기 전에 맵 함수를 사용해 데이터를 먼저 쌍으로 묶으십시오.


### 2. Lack of critical thinking (비판적 사고의 결여)

Unless you criticize your own ideas and look for flaws in your own thinking, you will miss problems that can be fixed before you even start coding. If you also fail to criticize your own code once written, you will only learn at the vastly slower pace of trial and error. This problem originates in both lazy thinking and egocentric thinking, so its symptoms seem to come from two different directions.

당신의 아이디어를 스스로 비판하고 당신 스스로의 생각에 헛점이 없는지를 찾으려 하지 않는다면, 코딩을 시작하기도 전에 고쳐질 수 있는 문제들을 지나치게 될 겁니다. 그리고 이미 작성된 코드를 비판적으로 검토하지 않는다면 시행착오라는 느린 과정으로만 학습을 하게 될 겁니다. 이러한 문제들은 게으른 생각과 자기중심적 생각에서 비롯되기 때문에 증상 역시 두 방향으로 나타나게 됩니다.

**Symptoms 증상**

- Homebrew "Business Rule Engines"
    - 자체 제작한 '비즈니스 룰 엔진'
- Fat static utility classes, or multi-disciplinary libraries with only one namespace
    - 응집도가 낮은 정적 유틸리티 클래스, 또는 단 하나의 네임스페이스만 가지는 다학제적 라이브러리
- Conglomerate applications, or attaching unrelated features to an existing application to avoid the overhead of starting a new project
    - 집합(복합)적 어플리케이션, 또는 새 프로젝트를 시작하는 부담을 피하기 위해 기존 어플리케이션에다가 무관한 기능들을 추가하기
- Architectures that have begun to require epicycles
    - 본륜을 요구하기 시작한 아키텍쳐들
- Adding columns to tables for tangential data (eg: putting a "# cars owned" column on your address-book table)
    - 별로 관계가 없는 데이터를 위한 컬럼이나 테이블을 추가하기. 예를 들면 주소록 테이블에다가 몇 대의 차량을 보유하는지를 추가한다던가.
- Inconsistent naming conventions
    - 일관적이지 않은 작명 관습
- "Man with a hammer" mentality, or changing the definitions of problems so they can all be solved with one particular technology
    - '망치를 든 남자'같은 사고방식, 또는 문제점들의 정의를 바꿔서 하나의 특정한 기술로 그 문제들을 한꺼번에 해결하려고 하는 짓
- Programs that dwarf the complexity of the problem they solve
    - 해결하려는 문제점의 복잡함을 작아보이게 만드는 프로그램
- Pathologically and redundantly defensive programming ("Enterprisey code")
    - 병적이고 과하게 방어적인 프로그래밍 (이른바 '기업형 코드')
- Re-inventing LISP in XML
    - LISP를 XML로 재창조하려는 행동

**Remedies 치료법**

Start with a book like Critical Thinking by Paul and Elder, work on controlling your ego, and practice resisting the urge to defend yourself as you submit your ideas to friends and colleagues for criticism.

Paul과 Elder가 펴낸 <비판적 사고(Critical Thinking)> 라는 책을 먼저 읽어보세요. 자존심을 다스리는 법을 배우고, 비판적 의견을 듣기 위해 친구나 동료에게 아이디어를 말할 때 스스로를 방어하려는 욕구를 억누르세요.

Once you get used to other people examining your ideas, start examining your own ideas yourself and practice imagining the consequences of them. In addition, you also need to develop a sense of proportion (to have a feel for how much design is appropriate for the size of the problem), a habit of fact-checking assumptions (so you don't overestimate the size of the problem), and a healthy attitude towards failure (even Isaac Newton was wrong about gravity, but we still love him and needed him to try anyway).

다른 사람들이 당신의 아이디어를 검토하는 것에 익숙해지면, 그것을 스스로도 해보고 그 결과도 상상하는 연습을 해보세요. 추가적으로 비례의 균형을 맞추는 감각 (이 정도 문제에는 이 정도의 설계가 적절하겠구나), 추측을 팩트체크하는 습관 (문제의 크기를 과대평가하지 않도록), 실패를 대하는 건전한 태도 (아이작 뉴턴마저도 중력에 관해서 틀렸지만 다시 도전하는 과정이 필요했죠) 등을 기르는 것이 필요합니다.

Finally, you must have discipline. Being aware of flaws in your plan will not make you more productive unless you can muster the willpower to correct and rebuild what you're working on.

마지막으로 당신은 반드시 규율을 가지고 스스로를 잘 단련해야 합니다. 당신의 계획에 있는 결함들을 알아차린다는 것은, 그것을 고치고 다시 쌓아올리려는 의지를 모으지 않는 이상 당신을 생산적으로 만들어주지 못할 겁니다.


### 3. Pinball Programming (핀볼식 프로그래밍)

When you tilt the board just right, pull back the pin to just the right distance, and hit the flipper buttons in the right sequence, then the program runs flawlessly with the flow of execution bouncing off conditionals and careening unchecked toward the next state transition.

만약 당신이 보드를 아주 적절하게 기울인다면, 아주 적절한 거리만큼 핀을 뒤로 당긴다면, 그리고 정확한 순서대로 플리퍼 버튼들을 누른다면, 그 프로그램은 완벽하게 실행문의 흐름을 따라 조건문에 튕겨 부딫히고 다음의 상태 전환을 향해 위태롭게 질주할 것입니다. 

**Symptoms 증상**

- One Try-Catch block wrapping the entire body of Main() and resetting the program in the Catch clause (the pinball gutter)
    - Main()문 전체를 감싸는 하나의 try-catch 블록을 작성하고 catch문에서 프로그램을 리셋함 (핀볼에서의 배수로)
- Using strings/integers for values that have (or could be given) more appropriate wrapper types in a strongly-typed language
    - 강타입(strong-type) 언어에서 보다 더 적절한 wrapper 클래스가 주어질 수 있음에도 불구하고 문자열이나 정수값을 사용함
- Packing complex data into delimited strings and parsing it out in every function that uses it
    - 복잡한 데이터를 '구분자로 구분된 문자열'로 포장하고는 그것을 사용하는 모든 함수에서 매번 문자열을 파싱함
- Failing to use assertions or method contracts on functions that take ambiguous input
    - 모호한 입력값을 받는 함수에 어써션이나 메소드 컨트랙트를 사용하지 않음
- The use of Sleep() to wait for another thread to finish its task
    - 다른 스레드가 작업을 끝내도록 기다릴 때 Sleep() 함수를 사용함
- Switch statements on non-enumerated values that don't have an "Otherwise" clause
    - '그렇지 않으면'문을 가지지 않은 비열거형 값에 switch문을 사용함
- Using Automethods or Reflection to invoke methods that are named in unqualified user input
    - 사용자의 부적격 입력값에서 지명된 메소드를 호출하기 위해 Automethods나 Reflection을 사용함
- Setting global variables in functions as a way to return multiple values
    - 여러개의 값을 리턴하기 위한 방법으로써 함수에 전역 변수를 설정함
- Classes with one method and a couple of fields, where you have to set the fields as the way of passing parameters to the method
    - 매개변수를 메소드에 패싱하기 위한 방법으로 필드가 지정되어야 하는, 하나의 메소드와 몇몇개의 필드로 이루어진 클래스들을 작성함
- Multi-row database updates without a transaction
    - 트랜잭션이 없는 다중 행 업데이트
- Hail-Mary passes (eg: trying to restore the state of a database without a transaction and ROLLBACK)
    - '아베마리아'식 패스. 예를 들면 트랜잭션과 롤백 없이 데이터베이스의 상태를 되돌리려고 시도함.

**Remedies 치료법**

Imagine your program's input is water. It's going to fall through every crack and fill every pocket, so you need to think about what the consequences are when it flows somewhere other than where you've explicitly built something to catch it.

당신이 작성한 프로그램의 입력값이 물이라고 생각해 보세요. 흐르는 물은 당신의 프로그램에 있는 온갖 틈새를 통과하고 온갖 주머니에 담길 것입니다. 그 입력값이 정확히 어디에서 포획되어야 하는지를 명확하게 지정하지 않으면 어딘가 다른 엉뚱한 곳으로 흘러가게 될텐데, 그 때 어떠한 결과가 나타날지에 대해서 당신은 생각해볼 필요가 있습니다.

You will need to make yourself familiar with the mechanisms on your platform that help make programs robust and ductile. There are three basic kinds:

당신은 당신의 프로그램을 튼튼하고 강인하게 만들 수 있도록 도와주는 플랫폼 메커니즘에 익숙해질 필요가 있습니다. 기본적인 세 가지 종류가 있습니다.

- those which stop the program before any damage is done when something unexpected happens, then helps you identify what went wrong (type systems, assertions, exceptions, etc.),
    - 예상치 못한 일이 일어났을 때, 피해가 발생하기 전에 프로그램을 멈추고 무엇이 잘못되었는지를 파악할 수 있도록 도와주는 것 (타입 체계, 어써션, 예외 등)
- those which direct program flow to whatever code best handles the contingency (try-catch blocks, multiple dispatch, event driven programming, etc.)
    - 비상 상황을 가장 잘 다룰 수 있는 코드 쪽으로 프로그램 플로우의 방향을 바꿔주는 것 (try-catch 블록, 다중 디스패치, 이벤트 주도 프로그래밍 등) 
- those which pause the thread until all your ducks are in a row (WaitUntil commands, mutexes and semaphores, SyncLocks, etc.)
    - 모든 오리 인형들이 나란히 줄을 설 때 까지 쓰레드를 잠시 멈추어주는 것 (WaitUntil 명령어, 뮤텍스, 세마포어, SyncLocks 등)

There is also a fourth, Unit Testing, which you use at design time.

하나 더 있네요, 유닛 테스팅. 프로그램을 설계하는 단게에서 사용하시는 거죠.

Using these ought to become second nature to you, like putting commas and periods in sentences. To get there, go through the above mechanisms (the ones in parenthesis) one at a time and refactor an old program to use them wherever you can cram them, even if it doesn't turn out to be appropriate (especially when they don't seem appropriate, so you also begin to understand why).

당신은 이러한 것들을 아주 자연스럽게 할 수 있어야 합니다. 문장을 쓸 때 쉼표나 마침표를 찍는 것 처럼요. 그 경지에 도달하기 위해서 위에서 언급한 메커니즘들을 하나씩 살펴보고 기존의 프로그램에 넣을 수 있는 모든 곳에 주입식으로 적용해 리팩터링 해보세요. 완전히 적절한 방식이 아니어도 괜찮습니다. 적절한 방식이 아닐 때 비로소 당신은 왜 그런 것인지 이해할 수 있게 되니까요.


### 4. Unfamiliar with the principles of security (보안 원칙에 익숙하지 않음)

If the following symptoms weren't so dangerous they'd be little more than an issue of fit-n-finish for most programs, meaning they don't make you a bad programmer, just a programmer who shouldn't work on network programs or secure systems until he's done a bit of homework.

만약 아래와 같은 증상들이 정말 위험한 것이 아니라면, 저런 것들은 그저 '후처리 마감' 정도의 문제였을 겁니다. 당신이 실력 나쁜 프로그래머라는 의미는 아니죠. 다만 숙제를 끝내기 전까지 네트워크 프로그램이나 고도의 보안이 요구되는 시스템을 만져서는 안되는 미완의 프로그래머라는 의미일 뿐입니다.

**Symptoms 증상**

- Storing exploitable information (names, card numbers, passwords, etc.) in plaintext
    - 민감 정보를 평문으로 저장함
- Storing exploitable information with ineffective encryption (symmetric ciphers with the password compiled into the program; trivial passwords; any "decoder-ring", homebrew, proprietary or unproven ciphers)
    - 민감 정보를 취약한 암호화를 통해 저장 (프로그램 속에 컴파일된 패스워드를 사용하는 대칭 키 암호체계, 충분히 안전하지 않은 암호, 디코더 링, audit을 거치지 않거나 검증되지 않았거나 자체 제작한 암호체계)
- Programs or installations that don't limit their privileges before accepting network connections or interpreting input from untrusted sources
    - 네트워크 접속을 허용하기 전에 권한을 제한하지 않거나, 신뢰할 수 없는 출처에서 입력된 입력값을 해석하는 프로그램이나 설치 과정
- Not performing bounds checking or input validation, especially when using unmanaged languages
    - (특히 메모리 관리가 필요한 언매니지드 언어를 사용할 때) 입력값 검증이나 경계 검사를 수행하지 않음
- Constructing SQL queries by string concatenation with unvalidated or unescaped input
    - 검증되지 않거나 이스케이프되지 않은 입력값을 문자열에 연결하는 SQL 쿼리를 구성함
- Invoking programs named by user input
    - 사용자 입력값으로 명시한 프로그램을 호출
- Code that tries to prevent an exploit from working by searching for the exploit's signature
    - 취약점의 시그니쳐를 찾는 방식으로 취약점을 예방하려고 함
- Credit card numbers or passwords that are stored in an unsalted hash
    - 언솔티드 해쉬로 저장된 결제 정보나 암호

**Remedies 치료법**

The following only covers basic principles, but they'll avoid most of the egregious errors that can compromise an entire system. For any system that handles or stores information of value to you or its users, or that controls a valuable resource, always have a security professional review the design and implementation.

앞으로 설명드릴 것들은 아주 기본적인 원칙이지만 그래도 시스템 전체를 위험하게 만드는 지독한 에러들의 대부분을 회피할 수 있게 해줍니다. 사용자 또는 당신에게 귀중한 정보나 중요한 자원을 다루거나 저장하는 그 어떠한 시스템도, 그 설계와 구현은 항상 보안 전문가의 검토를 거쳐야 합니다.

Begin by auditing your programs for code that stores input in an array or other kind of allocated memory and make sure it checks that the size of the input doesn't exceed the memory allocated for storing it. No other class of bug has caused more exploitable security holes than the buffer overflow, and to such an extent that you should seriously consider a memory-managed language when writing network programs, or anywhere security is a priority.

입력값을 배열이나 아니면 다른 종류의 할당 메모리로 저장하는 코드를 검토하는 것에서 시작하세요. 저장될 입력값이 할당 메모리의 크기를 넘지 않도록 확인하세요. 버퍼 오버플로우보다 악용하기 쉬운 버그는 없습니다. 보안이 우선이 되거나 네트워크 중심의 프로그램을 작성할 때는 매니지드 언어를 사용할 것을 강력히 권고합니다.

Next, audit for database queries that concatenate unmodified input into the body of a SQL query and switch to using parameterized queries if the platform supports it, or filter/escape all input if not. This is to prevent SQL-injection attacks.

그리고 변경되지 않은 입력값을 SQL 쿼리의 본체에 연결하는 데이터베이스 쿼리들을 찾아내고, 만약 플랫폼이 지원한다면 매개변수화된 쿼리로 대체하세요. 아니면 그러한 입력값들을 걸러내거나 아니면 아예 전부 이스케이프 처리하세요. SQL 인젝션 공격을 방지하기 위함입니다.

After you've de-fanged the two most infamous classes of security bug you should continue thinking about all program input as completely untrustworthy and potentially malicious. It's important to define your program's acceptable input in the form of working validation code, and your program should reject input unless it passes validation so that you can fix exploitable holes by fixing the validation and making it more specific, rather than scanning for the signatures of known exploits.

이렇게 가장 악명높은 두 가지 보안 결함을 뿌리뽑았다면 당신은 여전히 프로그램의 모든 입력값들이 신뢰할 수 없고 악성이라고 간주해야 합니다. 당신의 프로그램이 받아들일 수 있는 입력값들은 '검증 코드'의 형태로 정의하는 것이 중요합니다. 당신의 프로그램은 그러한 검증을 통과하지 못하는 입력값들은 거부해야 하며, 알려진 취약점의 시그니처를 검색하는 대신 검증 과정을 보다 더 상세하게 만듦으로써 취약한 보안을 고칠 수 있습니다.

Going further, you should always think about what operations your program needs to perform and the privileges it'll need from the host to do them before you even begin designing it, because this is the best opportunity to figure out how to write the program to use the fewest privileges possible. The principle behind this is to limit the damage that could be caused to the rest of the system if an exploitable bug was found in your code. In other words: after you've learned not to trust your input you should also learn not to trust your own programs.

더 나아가서, 당신은 설계를 시작하기 전부터 당신의 프로그램이 작동하려면 어떤 연산들이 필요한지와 그것을 실행하기 위해 호스트로부터 어떠한 권한을 필요로 하는지에 대해서 항상 생각을 해야 합니다. 왜냐하면 그때야 말로 어떻게 하면 권한을 최대한 적게 허용하면서 프로그램을 작성할 수 있을지에 대해서 궁리해볼 최고의 기회이기 때문입니다. 

The last you should learn are the basics of encryption, beginning with Kerckhoff's principle. It can be expressed as "the security should be in the key", and there are a couple of interesting points to derive from it.

마지막으로 당신이 배워야 할 것은 암호화의 기초입니다. 커코프의 원칙(Kerckhoff's principle)을 공부하는 것에서부터 시작하세요. 이 원칙은 "보안은 암호화 키에 달려 있다" 정도로 얘기할 수 있겠네요. 그리고 그 개념에서 이어지는 흥미로운 점들이 몇가지 더 있습니다.

The first is that you should never trust a cipher or other crypto primitive unless it is published openly and has been analyzed and tested extensively by the greater security community. There is no security in obscurity, proprietary, or newness, as far as cryptography goes. Even implementations of trusted crypto primitives can have flaws, so avoid implementations you aren't sure have been thoroughly reviewed (including your own). All new cryptosystems enter a pipeline of scrutiny that can be a decade long or more, and you want to limit yourself to the ones that come out of the end with all their known faults fixed.

먼저, 당신은 거대한 보안 커뮤니티에 의해 철저하게 검사되고 분석되고 공개적으로 출판되지 않은 그 어떠한 암호화 체계 또는 프리미티브를 절대로 신뢰히서는 안됩니다. 적어도 암호화 체계에 있어서 보안은 새로움, 독자성, 무명성 따위와 함께할 수 없습니다. 심지어 신뢰할 수 있는 암호화 프리미티브의 구현조차도 취약점을 가지고 있을 수 있으므로 당신 스스로 및 보안 커뮤니티에 의해 충분히 검토되지 않은 구현 방법은 피하십시오. 모든 새로운 암호화 체계는 10년도 넘는 엄격한 정밀 조사의 파이프라인을 거치는데, 당신은 그 과정을 통해 밝혀진 결함들이 고쳐진 안전한 암호화 체계를 엄선해야 할 것입니다.

The second is that if the key is weak, or stored improperly, then it's as bad as having no encryption at all. If your program needs to encrypt data, but not decrypt it, or decrypt only on rare occasions, then consider giving it only the public key of an asymmetric cipher key pair and making the decryption stage run separately with the private key secured with a good passphrase that the user must enter each time.

또한 만약 암호화 키가 강하지 않거나 부적절하게 저장되었을 경우 그것은 암호화가 전혀 없는 것이나 다름 없습니다. 만약 당신의 프로그램이 데이터를 암호화해야 하지만 굳이 복호화를 할 필요가 없거나 아주 특수한 경우에만 복호화가 필요하다면, 비대칭 암호 체계를 사용해 프로그램에는 공개 키만 부여하고, 강력한 암호를 사용자가 매번 입력하도록 하여 안전한 비공개 키를 사용하는 복호화 단계를 별도로 분리하는 방법도 고려해볼 수 있습니다.

The more is at stake, then the more homework you need to do and the more thought you must put into the design phase of the program, all because security is the one feature that dozens, sometimes millions of uninvited people will try to break after your program has been deployed.

더 많은 것들이 보안상 위험해질수록, 당신이 해야 할 숙제와 설계적 심사숙고는 더욱 더 많이 필요할 것입니다. 왜냐하면 '보안'이라는 것은 당신의 프로그램이 배포된 이후 수십 아니 수백만명의 불청객들이 부숴버리고자 달려드는 것이기 때문입니다.

The vast majority of security failures traceable to code have been due to silly mistakes, most of which can be avoided by screening input, using resources conservatively, using common sense, and writing code no faster than you can think and reason about it.

대부분의 보안 실패는 코딩을 하다가 저지르는 어리석은 실수에서 밝혀집니다. 입력값을 제대로 검사하고, 자원을 보수적으로 사용하고, 상식적으로 생각하고, 당신이 생각과 고민을 하는 속도보다 천천히 신중하게 코딩을 하면 대부분 방지할 수 있는 것들입니다.


### 5. Code is a mess (코드가 엉망이다)

**Symptoms 증상**

- Doesn't follow a consistent naming convention
    - 일관적이지 않은 작명 관습 
- Doesn't use indentation, or uses inconsistent indentation
    - 들여쓰기를 하지 않거나 또는 들여쓰기를 일관적이지 않게 함
- Doesn't make use of whitespace elsewhere, such as between methods (or expressions, see "ANDY=NO")
    - 메소드나 표현식 사이에 화이트스페이스를 사용하지 않음
- Large chunks of code are left commented-out
    - 거대한 덩어리의 코드가 주석이 달리지 않은 채 방치됨

**Remedies 치료법**

Programmers in a hurry (or The Zone) commit all these crimes and come back to clean it up later, but a bad programmer is just sloppy. Sometimes it helps to use an IDE that can fix indentation and whitespace ("pretty print") with a shortcut key, but I've seen programmers who can even bludgeon Visual Studio's insistence on proper indentation by messing around with the code too much.

성급함에 끌려다니는 프로그래머들은 온갖 못된 짓들을 저지르고는 그래도 나중에 수습하려고 합니다. 하지만 후진 프로그래머들은 그저 늘 엉성할 뿐입니다. 들여쓰기나 화이트스페이스를 단축키로 쉽게 고쳐주는 IDE를 사용하는 것이 도움이 되지만, 안타깝게도 코드를 너무 과하게 다뤄서 비주얼 스튜디오가 제공하는 적절한 들여쓰기조차 망가뜨리는 프로그래머들을 저는 본 적이 있습니다.

---

여기서부터는 프로페셔널리즘의 영역이라고 생각되네요. 프로그래밍을 직업으로 삼을 수 있는 수준이라고 해서 저절로 좋은 프로그래머가 되는 것은 아니라는 의미겠죠. 작은 식칼로도 집에서 과일 정도는 깎을 수 있지만 미슐랭 식당 요리사가 되려면 날카롭고 깔끔하게 갈고 닦은 요리용 칼 여러 자루가 필요하듯이, 커리어의 무게에 걸맞는 준비와 노력 그리고 원칙주의가 필요하겠습니다. 저야 뭐 이 글에서 설명하는 내용의 대략적인 개념 정도만 알 뿐, 직업적인 본격 프로그래밍에 있어서는 체험해본 바가 없기 때문에 이정도만 할 수 있어도 대단하겠다는 생각이 듭니다. 저는 열심히 과일부터 깎아나가겠습니다.