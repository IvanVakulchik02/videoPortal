import { Route, Routes } from 'react-router-dom'

import { Home } from './screens/Home'
import { Login } from './screens/Login'
import { NotFound } from './screens/NotFound'
import { Register } from './screens/Register'

export const App = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
