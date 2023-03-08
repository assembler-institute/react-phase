import { Route, Routes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';


export const AppRouter = () => {
  return (
    <>
      <Routes>

        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={
          <PrivateRoutes>
            <Routes>
              <Route path="/*" element={<HeroesRoutes />} />

            </Routes>
          </PrivateRoutes>
        } />

      </Routes>

    </>
  )
}
 /*<Route path="/*" element={
          <PrivateRoutes>
            <HeroesRoutes />
          </PrivateRoutes>} />*/