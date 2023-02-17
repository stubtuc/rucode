import Router from "next/router";
import { createRoute } from 'next-typed-routes';
import { createPageMover } from "next-typed-routes/lib";

export const movePage = createPageMover('', Router);

const routes = {
    REGISTER: createRoute('/register'),
    LOGIN: createRoute('/login'),
    PROFILE: (userId: string) => createRoute('/profile/[userId]', { userId }),
    NEW_CODE: createRoute('/code/new'),
    CODE: (snippedId: string) => createRoute('/code/[snippedId]', { snippedId })
}

export const { REGISTER, LOGIN, PROFILE, NEW_CODE, CODE } = routes;