---
title: "[번역] 2. 당신이 형편없는 프로그래머라는 신호들"
date: 2022-09-18T14:00
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

프로그래머가 되기 위한 기초 직업 적성 검사를 통과하신 것을 축하드립니다! (...) 

글 쓰신 분의 기준이 너무 높은 것 같아요. 해당되는 사항 많다고 해서 너무 낙심하지 마시기 바랍니다. 저분은 컴퓨터공학 석박사 출신 베테랑 시니어 개발자임이 분명합니다. 이미 은퇴하셨을수도...  그냥 '전문가의 시선은 이렇구나'라고 생각하고 가볍게 읽어주세요. 누구나 처음부터 전문가일 수는 없잖아요?

지난 글에 이어서 이번에는 '당신이 좋지 못한 프로그래머라는 신호들'을 살펴봅시다.

---

## Signs that you're a bad programmer

## 당신이 형편없는 프로그래머라는 신호들

### 1. Inability to reason about code (코드를 논리적으로 판단하고 추론할 수 없음)

Reasoning about code means being able to follow the execution path ("running the program in your head") while knowing what the goal of the code is.

코드를 논리적으로 사유할 수 있다는 것은 머릿속에서 프로그램을 실행시켜 볼 수 있다는 것, 즉 '코드의 목적을 알면서 그 코드가 실행되는 순서와 경로를 따라갈 수 있다는 것'을 의미합니다.

**Symptoms 증상**

- The presence of "voodoo code", or code that has no effect on the goal of the program but is diligently maintained anyway (such as initializing variables that are never used, calling functions that are irrelevant to the goal, producing output that is not used, etc.)
    - '부두 코드'가 존재하는 경우, 또는 프로그램의 목적과 상관이 없고 영향을 끼치지 않는 코드임에도 꾸준하게 관리되고 있는 경우 (사용하지도 않을 변수를 선언한다던가, 코드의 목적과 상관없는 함수를 호출한다던가, 사용되지 않을 출력물을 만들어낸다던가 등등)
- Executing idempotent functions multiple times (eg: calling the save() function multiple times "just to be sure")
    - 멱등적인 함수들을 여러 번 실행하는 경우 (혹시나 하는 마음에 저장 기능 함수를 여러 번 호출하는 경우)
- Fixing bugs by writing code that overwrites the result of the faulty code
    - 불량 코드의 결과물을 덮어씌우는 코드를 작성하는 방식으로 버그를 고침
- "Yo-Yo code" that converts a value into a different representation, then converts it back to where it started (eg: converting a decimal into a string and then back into a decimal, or padding a string and then trimming it)
    - 값을 다른 형식으로 바꾸고 그것을 원래 형식으로 다시 바꾸는 이른바 '요요 코드'를 작성함. 예를 들면 정수 값을 문자열 값으로 바꾸고 그걸 다시 정수 값으로 바꾼다던가, 문자열을 추가하고 그걸 다시 잘라내는 등.
- "Bulldozer code" that gives the appearance of refactoring by breaking out chunks into subroutines, but that are impossible to reuse in another context (very high cohesion)
    - 한 덩어리를 여러 개의 서브루틴들로 쪼개서 '리팩터링'을 흉내내지만 정작 다른 맥락에서는 재사용이 불가능한 '불도저 코드'를 작성함 (매우 높은 응집도)

**Remedies 치료법**

To get over this deficiency a programmer can practice by using the IDE's own debugger as an aide, if it has the ability to step through the code one line at a time. In Visual Studio, for example, this means setting a breakpoint at the beginning of the problem area and stepping through with the 'F11' key, inspecting the value of variables--before and after they change--until you understand what the code is doing. If the target environment doesn't have such a feature, then do your practice-work in one that does.

