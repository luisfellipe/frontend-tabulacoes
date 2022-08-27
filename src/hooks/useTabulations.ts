import { useQuery } from "react-query";
import { api } from "../services/api";

type Tabulation = {
  fileName: string;
  publicUrl: string;
};

type GetTabulationsResponse = {
  tabulations: Tabulation[];
  totalCount: number;
};

export async function getTabulations(
  page: number
): Promise<GetTabulationsResponse> {
  const { data } = await api.get("/listTabulation", {
    params: {
      clientName: "ailos"
    }
  });

  let totalCount = data.length;

  const allTabulations = data.map((tabulation: Tabulation) => {
    return {
      fileName: tabulation.fileName,
      publicUrl: tabulation.publicUrl
    };
  });

  const tabulations = [];
  const start = (page * 10) - 10;
  const end = (page * 10);

  for (let i = start; i < end; i++) {
    if (allTabulations[i]) {
      tabulations.push(allTabulations[i]);
    } else {
      break;
    }

    if (tabulations.length === 10) {
      break;
    }
  }

  return {
    tabulations,
    totalCount
  };
}

export function useTabulations(page: number) {
  return useQuery(["tabulations", page], () => getTabulations(page), {
    staleTime: 1000 * 5 // 5 seconds
  });
}
