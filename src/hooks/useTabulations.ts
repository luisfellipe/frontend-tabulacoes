
import { useQuery, UseQueryOptions } from "react-query";
import { api } from "../services/api";

type Tabulation = {
  id: string;
  name: string;
  email: string;
  link_json: string;
  created_at: string;
}

type GetTabulationsResponse = {
  tabulations: Tabulation[];
  totalCount: number;
}

export async function getTabulations(page: number): Promise<GetTabulationsResponse> {
  const { data, headers } = await api.get('tabulations', {
    params: {
      page,
    }
  });

  let totalCount = Number(headers['x-total-count'])

  const tabulations = data.tabulations.map((tabulation: Tabulation) => {
    return {
      id: tabulation.id,
      name: tabulation.name,
      email: tabulation.email,
      link_json: tabulation.link_json,
      created_at: new Date(tabulation.created_at).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      })
    }
  });

  return {
    tabulations,
    totalCount,
  };
}

export function useTabulations(page: number) {
  return useQuery(['tabulations', page],() => getTabulations(page), {
    staleTime: 1000 * 5, // 5 seconds
  });
}

// function utilizando o serverSides
// export function useUsers(page: number, options: UseQueryOptions) {
//   return useQuery(['users', page],() => getUsers(page), {
//     staleTime: 1000 * 5, // 5 seconds
//     ...options,
//   })
// }

