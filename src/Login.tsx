import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <main>
      <h2>ログイン画面</h2>
      <button
        onClick={() => {
          navigate("/home");
        }}
      >
        login
      </button>
    </main>
  );
};
