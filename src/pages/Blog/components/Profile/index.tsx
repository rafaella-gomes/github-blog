import { useEffect, useState } from "react";
import { api } from "../../../../lib/axios";
import {
  ProfileContainer,
  ProfileImage,
  ProfileInfos,
  ProfileParticularities,
} from "./style";
import { Links } from "../../../../components/Links";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";

interface User {
  name: string;
  bio: string;
  avatar_url: string;
  followers: number;
  login: string;
  company: string;
}

export function Profile() {
  const [user, setUser] = useState<User | undefined>();

  async function getUser() {
    const response = await api.get("/users/rafaella-gomes");

    setUser(response.data);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <ProfileContainer>
      <ProfileImage src={user?.avatar_url} />
      <ProfileParticularities>
        <section>
          <h1>{user?.name}</h1>
          <Links text="Github" href="https://github.com/rafaella-gomes" />
        </section>
        <p>{user?.bio} </p>
        <ProfileInfos>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            {user?.login}
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            {user?.company}
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            {user?.followers} seguidores
          </div>
        </ProfileInfos>
      </ProfileParticularities>
    </ProfileContainer>
  );
}