이러한 약점을 극복하기 위해서, 프로그래머는 코드를 한 줄씩 실행해 나갈 수 있는 IDE의 디버거를 비서로 활용하는 방법을 연습해야 합니다. 비주얼 스튜디오를 예로 들자면, 문제가 발생하는 지점에서 브레이크포인트를 지정하고 F11키를 한 번씩 눌러서 코드를 단계별로 실행해 나가고, 그 코드가 무슨 짓을 하는지를 이해할 때 까지 변수들의 값이 어떻게 변하는지를 검사해볼 수 있을 겁니다. 만약 당신의 개발 환경에 그런 기능이 없다면 그런 기능이 있는 IDE를 사용하는 연습을 해보십시오.

The goal is to reach a point where you no longer need the debugger to be able to follow the flow of code in your head, and where you are patient enough to think about what the code is doing to the state of the program. The reward is the ability to identify redundant and unnecessary code, as well as how to find bugs in existing code without having to re-implement the whole routine from scratch.

당신이 디버거 없이도 머릿속으로 코드의 흐름을 따라갈 수 있는 수준까지 도달하는 것이 이러한 연습의 목적입니다. 프로그램이 어떠한 상태에 있을 때, 코드가 그 상태에서 도대체 무엇을 하고 있는지를 생각할 수 있을 만큼 침착할 수 있는 그 수준 말이죠. 그렇게 하면 전체 루틴을 처음부터 다시 구현할 필요 없이 기존에 존재하는 코드의 버그를 찾아내고 또 낭비되거나 불필요한 코드를 찾아낼 수 있는 능력을 가질 수 있게 됩니다.

### 2. Poor understanding of the language's programming model (언어의 프로그래밍 모델에 대한 부족한 이해)

Object Oriented Programming is an example of a language model, as is Functional or Declarative programming. They're each significantly different from procedural or imperative programming, just as procedural programming is significantly different from assembly or GOTO-based programming. Then there are languages which follow a major programming model (such as OOP) but introduce their own improvements such as list comprehensions, generics, duck-typing, etc.

객체지향 프로그래밍은 '언어 모델'의 한 예시입니다. 함수형 프로그래밍이나 선언형 프로그래밍처럼요. 이러한 모델은 절차형 프로그래밍이나 명령형 프로그래밍과 매우 다르다고 할 수 있습니다. 절차형 프로그래밍이 어셈블리나 GoTo 기반의 프로그래밍과 완전히 다른 것 처럼요. 그리고 객체지향과 같은 특정한 프로그래밍 모델을 따르기는 하지만 리스트 컴프리헨션이나 덕 타이핑, 제네릭처럼 이를 보완하는 고유한 특징을 가지는 언어들도 있습니다.

**Symptoms 증상**

- Using whatever syntax is necessary to break out of the model, then writing the remainder of the program in their familiar language's style
    - 언어 모델에서 벗어나는 아무 문법이나 사용하고서는, 나머지는 그 언어에 어울리는 방식으로 프로그램을 작성함
- (OOP) Attempting to call non-static functions or variables in uninstantiated classes, and having difficulty understanding why it won't compile
    - 객체지향 프로그래밍에서, 인스턴스화되지 않은 클래스에서 일반 함수 및 변수를 호출하려고 함. 그래놓고서는 왜 컴파일이 되지 않는지 이해를 못함.
- (OOP) Writing lots of "xxxxxManager" classes that contain all of the methods for manipulating the fields of objects that have little or no methods of their own
    - 자기 스스로의 메소드를 거의 포함하지 않는 객체의 필드를 조작하기 위한 모든 메소드를 가지고 있는 온갖 '어쩌고저쩌고Manager' 클래스를 다 작성함
- (Relational) Treating a relational database as an object store and performing all joins and relation enforcement in client code
    - 릴레이션형 데이터베이스를 객체 쇼핑몰처럼 취급하고 모든 릴레이션 강화와 조인 작업을 클라이언트측 코드에서 수행함
- (Functional) Creating multiple versions of the same algorithm to handle different types or operators, rather than passing high-level functions to a generic implementation
    - 함수형 프로그래밍에서 고수준 함수를 일반적인 구현상에 패싱(대입)하는 하는 대신 다양한 형식과 연산자들을 다루기 위한 동일한 알고리즘을 여러 버전으로 만듦
