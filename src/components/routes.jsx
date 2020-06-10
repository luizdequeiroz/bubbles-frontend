import User from './user';
import Post from './post';
import Message from './message';
import Login from './tela-login';
import Register from './tela-register';

import { FaUsers } from 'react-icons/fa';
import { BsFilePost } from 'react-icons/bs';
import { TiMessages } from 'react-icons/ti';
import { FiLogIn } from 'react-icons/fi';
import { FaRegistered } from 'react-icons/fa';

const routes = [
    {
        path: '/',
        component: User,
        name: 'Usuários',
        icon: FaUsers,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
        icon: FiLogIn
    },
    {
        path: '/register',
        component: Register,
        name: 'Register',
        icon: FaRegistered
    },
    {
        path: '/posts',
        component: Post,
        name: 'Postagens',
        icon: BsFilePost
    },
    {
        path: '/messages',
        component: Message,
        name: 'Mensagens',
        icon: TiMessages
    }
];

export default routes;