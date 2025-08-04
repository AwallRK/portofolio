import '../src/app.scss'
import Navbar from './component/Navbar/Navbar';
import Parallax from './component/Parallax/Parallax';
import Profile from './component/Profile/Profile';
import Service from './component/Services/Service';
import Portofolio from './component/Portofolio/Portofolio';
import Contact from './component/Contact/Contact';
import { m } from 'framer-motion';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar />
      <Profile />
    </section>
    <section id='Services'><Parallax type={"services"} /></section>
    <section><Service /></section>
    <section id='Portofolio'><Parallax type={"portofolio"} /></section>
    <section><Portofolio /></section>
    <section id='Contact'><Contact /></section>
    {/* <Test /> */}
  </div>;
};

export default App;
