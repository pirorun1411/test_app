import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h1>ホームページ</h1>
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