- (Functional) Manually caching the results of a deterministic function on platforms that do it automatically (such as SQL and Haskell)
    - 함수형 프로그래밍에서 SQL이나 하스켈처럼 결정론적 함수의 결과값을 자동으로 캐싱하는 플랫폼에서도 굳이 수동으로 결과값을 캐싱함
- Using cut-n-paste code from someone else's program to deal with I/O and Monads
    - 입출력과 모나드를 다루기 위해서 다른 사람이 작성한 코드를 복사 및 붙여넣기 하는 경우
- (Declarative) Setting individual values in imperative code rather than using data-binding
    - 선언형 프로그래밍에서 명령형 코드에 데이터 바인딩을 사용하는 대신 개별 값을 설정하기

**Remedies 치료법**

If your skills deficiency is a product of ineffective teaching or studying, then an alternative teacher is the compiler itself. There is no more effective way of learning a new programming model than starting a new project and committing yourself to use whatever the new constructs are, intelligently or not. You also need to practice explaining the model's features in crude terms of whatever you are familiar with, then recursively building on your new vocabulary until you understand the subtleties as well. For example:

만약 당신의 실력 부족이 비효율적인 강의나 학습에서 비롯된 것이라면, 그것을 대체할만한 교육자는 바로 컴파일러 그 자체입니다. 지능적인 방법으로든 아니든, 새로운 설계가 무엇이든간에, 새 프로젝트를 시작하고 그것에 몰두하는 것보다 더 효과적인 프로그래밍 모델 학습 방법은 없습니다. 프로그래밍 모델의 기능을 당신이 익숙한 언어로 설명하는 것을 연습할 필요도 있습니다. 그 설명의 미묘함을 이해하고 터득할 때까지 새로운 어휘를 재귀적으로 늘려나가는 것을 하면 됩니다. 예를 들자면,

- Phase 1: "OOP is just records with methods" 
- Phase 2: "OOP methods are just functions running in a mini-program with its own global variables" 
- Phase 3: "The global variables are called fields, some of which are private and invisible from outside the mini-program" 
- Phase 4: "The idea of having private and public elements is to hide implementation details and expose a clean interface, and this is called Encapsulation" 
- Phase 5: "Encapsulation means my business logic doesn't need to be polluted with implementation details"
    - 1단계: 객체지향 프로그래밍은 그저 메소드들이 있는 레코드들입니다.
    - 2단계: 객체지향에서 메소드란 고유한 전역 변수를 가진 '미니 프로그램'에서 작동되는 함수들입니다.
    - 3단계: 전역 변수들은 '필드'라고 불리며, 그 일부는 프라이빗해서 '미니 프로그램' 밖에서는 보이지 않습니다.
    - 4단계: 프라이빗 요소와 퍼블릭 요소로 구분해서 사용하는 이유는 구현의 세부사항을 숨기고 깨끗한 인터페이스를 드러내기 위함인데, 이를 '캡슐화'라고 부릅니다.
    - 5단계: 캡슐화는 "내가 만드는 비즈니스 로직은 코드 구현의 세부사항으로 인해 쓸데없이 복잡해질 필요가 없다"는 것을 의미합니다.

Phase 5 looks the same for all languages, since they are all really trying to get the programmer to the point where he can express the intent of the program without burying it in the specifics of how. Take functional programming as another example:

5단계는 마치 모든 프로그래밍 언어들의 공통 사항처럼 보입니다. 프로그래머가 프로그램이 '어떻게' 작동되고 구현되는지에 대한 온갖 세부사항 없이도 프로그램의 목적을 명료하게 표현할 수 있게 해주기 때문입니다. 함수형 프로그래밍으로 다른 예시를 들어 보겠습니다.

