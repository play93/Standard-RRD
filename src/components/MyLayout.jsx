import { Outlet, useNavigate } from "react-router-dom";

const MyLayout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>여기는 마이 영역입니다.</h2>
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
      <Outlet />
    </div>
  );
};

export default MyLayout;
