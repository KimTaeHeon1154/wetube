import routes from "../routes";
import User from "../models/User";

//user 관련 모델에 쓰이는 함수(로직) 모음 파일
//globalRouter.js, userRouter.js 파일에 있는 함수에 들어간다.

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "Join" });
};
export const postJoin = async(req, res) => {
    // req.body 안의 name, email, password, password2 가져오는 코드
    const {
        body: { name, email, password, password2 }
    } = req;
    // 아래 코드는 비밀번호 확인 올바른지 확인하는 코드. 안 맞으면 오류메세지(400)보내고, 다시 join 페이지로... 맞으면 홈화면으로 redirect
    if (password !== password2) {
        res.status(400);
        res.render("join", { pageTitle: "Join" });
    } else {
        try {
            // user 변수에 name, email 등록
            const user = await User({
                name,
                email
            });
            // register 함수는 인자로 주는 pw 이용해서 새로운 인스턴스 만드는 함수
            await User.register(user, password);
        } catch (error) {
            console.log(error);
        }
        // To Do : Log user in
        res.redirect(routes.home);
    }
};


export const getLogin = (req, res) => res.render("login", { pageTitle: "Log In" });
export const postLogin = (req, res) => {
    // 로그인 성공적이면, 홈으로 redirect
    res.redirect(routes.home);
}

// 로그아웃 누르면 로그아웃 처리하고, 홈화면으로 redirect
export const logout = (req, res) => {
    // To Do : Process Logout
    res.redirect(routes.home);
};

export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });