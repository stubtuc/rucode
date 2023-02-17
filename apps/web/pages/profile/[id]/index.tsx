import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import "ui/styles.css";
import { withNavbar, Button } from "ui";
import { getUserById } from 'api/services/users/users.service';
import { CODE, NEW_CODE } from 'routes';
import {setCookie} from "typescript-cookie";

const Profile = () => {
  const router = useRouter();
  const id = parseInt(router.query.id as string);

  const { data } = useQuery(getUserById, {
    variables: { id },
    skip: !id,
  });

  return (
    <div className="profile-container">
      <div className="user-info">
        <div className="avatar-large" />
        <div className="username">
          <p className="text-large">{ data?.getUserById?.name }</p>
          <span className="level">71 уровень</span>
        </div>
      </div>
      <p className="text-bold">Мои сниппеты</p>
      <div className="snippets-container">
        {
          data?.getUserById?.projects?.map((snippet) => (
            <Link {...CODE(snippet.id)}>
              <div className="snippet">
                <p>{ snippet.name }</p>
              </div>
            </Link>
          ))
        }
      </div>
      <Link {...NEW_CODE}>
        <Button label="Новый сниппет" />
      </Link>
    </div>
  );
};

export default () => withNavbar(Profile);