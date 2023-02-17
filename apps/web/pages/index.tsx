import React, {useEffect} from "react";
import {getCookie} from "typescript-cookie";
import {movePage, PROFILE, REGISTER} from "routes";

const Page = () => {
    useEffect(() => {
        const userId = getCookie('rucode_user_id');
        if (userId) {
            movePage(PROFILE(userId));
        } else {
            movePage(REGISTER);
        }
    }, []);

    return <div />;
}

export default Page;