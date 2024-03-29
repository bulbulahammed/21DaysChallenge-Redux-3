import { useAppSelector } from '@/redux/hook';
import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface IProps {
  children: ReactNode;
}

export default function PrivateRoutes({ children }: IProps) {
  const { user, isLoading } = useAppSelector((state) => state.user);
  const { pathname } = useLocation();

  if (isLoading) {
    return <p>Loading......</p>;
  }
  if (!user && !isLoading) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  return children;
}