- Phase 1: "Functional programming is just doing everything by chaining deterministic functions together" 
- Phase 2: "When the functions are deterministic the compiler can predict when it can cache results or skip evaluation, and even when it's safe to prematurely stop evaluation" 
- Phase 3: "In order to support Lazy and Partial Evaluation, the compiler requires that functions are defined in terms of how to transform a single parameter, sometimes into another function. This is called Currying" 
- Phase 4: "Sometimes the compiler can do the Currying for me" 
- Phase 5: "By letting the compiler figure out the mundane details, I can write programs by describing what I want, rather than how to give it to me"
    - 1단계: 함수형 프로그래밍은 그저 모든 것을 결정론적 함수들을 사슬처럼 묶어내어 해내는 것입니다.
    - 2단계: 함수가 결정론적이라는 것은 컴파일러가 그 함수의 결과물을 언제 캐싱하거나 평가를 언제 건너뛸 수 있는지를 예측할 수 있다는 것을 의미하고, 심지어 평가를 성급하게 멈추더라도 언제가 안전할지를 예측할 수 있다는 것을 의미합니다.
    - 3단계: 컴파일러가 지연된 평가와 부분적 평가를 지원하기 위해서는 그 함수에서 하나의 매개변수를 (때로는 다른 함수 속으로) 어떻게 변화시키는지가 정의되어 있어야 합니다. 이를 '커리한다(currying)'고 합니다.
    - 4단계: 때때로 컴파일러가 나를 위해서 커리해줍니다.
    - 5단계: 일반적인 세부사항을 컴파일러가 알아서 처리하도록 시킴으로써 나는 프로그램을 '어떻게 프로그램을 나한테 전달해줄지' 대신 '내가 무엇을 원하는지'를 묘사해서 작성할 수 있습니다.


### 3. Deficient research skills / Chronically poor knowledge of the platform's features (자료 조사 기술이 부족함 / 플랫폼의 기능에 대한 지식이 시간이 지나도 개선되지 않음)

Modern languages and frameworks now come with an awesome breadth and depth of built-in commands and features, with some leading frameworks (Java, .Net, Cocoa) being too large to expect any programmer, even a good one, to learn in anything less than a few years. But a good programmer will search for a built-in function that does what they need before they begin to roll their own, and excellent programmers have the skill to break-down and identify the abstract problems in their task, then search for existing frameworks, patterns, models and languages that can be adapted before they even begin to design the program.

현대적 언어와 프레임워크들은 굉장히 폭넓고 깊이있는 내장 커맨드 명령어들과 기능들이 함께 제공됩니다. 자바, 닷넷, 코코아와 같이 업계를 선도하는 일부 프레임워크들은 그 규모가 어마어마해서 아무리 뛰어난 프로그래머라도 제대로 배우기 위해서는 수년이 필요합니다. 하지만 바람직한 프로그래머는 기능이 필요할 때 스스로 개발하기보다는 플랫폼에 내장된 기술을 찾을 줄 알고, 그보다 뛰어난 프로그래머는 먼저 업무에서 생기는 추상적 문제들을 파악하고, 그것을 분해한 다음, 프로그램 설계를 시작하기 전에 여기에 적용할 수 있는 현존 프레임워크와 패턴과 모델과 언어를 찾을 수 있는 기술이 있습니다.

**Symptoms 증상**

These are only indicative of the problem if they continue to appear in the programmer's work long after he should have mastered the new platform.

당신이 새로운 플랫폼에 숙련되었을 시기가 한참 지나도 계속해서 아래의 예시가 나타난다면 그것은 무언가 문제가 있다는 직접적인 신호입니다.

- Re-inventing or laboring without basic mechanisms that are built-into the language, such as events-and-handlers or regular expressions
    - 정규식이라던가 이벤트 핸들러 등 언어 자체에 내장된 기본적인 메커니즘들을 사용하지 않거나 굳이 새로 만들어낼 때
- Re-inventing classes and functions that are built-into the framework (eg: timers, collections, sorting and searching algorithms); Accidental duplication will also happen, proportionate to the size of the framework, so judge by degree. Someone who hand-rolls a linked list might Know What They Are Doing, but someone who hand-rolls their own StrCpy() probably does not. 
    - 타이머, 콜렉션, 정렬, 검색 알고리즘처럼 프레임워크 자체에 내장된 클래스들과 함수들을 굳이 다시 만들 때. 프레임워크의 규모가 커질 수록 실수로 그런 일이 생길 확률도 높아지겠지만, 바람직한 프로그래머라면 본인이 무슨 짓을 하는지 정도는 알고 있을것이다.
- "Email me teh code, plz" messages posted to help forums
    - 개발자 커뮤니티에 "코드 좀 보내주세요"라고 구걸함
- "Roundabout code" that accomplishes in many instructions what could be done with far fewer (eg: rounding a number by converting a decimal into a formatted string, then converting the string back into a decimal)
    - 적은 수의 명령어로도 해낼 수 있는 작업을 굳이 많은 수의 명령어로 범벅된 "로타리 코드"로 작성할 때. 예를 들면 반올림을 위해서 정수를 formatted 문자열로 바꾸고서는 그걸 다시 정수로 바꾼다거나...
- Persistently using old-fashioned techniques even when new techniques are better in those situations (eg: still writes named delegate functions instead of using lambda expressions)
    - 새로운 기술이 훨씬 더 적합함에도 불구하고 굳이 구닥다리 기술을 고집할 때 (람다 표현식을 사용하는 대신 굳이 대리자 함수를 작성한다던가)
- Having a stark "comfort zone", and going to extreme lengths to solve complex problems with primitives
    - 복잡한 문제를 원시적인 방법으로만 해결하려고 온갖 수를 쓰는, 극단적인 현실 안주

**Remedies 치료법**

A programmer can't acquire this kind of knowledge without slowing down, and it's likely that he's been in a rush to get each function working by whatever means necessary. He needs to have the platform's technical reference handy and be able to look through it with minimal effort, which can mean either having a hard copy of it on the desk right next to the keyboard, or having a second monitor dedicated to a browser. To get into the habit initially, he should refactor his old code with the goal of reducing its instruction count by 10:1 or more.

프로그래머는 속도를 늦추지 않고서는 이러한 종류의 지식을 얻을 수 없습니다. 당신은 모든 수단을 동원해서 기능 하나 하나를 만들어내하고자 너무 서둘렀을 가능성이 있죠. 당신은 플랫폼의 기술적 레퍼런스를 가까이 해야 하고, 힘 들이지 않고도 그것을 쉽게 훑어볼 수 있을 정도가 되어야 합니다. 당신의 책상 위에 기술 문서를 놓아두거나 검색 전용으로 브라우저를 띄워놓을 수 있는 듀얼 모니터 등을 활용해보세요. 이러한 습관을 들이기 위해서 당신은 명령어 수를 10분의 1 수준으로 줄이는 것을 목표로 기존 코드를 리팩터링 해볼 수 있습니다.


### 4. Inability to comprehend pointers (포인터를 이해하지 못함)

If you don't understand pointers then there is a very shallow ceiling on the types of programs you can write, as the concept of pointers enables the creation of complex data structures and efficient APIs. Managed languages use references instead of pointers, which are similar but add automatic dereferencing and prohibit pointer arithmetic to eliminate certain classes of bugs. They are still similar enough, however, that a failure to grasp the concept will be reflected in poor data-structure design and bugs that trace back to the difference between pass-by-value and pass-by-reference in method calls.

만약 당신이 포인터를 이해하지 못한다면, 당신이 작성할 수 있는 프로그램의 종류는 굉장히 제한될 것입니다. 포인터의 개념은 복잡한 데이터 구조와 효율적인 API를 가능하게 하기 때문입니다. 메모리 관리를 알아서 해주는 매니지드 언어의 경우 포인터 대신 '레퍼런스'를 사용하는데, 포인터와 비슷하지만 자동으로 레퍼런싱을 해제해주는 기능이 있고 특정 버그 클래스들을 방지하기 위해 포인터 연산을 금지합니다. 당신이 포인터의 개념을 이해하지 못한다는 사실은 '엉성한 데이터 구조 설계'와 '메소드 호출 시 값을 기반으로 패스하거나 레퍼런스 기반으로 패스하는지 그 차이에서 발생하는 버그'에서 드러날 것입니다.

