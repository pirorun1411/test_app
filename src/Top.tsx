import { Link } from "react-router-dom";

export const Top = () => {
  return (
    <main>
      <h2>test_appへようこそ</h2>
      <Link to="/login">ログインする</Link>
    </main>
  );
};
