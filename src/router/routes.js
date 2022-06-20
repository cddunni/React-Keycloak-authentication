import { router } from '.';
import ForgotPassoword from '../pages/ForgotPassword';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export const routes = [
    {
        'component': SignIn,
        'link': router.signin
    },
    {
        'component': SignUp,
        'link': router.signup
    },
    {
        'component': ForgotPassoword,
        'link': router.forgotPassword
    },
]
