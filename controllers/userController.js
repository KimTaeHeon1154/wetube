//user 관련 모델에 쓰이는 함수(로직) 모음 파일
//globalRouter.js, userRouter.js 파일에 있는 함수에 들어간다.

export const join = (req, res) => res.render("join", { pageTitle: "Join" });
export const login = (req, res) => res.render("login", { pageTitle: "Log In" });
export const logout = (req, res) => res.render("logout", { pageTitle: "Log Out" });

export const users = (req, res) => res.render("users", { pageTitle: "Users" });
export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "Change Password" });