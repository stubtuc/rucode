import React from "react";
import withNavbar from "ui/layouts/withNavbar";
import "ui/styles.css";
import { Button } from "ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { getUserById } from "../../../api/services/users/users.service";

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
            <Link href={`/code/${snippet.id}`}>
              <div className="snippet">
                <p>{ snippet.name }</p>
              </div>
            </Link>
          ))
        }
      </div>
      <Link href="/code/new">
        <Button label="Новый сниппет" />
      </Link>
    </div>
  );
};

export default () => withNavbar(Profile);