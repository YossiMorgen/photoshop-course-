import useTitle from '../../Services/useTitle';
import './Home.css';
import img from '../../../Assets/Images/schoolege_3.jpg'
import icon1 from '../../../Assets/Images/schoolege_26.jpg'
import icon2 from '../../../Assets/Images/schoolege_27.jpg'
import icon3 from '../../../Assets/Images/schoolege_28.jpg'
import icon4 from '../../../Assets/Images/schoolege_29.jpg'
import whatsappIcon from '../../../Assets/Images/whatsapp.png'
import { Link } from 'react-router-dom';


function Home() {
  const auth = JSON.parse(sessionStorage.getItem('user'));
  useTitle('home');

  // let user = '';

  // (auth?.data) && (user = auth?.data?.user?.f_name + ' ' + auth?.data?.user.l_name)
  
  
  return (
    <div className="Home">
      <img src={img} />
      <div className='iconsContainer'>
        <Link to={'/coursearea/posts'}>
        <div className='iconContainer'>
          <img src={icon1} />
          <br/>
          <h3>קהילת פוטושופ</h3>
          <p>לשיתוף עבודות הדרכה ושאלות</p>
        </div>
        </Link>
        <Link to={'/coursearea/videos'}>
        <div className='iconContainer'>
          <img src={icon2} />
          <br/>
          <h3>תרגילים</h3>
          <p>תרגילים מסכמים בכל שיעור</p>
        </div>
        </Link>
        <Link to={'/coursearea/'}>
        <div className='iconContainer'>
          <img src={icon3} />
          <br/>
          <h3>חוברת הדרכה</h3>
          <p>מקיפה ומסכמת את כל הנלמד</p>
        </div>
        </Link>
        <Link to={'/coursearea/videos'}>
        <div className='iconContainer'>
          <img src={icon4} />
          <br/>
          <h3>סרטוני הדרכה</h3>
          <p>15 שיעורים 20-25 דקות</p>
        </div>
        </Link>    
      </div>
      <div className='contact'>
        <div className='outCard'>
          <a href='https://wa.me/972584888613?text=hi_can_you_send_me_details_about_it' target='_blank' >
            <div className="card">
              <div className="content">
                <div className="frontContent">
                  <h3 className="title">צור קשר</h3>
                </div>

                <div className="backContent">
                  <p className="description">
                    058-4888613
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      {/* <h2>Welcome {user}</h2> */}
    </div>
  );
}

export default Home;
 