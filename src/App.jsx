import { Route, Routes } from "react-router-dom"
import SignUp from "./pages/Auth/Signup/Signup"
import Login from "./pages/Auth/Login/Login"
import './App.css'
import LoginOtp from "./pages/Auth/LoginOtp/LoginOtp"
import SignupOtp from "./pages/Auth/SignupOtp"
import Welcome from "./pages/Welcome"
import PrefferredAirports from "./pages/PrefferredAirports"
import AddPayment from "./pages/AddPayment"
import ChoosePayment from "./pages/ChoosePayment"
import EnterCardDetail from "./pages/EnterCardDetail"
import CheckoutPayment from "./pages/CheckoutPayment"
import Accommodation from "./pages/Accommadations"
import Adventure from "./pages/Adventure"
import SubscriptionPage from "./pages/Subscription"
import Profile from "./pages/Profile"
import Notification from "./pages/Notification"
import Language from "./pages/Language"


function App() {

  return (
    <>
      <Routes>
        <Route eaxct path='/' element={<SignUp />} />
        <Route eaxct path='/signupotp' element={<SignupOtp />} />
        <Route eaxct path='/login' element={<Login />} />
        <Route eaxct path='/loginotp' element={<LoginOtp />} />
        <Route eaxct path='/welcome' element={<Welcome />} />
        <Route eaxct path='/preferredairports' element={<PrefferredAirports />} />
        <Route eaxct path='/accommodation' element={<Accommodation />} />
        <Route eaxct path='/adventure' element={<Adventure />} />
        <Route eaxct path='/subscription' element={<SubscriptionPage />} />
        <Route eaxct path='/addpayment' element={<AddPayment />} />
        <Route eaxct path='/choosepayment' element={<ChoosePayment />} />
        <Route eaxct path='/entercarddetail' element={<EnterCardDetail />} />
        <Route eaxct path='/checkoutpayment' element={<CheckoutPayment />} />
        <Route eaxct path='/profile' element={<Profile />} />
        <Route eaxct path='/notifications' element={<Notification />} />
        <Route eaxct path='/language' element={<Language />} />
      </Routes>
    </>
  )
}

export default App
