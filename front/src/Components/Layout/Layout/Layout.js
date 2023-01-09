
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Main from '../Main/Main';
import './Layout.css';
import AuthProvider from '../../Context/AuthContext/AuthProvider';

function Layout() {

 
  return (
    <div className="Layout">
      <AuthProvider>
        <Header/>
        <Main/>
        <Footer/>
      </AuthProvider>
    </div>
  );
}

export default Layout;
