# React - router - dom

설치
`yarn add react-router-dom`

```
<BrowserRouter>
  <Routes>
    <Route path="/" element={<div>홈입니다</div>} />
    <Route path="/my" element={<div>마이페이지입니다.</div>}>
      <Route
        path="profile"
        element={<div>마이페이지의 프로필 페이지</div>}
      />
    </Route>
  </Routes>
</BrowserRouter>
```

<br>
이렇게 BrowserRouter 안에 Routes 안에 Route가 있고 Route안에 중첩으로 또 Route를 사용할 수 있음.<br>
이렇게 중첩으로 Route안에 Route를 사용하는 건 주로 하위 페이지에 공통적인 레이아웃을 보여주고 싶을 때. 즉 중첩라우팅이 필요할 때<br>
이 경우, 부모 Route에는 열고 닫는 태그가 있어야 하며, 이 안에 있는 `<Outlet/>`부분을 제외한 모든 부분이 하위 Route들의 공통 레이아웃이 됨.

<br>

## useContext

props-drilling을 막기 위해 사용<br>

#### useContext가 필요한 경우<br>

=> 로그인여부, 테마 설정상태(다크모드/라이트모드)
<br>

상태공유시 props를 사용하면 좋지 않은 건 아님!<br>

#### useContext가 필요하지 않은 경우<br>

=> 단순한 데이터 전달이 필요한 경우<br>
=> 리스트 컴포넌트에서 아이템 컴포넌트로 상태공유하는 경우<br>
