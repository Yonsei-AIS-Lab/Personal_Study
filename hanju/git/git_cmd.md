# 기본
 git --version
 git config --global user.email "~@naver.com"
 git config --global user.name "이름"

# add (작업폴더 -> staging area)
 git add 파일명
 git add 파일명1 파일명2
 git add . 

# commit (staging된 파일 -> repository)
 git commit -m "메세지"

# status (변경된 파일, 스테이징된 파일 등 알려주는 상태창)
 git status

# restore (staging 된 파일 취소)
 git restore --staged 파일명
 git restore .

# log (commit 기록 확인)
 git log --all --oneline
 git log --all --oneline --graph

# diff (과거의 특정 commit과 비교)
 git diff 커밋id
 git diff 커밋id1 커밋id2
 git difftool
 git difftool 커밋id
 git difftool 커밋id1 커밋id2

# branch
 git branch 브랜치이름

# branch 삭제 (merge된 상태이면 -d, 그렇치 않으면 -D)
 git branch -d 브랜치이름
 git branch -D 브랜치이름

# switch (branch로 이동)
 git switch 브랜치이름

# merge (브랜치를 합침 - main과 합쳐짐)
 git merge 브랜치명 

# rebase (브랜치의 시작점을 다른 commit으로 옮김)
1. git switch 새로운브랜치
2. git rebase main
3. git switch main
4. git merge 새로운 브랜치

# restore (파일을 되돌림)
 git restore 파일명 (최근 commit된 상태로 되돌림)
 git restore --source 커밋아이디 파일명 (특정 커밋아이디 시점으로 파일을 되돌림)
 git restore --staged 파일명 (특정 파일 staging 취소)

# revert (commit을 되돌림)
 git revert 커밋아이디

# reset
 git reset --hard 커밋아이디 (커밋이 시작될 때로 되돌림)

 a