import {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Blog from '../Blog/Blog';

const About = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  return (
    <>
      <Link to='/home' style={{display: 'block'}}>
        Go to Home
      </Link>
      <Blog />
    </>
  );
};

export default About;
