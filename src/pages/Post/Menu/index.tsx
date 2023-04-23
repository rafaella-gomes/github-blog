import { NavLink, useParams } from "react-router-dom";
import { Links } from "../../../components/Links";
import { MenuContainer, PostParticularities, PostInfos } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendar,
  faComment,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

interface MenuProps {
  title: string | undefined;
  createdAt: string | undefined;
  comments: number | undefined;
  login: string | undefined;
}

export function Menu({ title, createdAt, comments, login }: MenuProps) {
  const { id } = useParams();
  const myDate = createdAt ? new Date(createdAt) : new Date();
  const dateFormatter = new Intl.DateTimeFormat("pt-BR");
  const formattedDate = dateFormatter.format(myDate);

  return (
    <MenuContainer>
      <PostParticularities>
        <section>
          <NavLink to="/">
            {" "}
            {<FontAwesomeIcon icon={faChevronLeft} />}Voltar
          </NavLink>
          <Links
            text=" VER NO GITHUB"
            href={`https://github.com/rafaella-gomes/github-blog/issues/${id}`}
          />
        </section>
        <h2>{title}</h2>

        <PostInfos>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            {login}
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            {formattedDate}
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            {comments} comentários
          </div>
        </PostInfos>
      </PostParticularities>
    </MenuContainer>
  );
}
