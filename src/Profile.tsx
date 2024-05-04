import { useGetDbMessage } from "./api";

export const Profile = () => {
  const { data, error } = useGetDbMessage();

  if (error) {
    return <div>Error</div>;
  }
  if (!data) return <div>loading...</div>;

  return (
    <main>
      <h1>プロフィール</h1>
      <h2>{data.account[0].password}</h2>
    </main>
  );
};