**Symptoms 증상**

- Failure to implement a linked list, or write code that inserts/deletes nodes from linked list or tree without losing data
    - 연결 리스트를 구현할 줄 모르거나, 연결 리스트 또는 트리에서 데이터를 상실하지 않고 노드를 추가하거나 제거하는 코드를 작성할 줄 모름
- Allocating arbitrarily big arrays for variable-length collections and maintaining a separate collection-size counter, rather than using a dynamic data structure
    - 동적 데이터 구조를 사용하는 대신, 가변길이 콜렉션에 임의로 거대한 어레이를 할당한다거나 별도의 콜렉션 크기 카운터를 유지함
- Inability to find or fix bugs caused by mistakenly performing arithmetic on pointers
    - 실수로 포인터에 연산을 수행해서 발생하는 버그를 찾거나 고칠 줄 모름
- Modifying the dereferenced values from pointers passed as the parameters to a function, and not expecting it to change the values in the scope outside the function
    - 함수에 매개변수로 패스된, 포인터로부터 레퍼런스 해제된 값을 변경해놓고서는, 그것이 함수 외부 스코프에서도 값이 변한다는 사실을 알지 못함
- Making a copy of a pointer, changing the dereferenced value via the copy, then assuming the original pointer still points to the old value
    - 포인터의 복사본을 만들고, 그 복사본을 통해 레퍼런스 해제된 값을 변경해놓고서는, 원래의 포인터가 원래의 값을 참조할것이라고 추측하기
- Serializing a pointer to the disk or network when it should have been the dereferenced value
    - 레퍼런스 해제된 값이어야 함에도 불구하고 포인터를 디스크나 네트워크에 직렬화하기
- Sorting an array of pointers by performing the comparison on the pointers themselves
    - 포인터 어레이를 정렬할 때 포인터 자체들을 비교시켜서 정렬시키기

**Remedies 치료법**

"A friend of mine named Joe was staying somewhere else in the hotel and I didn't know his room number. But I did know which room his acquaintance, Frank, was staying in. So I went up there and knocked on his door and asked him, 'Where's Joe staying?' Frank didn't know, but he did know which room Joe's co-worker, Theodore, was staying in, and gave me that room number instead. So I went to Theodore's room and asked him where Joe was staying, and Theodore told me that Joe was in Room 414. And that, in fact, is where Joe was."

"조셉이라는 제 친구가 있는데요, 조셉이 호텔에서 묵고 있는데 저는 조셉의 방 번호를 몰랐어요. 하지만 저는 조셉의 친구인 프랭크가 어디에 묵고 있는지는 알고 있었죠. 그래서 저는 프랭크가 묵고 있는 방으로 찾아가 문을 두드렸고 물어봤죠. "헤이, 조셉이 묵고 있는 방 번호가 뭐야?" 하지만 프랭크도 알지 못했죠. 대신 프랭크는 조셉의 직장 동료인 시어도어가 어디에 묵고 있는지 알고 있었고, 시어도어의 방 번호를 저에게 줬어요. 그래서 저는 시어도어의 방으로 가서 조의 방 번호를 물어봤고 그로부터 결국 조셉이 414번방에 묵고 있다는 사실을 알아낼 수 있었어요."

Pointers can be described with many different metaphors, and data structures into many analogies. The above is a simple analogy for a linked list, and anybody can invent their own, even if they aren't programmers. The comprehension failure doesn't occur when pointers are described, so you can't describe them any more thoroughly than they already have been. It fails when the programmer then tries to visualize what's going on in the computer's memory and gets it conflated with their understanding of regular variables, which are very similar. It may help to translate the code into a simple story to help reason about what's going on, until the distinction clicks and the programmer can visualize pointers and the data structures they enable as intuitively as scalar values and arrays.

