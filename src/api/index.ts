import useSWR from "swr";

export const fetcher = async (path: string) => {
  try {
    const res = await fetch(path);
    return res.json();
  } catch (error) {
    alert(error);
  }
};

export const useLoginMessage = () => useSWR("/login", fetcher);

export const useGetDbMessage = () => useSWR("/sql-data", fetcher);
