import User from './user';
import Post from './post';
import Message from './message';

import { FaUsers } from 'react-icons/fa';
import { BsFilePost } from 'react-icons/bs';
import { TiMessages } from 'react-icons/ti';

const routes = [
    {
        path: '/',
        component: User,
        name: 'Usuários',
        icon: FaUsers,
        exact: true
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