
import { useQuery } from "react-query";
import { api } from "../services/api";

type Tabulation = {
  fileName: string;
  publicUrl: string;
}

type GetTabulationsResponse = {
  tabulations: Tabulation[];
  totalCount: number;
}

export async function getTabulations(page: number): Promise<GetTabulationsResponse> {
  const { data, headers } = await api.get('/listTabulation', {
    params: {
      clientName: 'ailos',
    },
  });

  let totalCount = Number(headers['x-total-count'])

  const tabulations = data.map((tabulation: Tabulation) => {
    return {
      fileName: tabulation.fileName,
      publicUrl: tabulation.publicUrl,
    }
  });

  return {
    tabulations,
    totalCount,
  };
}

export function useTabulations(page: number) {
  return useQuery(['tabulations', page], () => getTabulations(page), {
    staleTime: 1000 * 5, // 5 seconds
  });
}

