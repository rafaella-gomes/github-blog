import { IssuesContainer } from "./styles";

interface IssuesComponentProps {
  title: string;
  body: string;
  createdAt: string;
}

export function BlogIssues({ title, body, createdAt }: IssuesComponentProps) {
  const myDate = new Date(createdAt);
  const dateFormatter = new Intl.DateTimeFormat("pt-BR");
  const formattedDate = dateFormatter.format(myDate);

  return (
    <IssuesContainer>
      <div>
        <h4>{title}</h4>
        <span>{formattedDate}</span>
      </div>
      <p>{body}</p>
    </IssuesContainer>
  );
}
