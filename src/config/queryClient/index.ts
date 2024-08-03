import { QueryClient } from "@tanstack/react-query";

const defaultQueryConfig = {
  staleTime: 1 * (60 * 1000),
  cacheTime: 2 * (60 * 1000),
};

export const queryClient = new QueryClient({
  defaultOptions: { queries: defaultQueryConfig },
});
