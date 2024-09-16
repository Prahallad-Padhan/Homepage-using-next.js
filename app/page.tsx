//import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div style={{ display: 'flex' }}>
      
      <div style={{ marginLeft: '200px', width: '100%' }}>
        <Header />
        <Hero />
        <Footer />
      </div>
    </div>
  );
}
