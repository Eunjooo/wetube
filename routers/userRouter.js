import express from"express";
import routes from "../routes";
import { 
    changePassword, 
    editProfile, 
    getJoin, 
    getLogin, 
    logout, 
    postJoin, 
    postLogin, 
    userDetail, 
    users 
} from "../controllers/userController";



const userRouter = express.Router();

userRouter.get(routes.join, getJoin);
userRouter.get(routes.join, postJoin);

userRouter.get(routes.login, getLogin);
userRouter.get(routes.login, postLogin);

userRouter.get(routes.logout, logout);
userRouter.get(routes.users, users);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail(), userDetail);

export default userRouter;