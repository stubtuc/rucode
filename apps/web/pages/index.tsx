import React, {useEffect} from "react";
import {movePage, PROFILE, REGISTER} from "routes";
import {useUser} from "hooks/useUser";

const Page = () => {
    const { user } = useUser();
    useEffect(() => {
        if (user.id !== 'Unauthorized') {
            movePage(PROFILE(user.id));
        } else {
            movePage(REGISTER);
        }
    }, [user]);

    return <div />;
}

export default Page;