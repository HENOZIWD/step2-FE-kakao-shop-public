import { Outlet } from 'react-router-dom';
import NavigationBar from './navigationBar';

export default function MainLayout() {
  return (
    <div className="mx-auto flex w-[80rem] grow flex-col items-center">
      <NavigationBar />
      <Outlet />
    </div>
  );
}
