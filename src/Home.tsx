import { FC } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLoginMessage } from "./api";

export const Home: FC = () => {
  const navigate = useNavigate();
  const { data, error } = useLoginMessage();

  if (error) {
    return <div>Error</div>;
  }
  if (!data) return <div>loading...</div>;

  return (
    <main>
      <h1>ホームページ</h1>
      <h2>{data.message}</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/article">記事</Link>
          </li>
          <li>
            <button
              onClick={() => {
                navigate("/profile");
              }}
            >
              プロフィール
            </button>
          </li>
        </ul>
      </nav>
    </main>
  );
};
