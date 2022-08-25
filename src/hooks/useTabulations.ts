
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
    headers: {
      Authorization: '5D9BDEA8C1C7525821999C3898F93',
    }
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

