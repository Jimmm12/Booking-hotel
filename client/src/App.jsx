import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Login from "./pages/Login";
import Layout from "./Layout";
import Register from "./pages/Register";
import axios from "axios";
import Profile from "./pages/Profile";
import { UserContextProvider } from "./UserContext";
import Place from "./pages/Place";
import PlacesFormPage from "./pages/PlacesFormPage";
import PlacePage from "./pages/PlacePage";
import BookingPage from "./pages/BookingPage";
import BookingsPage from "./pages/BookingsPage";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/account/" element={<Profile/>}></Route>
          <Route path="/account/places" element={<Place/>}></Route>
          <Route path="/account/places/new" element={<PlacesFormPage/>}></Route>
          <Route path="/account/places/:id" element={<PlacesFormPage/>}></Route>
          <Route path="/place/:id" element={<PlacePage/>}/>
          <Route path="/account/bookings" element={<BookingsPage/>} />
          <Route path="/account/bookings/:id" element={<BookingPage/>} />

        </Route>
      </Routes>
    </UserContextProvider>
  );
}
export default App;
