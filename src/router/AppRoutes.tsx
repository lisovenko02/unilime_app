import { Navigate, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'

import Layout from '../components/Layout'
import Loader from '../components/Loader'

const Overview = lazy(() => import('../pages/Overview'))
const Users = lazy(() => import('../pages/Users'))
const Settings = lazy(() => import('../pages/Settings'))
const NotFound = lazy(() => import('../pages/NotFound'))

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/overview" replace />} />
          <Route path="overview" element={<Overview />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Error page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
