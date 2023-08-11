import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { login, logout } from '../../store/slices/userSlice';
import { getItemWithExpireDate } from '../../utils/localStorage';
import { LOCALSTORAGE_KEY_TOKEN, LOCALSTORAGE_KEY_USERINFO } from '../../utils/common';
import { useUserDispatch, useUserSelector } from '../../hooks/store';
import Photo from '../atoms/photo';
import { staticServerUri } from '../../utils/serverUri';

export default function NavigationBar() {
  const user = useUserSelector((state) => state.user);
  const dispatch = useUserDispatch();
  const navigator = useNavigate();

  useEffect(() => {
    const token = getItemWithExpireDate(LOCALSTORAGE_KEY_TOKEN);
    if (token === null) {
      dispatch(logout());

      return;
    }

    const userInfoString = localStorage.getItem(LOCALSTORAGE_KEY_USERINFO);
    if (userInfoString === null) {
      dispatch(logout());

      return;
    }

    const userInfo = JSON.parse(userInfoString);
    dispatch(login({
      isLogin: true,
      email: userInfo.email,
    }));
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigator('/');
  };

  return (
    <header className="sticky inset-x-0 top-0 z-50 flex h-20 w-full items-center justify-between bg-white">
      <div className="flex h-full flex-row items-center gap-6">
        <Link
          to="/"
          className="mr-5 h-7"
        >
          <Photo src={`${staticServerUri}/logoKakao.png`} alt="카카오톡 쇼핑하기" />
        </Link>
        <Link
          to="/"
          className="flex h-full items-center border-b-2 border-white font-bold
          hover:border-black"
        >
          홈
        </Link>
        <Link
          to="/"
          className="flex h-full items-center border-b-2 border-white
          hover:border-black hover:font-bold"
        >
          브랜드데이
        </Link>
        <Link
          to="/"
          className="flex h-full items-center border-b-2 border-white
          hover:border-black hover:font-bold"
        >
          베스트
        </Link>
        <Link
          to="/"
          className="flex h-full items-center border-b-2 border-white
          hover:border-black hover:font-bold"
        >
          라이브
        </Link>
        <Link
          to="/"
          className="flex h-full items-center border-b-2 border-white
          hover:border-black hover:font-bold"
        >
          기획전
        </Link>
        <div className="border-l border-stone-300 pl-6">
          <button
            type="button"
            className="font-bold text-kakao-blue"
          >
            <FontAwesomeIcon
              icon={icon({ name: 'bars' })}
            />
            {' '}
            카테고리
          </button>
        </div>
      </div>
      <div className="flex items-center gap-6">
        {user.isLogin ? (
          <>
            <div>
              Welcome,
              {' '}
              {user.email}
              !
            </div>
            <div className="flex gap-6">
              <Link to="/">
                <FontAwesomeIcon
                  icon={icon({ name: 'magnifying-glass' })}
                  size="xl"
                  title="검색"
                />
              </Link>
              <Link to="/">
                <FontAwesomeIcon
                  icon={icon({ name: 'truck' })}
                  size="xl"
                  title="주문 배송 조회"
                />
              </Link>
              <Link to="/cart">
                <FontAwesomeIcon
                  icon={icon({ name: 'cart-shopping' })}
                  size="xl"
                  title="장바구니"
                />
              </Link>
            </div>
            <div className="border-l border-stone-300 pl-6">
              <button onClick={handleLogout}>
                로그아웃
              </button>
            </div>
          </>
        ) : (
          <div>
            <Link to="/login">
              로그인
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