포인터는 매우 다양한 비유법으로 설명될 수 있고, 데이터 구조 역시 마찬가지입니다. 위의 이야기는 '연결 리스트'를 설명하는 간단한 예시입니다. 프로그래머가 아니어도 나름대로 비유는 하나쯤 만들 수 있죠. 포인터를 이해하는 데 실패한다는 것은 '포인터가 무엇인지를 이미 기존에 있는 설명 그 이상으로 더이상 설명할 수 없을 때' 나타나는 것이 아닙니다. 대신 프로그래머가 컴퓨터 속의 메모리에서 무슨 일이 일어나는지를 시각화하고 그것을 일반적인 변수에 대한 이해와 연결지으려고 할 때 발생하죠. 그 두가지 개념은 정말 비슷하거든요. 두 개념의 차이점이 명확하게 와닿아서 포인터와 그것이 가능하게 하는 데이터 구조를 스칼라 값과 어레이로 명확하게 시각화할 수 있을때 까지, 작성된 코드를 간단한 이야기 형태로 바꾸어서 실제로 메모리 내부에서 그것이 어떻게 작동되는지를 생각해보는 것이 도움이 될 수 있습니다.


### 5. Difficulty seeing through recursion (재귀 구조를 잘 파악하지 못함)

The idea of recursion is easy enough to understand, but programmers often have problems imagining the result of a recursive operation in their minds, or how a complex result can be computed with a simple function. This makes it harder to design a recursive function because you have trouble picturing "where you are" when you come to writing the test for the base condition or the parameters for the recursive call.

재귀라는 개념은 이해하기 쉽지만, 프로그래머들은 머릿속에서 재귀 연산의 결과를 상상하는데 어려움을 겪고는 합니다. 또는 복잡한 결과물이 하나의 단순한 함수로 처리될 수 있다는 것을 말이죠. 재귀 호출의 매개변수라던가 기저 조건의 테스트를 작성할 때 당신이 '지금 어디에 있는지'를 생각해내는데 어려움을 겪기 때문에 이러한 점은 재귀 함수 설계를 더욱 어렵게 만듭니다.


**Symptoms 증상**

- Hideously complex iterative algorithms for problems that can be solved recursively (eg: traversing a filesystem tree), especially where memory and performance is not a premium
    - 재귀적으로 해결될 수 있는 문제에다가 끔찍하게 복잡한 반복문 알고리즘을 사용함. 특히나 메모리와 성능이 여유롭지 않을 경우에. 예를 들면 파일시스템 트리를 가로지르는 경우라던가.
- Recursive functions that check the same base condition both before and after the recursive call
    - 재귀 호출의 전과 후에 동일한 기저 조건을 점검하는 재귀 함수를 작성
- Recursive functions that don't test for a base condition
    - 기저 조건을 점검하지 않는 재귀 함수를 작성
- Recursive subroutines that concatenate/sum to a global variable or a carry-along output variable
    - 전역 변수 또는 carry-along 출력 변수에 연쇄적으로 연결 또는 추가하는 재귀적 서브루틴을 작성
- Apparent confusion about what to pass as the parameter in the recursive call, or recursive calls that pass the parameter unmodified
    - 변경되지 않은 매개변수를 패스하는 재귀 호출을 작성하거나, 재귀 호출에 무엇을 매개변수로써 패스해야할지 혼동하는 경우
- Thinking that the number of iterations is going to be passed as a parameter
    - 반복 횟수가 매개변수로써 패스될 것이라는 생각을 함

**Remedies 치료법**

Get your feet wet and be prepared for some stack overflows. Begin by writing code with only one base-condition check and one recursive call that uses the same, unmodified parameter that was passed. Stop coding even if you have the feeling that it's not enough, and run it anyway. It throws a stack-overflow exception, so now go back and pass a modified copy of the parameter in the recursive call. More stack overflows? Excessive output? Then do more code-and-run iterations, switching from tweaking your base-condition test to tweaking your recursive call until you start to intuit how the function is transforming its input. Resist the urge to use more than one base-condition test or recursive call unless you really Know What You're Doing.

