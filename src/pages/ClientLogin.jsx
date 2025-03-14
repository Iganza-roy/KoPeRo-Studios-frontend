import { FcGoogle } from 'react-icons/fc';
import logo from '../assets/logo_light.png';
import { useNavigate } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { toast } from 'sonner';

const Login = () => {
  const [inputs, setInputValue] = useState({
    email: '',
    password: '',
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [err, setErr] = useState(null);

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const togglePassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleChange = (e) => {
    setInputValue((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs);

    try {
      await login(inputs);
      toast.success('Logged in Successfully');
      navigate('/');
    } catch (err) {
      setErr('Invalid Email or Password', err);
    }
  };

  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div className='bg-blue bg-opacity-10 rounded-[20px] px-5 py-4 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-[20px] my-[10px]'>
          <img
            src={logo}
            alt='logo'
            className='w-[130px] cursor-pointer hover:scale-105 transition-all duration-300'
            onClick={() => navigate('/')}
          />
          <h1 className='text-4xl font-extrabold '>Log In</h1>
          <div className='flex flex-row space-x-3'>
            <div className='flex flex-row space-x-2 justify-center items-center border border-slate-400  rounded-lg w-[130px]  max-[768px]:w-[100px] h-12 p-3 hover:border-blue cursor-pointer'>
              <FcGoogle className='cursor-pointer text-3xl ' />
              <span className='text-lg hover:text-blue hidden md:block'>
                Google
              </span>
            </div>
            <div className='flex flex-row space-x-2 justify-center items-center border border-slate-400  rounded-lg w-[130px] max-[768px]:w-[100px]  h-12 p-3 hover:border-blue cursor-pointer'>
              <FaLinkedin className=' text-linkedin text-3xl cursor-pointer' />
              <span className='text-lg hover:text-blue hidden md:block'>
                LinkedIn
              </span>
            </div>
            <div className='flex flex-row space-x-2 justify-center items-center border border-slate-400  rounded-lg w-[130px] max-[768px]:w-[100px]  h-12 p-3 hover:border-blue cursor-pointer'>
              <FaXTwitter className='cursor-pointer text-3xl' />
              <span className='text-lg hover:text-blue hidden md:block'>{`Twitter(X)`}</span>
            </div>
          </div>
          <div className='ml-4 flex items-center justify-center gap-x-[1.9rem] w-full'>
            <span className='h-[2px] w-[70px] md:w-full bg-light block'></span>
            <p className='text-center md:w-full'>Or Login Using</p>
            <span className='h-[2px] w-[80px] md:w-full bg-light block'></span>
          </div>
        </div>
        <div className='p-6 w-full'>
          <form
            action=''
            className='flex flex-col justify-center items-center gap-4 w-[100%]'
          >
            <input
              required
              type='text'
              placeholder='Email'
              name='email'
              onChange={handleChange}
              className='p-2 rounded-md bg-slate-50 text-dark w-[300px] md:w-full'
            />
            <div className='flex justify-between items-center bg-slate-50 rounded-md w-[300px] md:w-full py-2 px-[10px] '>
              <input
                required
                type={passwordVisible ? 'text' : 'password'}
                placeholder='Password'
                name='password'
                onChange={handleChange}
                className='text-dark border-none outline-0 w-full'
              />
              {passwordVisible ? (
                <IoMdEye
                  className='text-dark text-2xl cursor-pointer'
                  onClick={() => togglePassword()}
                />
              ) : (
                <IoMdEyeOff
                  className='text-blue text-2xl cursor-pointer'
                  onClick={() => togglePassword()}
                />
              )}
            </div>
          </form>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center'>
          <p
            onClick={() => navigate('/password-reset')}
            className='hover:underline hover:text-blue cursor-pointer'
          >
            Forgot password?
          </p>
          <button
            onClick={handleSubmit}
            className='bg-blue p-3 w-[140px] max-[768px]:w-[120px] rounded-md transition-all duration-300 hover:scale-105'
          >
            Sign In
          </button>
          {err && <p className='text-red-500'>{err}</p>}
          <p
            className='text-lg cursor-pointer'
            onClick={() => navigate('/login')}
          >
            {`Don't Have An Account?`}
            <a
              href='/register'
              className='text-blue underline ml-2 hover:text-pink'
            >
              Create One
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
