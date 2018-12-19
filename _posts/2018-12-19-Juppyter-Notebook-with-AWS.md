---
layout: post
title: Jupyter Notebook with AWS
tags:
  - JupyterNotebook
  - AWS
  - 주피터노트북
  - python
---

# 시작하기 전에

1. AWS가입이 되어있어야 합니다. - 신용카드 등록과 보증금($1)이 청구됩니다.
2. windows의 경우 Git Bash를 설치하셔야 합니다. (Mac의 경우 터미널로 대체 가능)
3. 깃헙 사용자라면 보다 쉽게 하실 수 있습니다.



# AWS에서 EC2 빌리기

> EC2란, Elastic Compute Cloud의 줄임말로, C가 2개 사용되어 EC2라고 지었다고 합니다.



[아마존 웹 서버 콘솔](https://aws.amazon.com/console/)에 로그인합니다.

![콘솔페이지](photo/aws_photo_01.png)

![로그인](photo/aws_photo_02.png)



우측 상단의 **지역 설정**을 확인합니다. 기본 지역은 버지니아주로 설정되어있을 확률이 높습니다. 본인의 거주 국가로 설정하시면 됩니다.

![지역설정](photo/aws_photo_03.png)



좌측 상단의 services에서 EC2를 클릭합니다.

![EC2](photo/aws_photo_04.png)

![EC2_2](photo/aws_photo_05.png)



처음 시작하시는 분들은 Running Instance를 비롯한 모든 내용이 0으로 표시되어 있을 것입니다. Running Instance를 클릭하시면,

![인스턴스표시](photo/aws_photo_06.png)



아래와 같은 화면이 나옵니다. 당연 처음이신 분들은 아무것도 표시되지 않습니다. 좌측 상단에 보이는 **매우 누르고 싶게 생긴** 파란 버튼(Launch Instance)을 누르면, 웹서버 빌리기가 본격적으로 시작됩니다.

![실행중인 인스턴스](photo/aws_photo_07.png)



사고 싶은 컴퓨터의 부품을 하나씩 고르시면 됩니다. 용산 전자 상가에 오신 것처럼! 무료인 것도 있지만, 사양에 따라서 가격이 조금씩 다르니 [가격표](https://aws.amazon.com/ko/ec2/pricing/on-demand/)를 참고하시길 바랍니다. 본인의 입맛에 맞는 모델 명을 기억해두시면 더 편해요! 대부분의 가격이 시간당 500원 정도로, 사용할 때만 켜고 끈다면 커피 한 잔 정도값입니다!

어쨌든 첫 번째는 운영체제 선택입니다. 마찬가지로 원하시는 걸 고르시면 되는데, 저는 처음 공부하는 것이다보니, 우분투를 선택했습니다.

![운영체제선택](photo/aws_photo_08.png)



운영체제를 선택하면, 가격표에서 보았던 사양을 선택할 수 있는 화면이 나옵니다. 원하는 모델 선택 후 우측 하단의 **Next: Configure Instance Details**를 선택하시면

![모델 선택](photo/aws_photo_09.png)



말그래도 세부사항을 확인할 수 있는 화면이 나옵니다. 확인 후, 우측 하단의 **Next: Add Storage**를 선택하세요

![디테일확인](photo/aws_photo_10.png)



저장 공간을 설정하는 화면이 나옵니다. 원하는 만큼의 저장공간을 선택하시되, 마찬가지로 요금이 부과될 수 있으니, 가격에 민감하신 분들은 꼼꼼히 확인해보시길 바랍니다. 우측 하단의 **Next: Add Tags**를 선택하시면, 태그를 추가할 수 있는 화면이 나옵니다.

![저장공간](photo/aws_photo_11.png)



설정 후 우측 하단의 **Next: Configure Security Group**을 클릭합니다.

![태그](photo/aws_photo_12.png)



내가 빌린 컴퓨터의 port를 설정합니다. 기본으로 설정된 22번 포트는 외부에서 본 컴퓨터로 접속할 수 있도록 문을 열어두는 것입니다. 이 security group의 이름을 지정하는데, `launch-wizard-1`는 aws에서 임의로 설정한 이름입니다. 무언가 의미있는 걸로 바꿔두면 보다 직관적이겠죠? 저는 `soryeongk`, `dataitgirls` 등으로 설정했습니다.

![security group](photo/aws_photo_13.png)



본인이 원하는 작업이 있다면 이 security group에서 원하는 port를 열어두어야 합니다. 제 경우에는 브라우저에서 `Jupyter Notebook`을 사용하기 위해 8888번을 열어두려 합니다.

좌측 중간의`Add Rule`을 클릭하셔서, Port의 범위를 적고 Source를 설정해주세요.

![adding rule](photo/aws_photo_14.png)



**Review Instance Launch**를 선택하시면 이제까지의 설정을 한 눈에 볼 수 있는 창이 나옵니다. 상단에 각종 경고문구가 뜨는데, 혹시 모르니 하나씩 잘 읽어보시길 바랍니다. 제 사진 속 경고문구는 22번 port를 열었기 때문에 누구나 접속할 수 있는 상태라는 것을 알려주는 문구입니다. 다른 경고 내용으로는 무료가 아니라는 것, 돈이 나갈 수 있다는 것 등을 알려주는 경우가 많습니다. 이외의 경고내용이 있을 수 있으니 잘 읽어보세요! 이제 **Launch**를 클릭하시면 됩니다.

![영수증](photo/aws_photo_15.png)



Key Pair에 대한 이야기를 하면서 새로운 창이 하나 뜹니다. 개인키를 선택하거나, 처음이신 분들은 생성을 해야합니다.

원하는 이름으로 key name을 설정합니다. 저는 `soryeongk`라고 설정했고, `Download Key Pair`를 클릭하면 `soryeongk.pem`파일이 다운로드 됩니다. 창의 우측 하단의 **Launch Instances**를 클릭하시면 서버 대여가 완료됩니다.

![key pair](photo/aws_photo_16.png)



짜잔~ 축하드립니다~~

![완료](photo/aws_photo_17.png)



# key pair 설정하기

내가 빌린 서버에 접속하기 전에, key pair를 먼저 설정해야 합니다.

> Key Pair는 개인키와 공개키가 짝을 이루는데, 개인키는 나만 가지고 있어야하고, 공개키의 경우는 외부에 공개해도 무방한 키입니다. 공개키에는 특정 개인키와 짝을 이루는 내용이 적혀 있지만, 해당 개인키의 내용이 나와있지는 않습니다.
>
> 공개키와 개인키를 하나의 짝으로 설정하고, 공개키를 내가 원하는 곳(깃헙, aws 서버 등)에 등록합니다. 내가 개인키를 들고 그곳에 찾아가면, 공개키와 개인키가 짝을 이루는지 확인한 뒤 권한을 허하는 방식입니다.

windows의 경우 git bash를 권장드리고, macOS의 경우에는 터미널을 실행합니다.

먼저 다운로드 폴더에 있는 `.pem`파일을 ~/.ssh폴더로 옮깁니다.

`mv ~/Downloads/soryeongk.pem ~/.ssh`

![mv .pem file](photo/gitbash_01.png)



`.pem`파일은 개인키이기 때문에 나만 읽을 수 있도록 설정해야 합니다.

`chmod 400 ~/.ssh/soryeongk.pem`

![chmod 400](photo/gitbash_02.png)



# 서버 접속하기

우리는 Elastic IP Address를 사용하고 있는데, Elastic IP Address는 서버를 켜고 끌 때마다 새로운 주소를 할당받도록 하는 것을 말합니다. 때문에 서버를 켜고 끌 때마다 IP주소를 복사해야합니다.

![IP주소](photo/aws_photo_18.png)



다시 터미널(이하 git bash)에서 `ssh -i ~/.ssh/soryeongk.pem 서버운영체제@IP주소`

![접속](photo/gitbash_03.png)

![yes를 입력](photo/gitbash_04.png)



성공적으로 접속한 화면은 아래와 같습니다! 이제 내가 빌린 서버의 터미널에 있는 것입니다.

![접속 화면](photo/gitbash_05.png)

이곳에서 다시 Key Pair를 저장해야합니다.

`ssh-keygen -t rsa -b 4096 -C 'yours@email.com'`을 입력합니다. 공개키를 만드는 명령어입니다. 

아래 사진과 같이 무언가를 묻는 안내문구가 나오는데 일단 첫 번째 `Enter file in which to save the key`라는 말이 나옵니다. 이는 공개키를 저장할 장소를 입력하라는 말인데, `(/home/ubuntu(내가 빌린 운영체제)/.ssh/id_rsa)`로 되어 있다면, 엔터를 누르세요.

![1](photo/gitbash_06.png)

이번에는 비밀번호를 입력하도록 이야기합니다. 원한다면 비밀번호를 설정해두셔도 좋습니다. 비밀번호를 설정하지 않으실 분들은 엔터를 치세요. 참고로 비밀번호를 입력해도 화면에는 출력되지 않습니다.

![2](photo/gitbash_07.png)

그다음 안내문구는 비밀번호 확인하는 메세지입니다.

![3](photo/gitbash_08.png)

여기까지 입력하면 공개키 생성이 완료됩니다. [RSA 4096]이라고 적힌 어떤 그림이 나오는데 우리들의 공개키를 예쁘게 보여주는 것입니다. 깜찍하죠.

![4](photo/gitbash_09.png)

그 다음에는 아래 명령어를 차례로 입력하세요.

`eval "$(ssh-agent -s)"`

![eval](photo/gitbash_10.png)

`ssh-add ~/.ssh/id_rsa`

![id_rsa](photo/gitbash_11.png)



이제 공개키를 원하는 곳(깃헙 등)에 등록하셔야합니다.

`cat ~/.ssh/id_rsa.pub`을 입력하시는데,  `cat`은 파일의 내용을 보여주는 명령어이고, `id_rsa.pub`가 나의 공개키 입니다. 알 수 없는 문자들이 쭉 나오는데 이것을 복사하여 붙여넣기 하시면 됩니다. 깃헙의 ssh 발급 방법과 동일하죠!

![cat pub](photo/gitbash_12.png)



본인의 깃헙 계정에 로그인 한 뒤, settings에 들어가서 좌측 메뉴 중 **SSH and GPG keys**를 선택합니다.

![github ssh](photo/github_01.png)



그리고 **Nes SSH key**를 클릭하여, 공개키의 내용을 붙여넣고 이름을 설정합니다. **Add SSH key**를 클릭하면 끝!

![ssh](photo/github_02.png)



이제 내가 빌린 서버에서 나의 깃헙으로 커밋과 푸쉬가 가능해졌습니다.

> 만약 특정 repository에서만 권한을 부여하고 싶다면, 해당 repository의 settings에서 똑같은 작업을 실행하시면 됩니다.



# Jupyter Notebook 접속하기

jupyter notebook을 하나하나 설치하지 않고, docker를 통해 한 번에 쉽게 설치하려 합니다.

`sudo apt update`는 설치할 수 있는 프로그램 목록을 업데이트하는 명령어로, 종종 해주는게 좋습니다.

![update](photo/ubuntu_01.png)



본격적으로 docker를 설치합니다. `sudo apt install docker.io`

안내문구는 엔터를 누르시고 넘어가셔도 됩니다. 저는 이미 설치가 완료된 상태라서 짧은 안내문구만 나오고 끝났지만, 첫 설치에서는 무진장 많은 이미지들이 설치될 것입니다.

![docker.io](photo/ubuntu_02.png)



마지막으로 `sudo docker run --rm -p 8888:8888 -e JUPYTER_ENABLE_LAB=yes -v "$PWD":/home/jovyan/work jupyter/datascience-notebook:latest` 를 입력하면 주피터 설치가 완료됩니다.

명령어 중 `"$PWD":/home/jovyan/work`는 현재 디렉토리(`"$PWD"`)와 `home/jovyan/work`를 연결한다는 의미입니다. 특정 폴더와 연결하고 싶다면 `"$PWD"`자리에 원하는 경로를 적거나, 해당 경로로 이동(명령어 `cd 경로`)한 뒤 명령어를 입력하시면 됩니다. 또한, 앞으로 주피터 노트북을 접솔할 때마다 본 명령어를 사용해야하므로, 자주쓰는 명령어로 저장해두거나, 어딘가 메모해두시길 바랍니다.

명령어를 입력하면 아래 사진과 같은 화면이 나오는데, 그 중 `?token=` 뒤의 내용을 복사합니다. 말그대로 token, 비밀번호입니다.

![token](photo/ubuntu_03.png)



브라우저를 열어서 주소창에 `IP주소:8888`을 입력하면 주피터노트북 페이지가 나옵니다. 

![브라우저1](photo/ubuntu_04.png)



비밀번호를 입력하라는 창이 나오면 아까 복사했던 token의 내용을 붙여넣으시면 됩니다.

![브라우저2](photo/ubuntu_05.png)



아래와 같은 화면이 나오면 정상적으로 주피터 노트북에 접속한 것입니다. 매 첫 접속마다 **비밀번호를 저장할까요?**와 같은 메시지가 나오면 **사용하지 않음**을 클릭해주세요. token은 접속때마다 변경되기 때문에 비밀번호를 저장할 필요가 없기 때문입니다.

![주피터](photo/ubuntu_06.png)



짝짝짝~ 이제 로컬보다 좋은 PC에서 빠르고 효율적으로 작업하실 수 있어요오!