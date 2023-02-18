import {useEffect, useState} from "react";
import {getCookie} from "typescript-cookie";

interface User {
    id: string | 'Unauthorized';
}

export const useUser = () => {
    const [user, setUser] = useState<User>({ id: 'Unauthorized' });

    useEffect(() => {
        const userId = getCookie('rucode_user_id');
        setUser({ id: userId ? userId : 'Unauthorized' });
    }, []);

    return { user };
}