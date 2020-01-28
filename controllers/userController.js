import passport from "passport";
import routes from "../routes";
import User from "../models/User";

//user 관련 모델에 쓰이는 함수(로직) 모음 파일
//globalRouter.js, userRouter.js 파일에 있는 함수에 들어간다.

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};
export const postJoin = async(req, res, next) => {
    // req.body 안의 name, email, password, password2 가져오는 코드
    const {
        body: { name, email, password, password2 }
    } = req;
    // 아래 코드는 비밀번호 확인 올바른지 확인하는 코드. 안 맞으면 오류메세지(400)보내고, 다시 join 페이지로... 맞으면 홈화면으로 redirect
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        // 새로운 사용자 등록한다. mongo 실행해서 db.users.find({}) 입력해보면 회원가입한 사용자들이 DB에 들어가 있는 걸 볼 수 있다.
        try {
            // user 변수에 name, email 등록
            const user = await User({
                name,
                email
            });
            // register 함수는 인자로 주는 pw 이용해서 새로운 인스턴스 만드는 함수
            await User.register(user, password);
            next();
        } catch (error) {
            console.log(error);
            res.redirect(routes.home);
        }
        // To Do : Log user in
    }
};


export const getLogin = (req, res) => res.render("login", { pageTitle: "Log In" });
// globalRouter.js 보면, postJoin 부분에, postJoin 다음에 postLogin 바로 실행해서, 가입 후 바로 로그인 절차 밟도록 한다.
// local(username과 pw이용하는 strategy) 방법으로, authenticate하고, 실패시에는 로그인화면으로, 성공시에는 홈화면으로 간다.
export const postLogin = passport.authenticate("local", {
    failureRedirect: routes.login,
    successRedirect: routes.home
});

// 로그아웃 누르면 로그아웃 처리하고, 홈화면으로 redirect
export const logout = (req, res) => {
    // To Do : Process Logout
    res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });