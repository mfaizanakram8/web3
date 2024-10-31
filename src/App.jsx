import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/Auth/Signup/Signup";
import Login from "./pages/Auth/Login/Login";
import "./App.css";
import LoginOtp from "./pages/Auth/LoginOtp/LoginOtp";
import SignupOtp from "./pages/Auth/SignupOtp";
import Welcome from "./pages/Welcome";
import PrefferredAirports from "./pages/PrefferredAirports";
import AddPayment from "./pages/AddPayment";
import ChoosePayment from "./pages/ChoosePayment";
import EnterCardDetail from "./pages/EnterCardDetail";
import CheckoutPayment from "./pages/CheckoutPayment";
import Accommodation from "./pages/Accommadations";
import Adventure from "./pages/Adventure";
import SubscriptionPage from "./pages/Subscription";
import Profile from "./pages/Profile";
import Preferences from "./pages/Preferences";
import Notification from "./pages/Notification";
import Language from "./pages/Language";
import Origin from "./pages/Origin-Preference/origin";
import Travlers from "./pages/Travelers";
import Destination from "./pages/Destination";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<SignUp />} />
        <Route exact path="/signupotp" element={<SignupOtp />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/loginotp" element={<LoginOtp />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/preferredairports" element={<PrefferredAirports />} />
        <Route exact path="/accommodation" element={<Accommodation />} />
        <Route exact path="/adventure" element={<Adventure />} />
        <Route exact path="/subscription" element={<SubscriptionPage />} />
        <Route exact path="/addpayment" element={<AddPayment />} />
        <Route exact path="/choosepayment" element={<ChoosePayment />} />
        <Route exact path="/entercarddetail" element={<EnterCardDetail />} />
        <Route exact path="/checkoutpayment" element={<CheckoutPayment />} />
        <Route exact path="/profile" element={<Profile />} />

        <Route exact path="/preferences" element={<Preferences />} />
        <Route exact path="/origin" element={<Origin />} />

        <Route exact path="/notifications" element={<Notification />} />
        <Route exact path="/language" element={<Language />} />
        <Route exact path="/travelers" element={<Travlers />} />
        <Route exact path="/destination" element={<Destination />} />
      </Routes>
    </>
  );
}

export default App;
