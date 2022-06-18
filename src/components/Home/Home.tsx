import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Blog from '../Blog/Blog';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  return (
    <>
      <Link to='/about' style={{display: 'block'}}>
        Go to About
      </Link>
      <Blog />
    </>
  );
};

export default Home;
