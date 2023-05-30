## git이란?
- git은 버전관리 소프트웨어로 프로젝트 진행시 작업한 코드를 기록하고 보관할수 있다 프로젝트 진행시 버그가 있거나 실수로 코드를 잘못 올린 경우 이전 버전으로 돌아가 편리하게 코드를 작성할수 있다.

## git init
- 작업할 폴더를 git이 감시할수 있게 하는 명령어이다. git init명령어 실행시 해당 폴더에서 작성한 코드나 파일을 git명령어로 관리할수 있다.

## git add & git commit
- git은 작성한 코드의 수정사항 추가 사항을 각각 기록할수 있는데 이기록을 알려주기 위해 git add, commit 명령어를 사용한다. 이떄 코드나 파일은 staging area, repository라고 부르는 두가지 공간에 나눠서 저장되는데, stage area에 기록할만한 코드나 파일을 git add로 저장하고, git commit명령어로 repository에 저장한다. 

## git status
- git status 명령어는 현재 add하거나 commit한 내용들을 정리한 상태창을 띄워준다.

## git log
- git log는 이제까지 commit 한 파일들을 commit메세지와 commit한 날짜등 기타 정보들과 함께 출력해준다.
- git log --all --oneline 옵션을 추가해 commit메시지만 모아서 확인할수도 있다.

## git diff
- git diff명령어는, commit전에, 이전 commit과 현재 작성한 코드들이 어떤 차이점이 있는지 보여준다.

## git branch
- 프로젝트를 진행하다가 새로운 기능을 만들고 싶을때가 있다. 이때 원래 프로젝트에 코드를 수정하다보면 오류가 발생할 확률이 높고 전 버전으로 가기 곤란하다 이떄 git branch를 사용하면, 분기가 생겨 원래 프로젝트에 지장을 주지 않고 기능을 추가해보거나 수정해보는 코드를 작성할수 있게된다.

- git branch 명령어로 branch를 만들고 
- git switch {branch name} 으로 해당 branch로 전환하여 작업할수 있다.
- git status 입력시 현재 어떤 브랜치로 작업중인지 알수 있다.
- git switch main 혹은 git switch master 명령어로 원래 브랜치로 돌아갈수 있다.
- git branch -d {branch name} 으로 branch를 삭제할수있다.

## git merge
- 생성한 branch에서의 작업에 오류가 없고 완료되었다면 git merge 명령어로  해당 branch를 본 프로젝트에 합쳐 추가되거나 수정된 내용을 반영할수 있다.
-이때, master branch의 코드와 같은 줄, 같은 라인에 수정된 내용이 있으면 merge conflict가 일어나 어떤 코드를 commit시킬지 결정해야한다.

## 원격 repository
-지금까지 배운 내용은 로컬 레포지토리에서만 버전관리를 하는 과정이었다. 하지만 로컬 PC는 개인이 쓰기 떄문에 협업에는 적절하지 않다. 따라서 원격 레포지토리에서 add,commit하는 과정이 필요하고 이를 통해 여러사람이 같은 레포지토리를 편리하게 공유할수 있다.

## git push
- git push는 로컬에서 한 작업을 원격 레포지토리에 적용하거나 업로드하는 역할을 한다

## git push -u {github레포지토리 주소} {branch 이름} 명령어는
- 원격저장주소에 branch를 올리라는 의미이고 -u옵션을 통해 입력한 주소를 저장한다 이때 주소를 매번 입력하기가 귀찮을텐데,

## git remote add origin
- git remote add origin {git 레포지토리 주소} 명령어 를통해
레포지토리 주소를 origin으로 별칭을 붙여 사용할수 있게된다.

## git pull
- 로컬 저장소에서 작업을 하다보면 main과 다른 파일을 저장하게 되는 경우가 있다
- 이때 git pull명령어를 통해 현재 remote repository의 상태를 local로 불러올수 있다.