재귀 함수와 호출을 한번 직접 시도해 보세요. 스택 오버플로우 오류가 발생할 것을 각오하시구요. 오직 하나의 기저 조건 점검을 가지는, 변경되지 않고 동일한 패스된 매개변수를 사용하는 하나의 재귀 호출을 작성하는 것에서 시작하세요. 충분하지 않다는 기분이 들더라도 일단 코딩을 멈추고, 실행을 해보세요. 스택 오버플로우 오류를 뱉을 것입니다. 그렇다면 다시 되돌아가서 재귀 호출에서 매개변수의 변경된 복사본을 패스해보세요. 스택 오버플로우가 더 생긴다고요? 출력값이 지붕을 뚫나요? 그렇다면 '코드 후 실행' 과정을 더욱 여러번 해 보세요. 재귀 함수가 입력값을 어떻게 변화시키는지 그 과정을 직감할 때 까지 기저 조건 테스트를 바꿔본다던가 재귀 호출을 바꿔보세요. 확실하게 이해가 되기 전까지는 하나 이상의 기저 조건 테스트 또는 재귀 호출을 자제하세요.

Your goal is to have the confidence to jump in, even if you don't have a complete sense of "where you are" in the imaginary recursive path. Then when you need to write a function for a real project you'd begin by writing a unit test first, and proceeding with the same technique above.

재귀 경로를 머릿속에서 떠올리고 '내가 어디에 있는지'를 완전하게 감을 잡지 못하더라도 일단 시도를 해 보는 자신감을 가지는 것이 목적입니다. 그리고 나서 당신이 실제 프로젝트에서 재귀 함수를 작성해야 될 때, 유닛 테스트를 먼저 작성하는 것으로 시작해서 위에서 언급한 동일한 수법을 사용하면 됩니다.


### 6. Distrust of code (코드에 대한 불신)

**Symptoms 증상**

- Writing IsNull() and IsNotNull(), or IsTrue(bool) and IsFalse(bool) functions
    - IsNull(), IsNotNull(), IsTrue(bool), IsFalse(bool)과 같은 함수를 작성함
- Checking to see if a boolean-typed variable is something other than true or false
    - 불린 타입 변수가 혹시 true/false 이 외의 값인지 확인하기

**Remedies 치료법**

Are you being paid by the line? Are you carrying over old habits from a language with a weak type system? If neither, then this condition is similar to the inability to reason about code, but it seems that it isn't reasoning that's impaired, but trust and comfort with the language. Some of the symptoms are more like "comfort code" that doesn't survive logical analysis, but that the programmer felt compelled to write anyway. The only remedy may be more time to build up familiarity.

당신은 코드의 분량에 비례해서 월급을 받습니까? 취약한 타입 체계를 가진 언어를 사용하던 습관을 계속하고 계십니까? 만약 둘 다 아니라면, 이러한 증상은 코드를 판단하는 능력이 없는 것과 유사합니다. 하지만 정말로 논리적 사고에 문제가 있다기 보다는 언어에 대한 확신과 신뢰가 부족한 것으로 보이는군요. 논리적 분석을 합격하지 못하는 '현실 안주형 코드'임에도 타성에 젖어 작성한 것에 가까운데. 익숙해질 때까지 시간이 필요한 것이 유일한 해결책이겠네요.

---

첫번째 글만 읽었을 때는 가벼운 내용의 개발자 유머 시리즈인줄 알았는데, 점점 읽고 번역을 하고 자문자답을 하다 보니 다양한 예시와 논리적 분석을 통해 조언을 해주는 진지한 글이었군요. 스스로를 확인해보고 부족한 점을 개선할 수 있는 계기를 마련해주는 유익한 글입니다.