import { Route, Routes } from 'react-router-dom'
import { MainPage } from './page/Main/Main'
import { PageLayout } from './components/PageLayout/PageLayout'
import { NotFound } from './page/404/NotFound'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
