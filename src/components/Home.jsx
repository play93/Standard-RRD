import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Home 입니다.</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        홈으로
      </button>
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        소개
      </button>
      <button
        onClick={() => {
          navigate("/my/profile");
        }}
      >
        프로필
      </button>
      <button
        onClick={() => {
          navigate("/my/like");
        }}
      >
        좋아요
      </button>
    </div>
  );
};

export default Home;
