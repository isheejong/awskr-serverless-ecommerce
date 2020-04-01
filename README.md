# Korea-ecommerce-store  



If you want to create new git repository based on this source code, following below instruction guided.

1. git clone https://git-codecommit.ap-northeast-2.amazonaws.com/v1/repos/korea-ecommerce-store
2. cd korea-ecommerce-store
3. rm -rf ./git
4. git init
5. git add .
6. git commit -m "first"
7. git remote add origin <new git repositry>
8. git push





## 회원가입

### SMS 인증
> amplify auth add
...
...
 Email based user registration/forgot password: Disabled (Uses SMS/TOTP as an alternative)
 Please specify an SMS verification message: Your verification code is {####}


### 회원 정보
사용자 정보는 최초에 셋업 할때 설정되면 이후 변경 할 수가 없음.
... 
기타 사용자 정의 값은 아래와 같이 추가 할 수 있음.
https://aws.amazon.com/ko/blogs/mobile/aws-amplify-adds-support-for-custom-attributes-in-amazon-cognito-user-pools/

### 회원정보 연동

https://docs.aws.amazon.com/ko_kr/cognito/latest/developerguide/user-pool-lambda-post-confirmation.html
