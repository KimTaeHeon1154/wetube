import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

// user에 관한 schema 생성
const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarUrl: String,
    facebookId: Number,
    githubId: Number,
});

// schema에 passportLocalMongoose plugin(설치) 해준다/ configuration object(설정 객체)가 뒤에 인자로 오는데, email을 username으로 받아들여, username과 pw를 사용해 로그인 정보를 받겠다는 의미
UserSchema.plugin(passportLocalMongoose, { usernameField: "email" });

const model = mongoose.model("User", UserSchema);

export default model

// 역시 init.js에서 import 해주자!