import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar } from '../AppBar/AppBar';
import { Spinner } from '@chakra-ui/react';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <div>
            Loading...
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="teal.500"
              size="xl"
            />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};
