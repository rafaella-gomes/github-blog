import { SearchFormContainer } from "./styles";
import { useState, useEffect, useCallback } from "react";
import { BlogIssues } from "../Issues";
import { NavLink } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { api } from "../../../../lib/axios";

interface Issues {
  total_count: number;
  items: {
    title: string;
    body: string;
    created_at: string;
    number: number;
  }[];
}

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormSchemaInput = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const [issues, setIssues] = useState<Issues | undefined>();

  async function getIssue(query = "") {
    const response = await api.get("/search/issues", {
      params: {
        q: `${query}repo:rafaella-gomes/github-blog`,
      },
    });
    setIssues(response.data);
  }

  useEffect(() => {
    getIssue();
  }, []);

  const { register, handleSubmit } = useForm<SearchFormSchemaInput>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchIssues(event: any) {
    const query = event.target.value;
    await getIssue(query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
      <header>
        <h3>Publicações</h3>
        <span>{issues?.total_count} publicações</span>
      </header>
      <input
        type="text"
        placeholder="Buscar Conteúdo "
        {...register("query")}
        onChange={handleSearchIssues}
      />
      <ul>
        {issues?.items.map((item) => (
          <li key={item.number}>
            <NavLink to={`/post/${item.number}`}>
              <BlogIssues
                title={item.title}
                body={item.body}
                createdAt={item.created_at}
              />
            </NavLink>
          </li>
        ))}
      </ul>
    </SearchFormContainer>
  );
}
