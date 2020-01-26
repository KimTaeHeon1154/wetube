// 사용자 인증 (로그인하는 것)과 관련된 파일

import passport from "passport";
import User from "./models/User";


// 아래에 쓰이는 함수들은 passport-local-mongoose 덕분에 쓸 수 있는 지름길 같은 함수들

// 아래 코드로, User.js 파일에서 지정한 (지금의 경우는 LocalStrategy) strategy를 사용한다.
passport.use(User.createStrategy());

// user id만 쿠키에 담는다. (serializeUser 함수로 쿠키에 어떤 정보 담을지 정함.) / 역도 마찬가지다 --> 즉, 쿠키에 id를 담고, 그 id를 사용해서 사용자를 식별한다 (로직은 내부적으로 자동으로 되기 때문에 그냥 외운다!)
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());