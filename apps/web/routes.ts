import { createRoute } from 'next-typed-routes';

const routes = {
    PROFILE: (userId: string) => createRoute('/profile/[userId]', { userId }),
    NEW_CODE: createRoute('/code/new'),
    CODE: (snippedId: string) => createRoute('/code/[snippedId]', { snippedId })
}

export const { PROFILE, NEW_CODE, CODE } = routes;