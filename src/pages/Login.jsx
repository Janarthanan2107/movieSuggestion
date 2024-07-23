import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AnimationWrapper from '../common/pageAnimation';
import InputText from "../components/InputText"
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
  const [credentials, setCredentials] = useState({ name: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser && storedUser.name === credentials.name && storedUser.password === credentials.password) {
      localStorage.setItem('isLoggedIn', JSON.stringify({ status: true, name: credentials.name }));
      navigate('/');
    } else {
      toast.error("Invalid Credentials");
    }
  };

  return (
    <AnimationWrapper>
      <Toaster />
      <section className="h-cover flex items-center justify-center">
        <div className="w-1/2 flex flex-col items-center justify-center">
          <form className="w-[80%] max-w-[400px]" onSubmit={handleSubmit}>
            <h1 className="text-4xl font-sans capitalize text-center mb-24">Welcome Back</h1>
            <InputText name="name" type="name" placeholder="Name" icon="fi-rr-envelope" value={credentials.name} onChange={handleChange} />
            <InputText name="password" type="password" placeholder="Password" icon="fi-rr-key" value={credentials.password} onChange={handleChange} />

            {/* Submit button */}
            <button className="btn-dark center mt-14" type="submit">
              Login
            </button>

            {/* Separator and "or" text */}
            <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
              <hr className="w-1/2 border-black" />
              <p>or</p>
              <hr className="w-1/2 border-black" />
            </div>

            <p className="mt-6 text-dark-gray text-xl text-center">
              {"Don't have an account?"}
              <Link to="/signUp" className="underline underline-offset-4 text-black text-xl ml-1">
                Join us today
              </Link>
            </p>
          </form>
        </div>
      </section>
    </AnimationWrapper>
  );
};

export default Login;
