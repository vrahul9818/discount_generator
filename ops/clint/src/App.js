import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import OfferForm from './component/coupons/coupons_add';
import User_CouponDisplay from './component/user_coupon_disp/user_coupon_display';
import Coupon_display from './component/display/coupon_display';
import Login from './component/login.jsx/login';
import SignUp from './component/signup_user/signup_user';
import Login_player from './component/player/player_login';
import Player_disp from './component/player/player_disp';
import Navbar from './component/navbar/navbar';

function App() {
  return (
    <div className="App">  

      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path="/" element={<><Login_player/><Login/></>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/offer" element={<OfferForm />} />
          <Route path="/display" element={<Coupon_display />} />
          <Route path="/user_coupon" element={<User_CouponDisplay />} />
          <Route path="/disp_" element={<User_CouponDisplay />} />
          <Route path="/Player_disp" element={<Player_disp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
