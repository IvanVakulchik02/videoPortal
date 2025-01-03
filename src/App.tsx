import { Route, Routes } from 'react-router-dom'

import { HomeScreen } from './screens/Home'
import { LoginScreen } from './screens/Login'
import { NotFoundScreen } from './screens/NotFound'
import { ProfileScreen } from './screens/Profile'
import { RegisterScreen } from './screens/Register'
import { VideoInfoScreen } from './screens/VideoInfo'

export const App = (): React.JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/video/:id" element={<VideoInfoScreen />} />
      <Route path="/profile" element={<ProfileScreen />} />
      <Route path="*" element={<NotFoundScreen />} />
    </Routes>
  )
}
