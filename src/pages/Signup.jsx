import { useState } from "react";
import AnimationWrapper from "../common/pageAnimation";
import InputText from "../components/InputText";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "../components/DropDown";
import toast, { Toaster } from "react-hot-toast";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        phone: '',
        profession: '',
    });

    let navigate = useNavigate()

    const professionOptions = [
        { value: '', label: 'Select Profession' },
        { value: 'Engineer', label: 'Engineer' },
        { value: 'Doctor', label: 'Doctor' },
        { value: 'Teacher', label: 'Teacher' },
    ];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validation check
        const { name, password, email, phone, profession } = formData;
        if (!name || !password || !email || !phone || !profession) {
            toast.error('Please fill in all fields!');
            return;
        }

        localStorage.setItem('user', JSON.stringify(formData));
        toast.success('Signup successful!')
        reset()
        navigate("/login")
    };

    const reset = () => {
        setFormData({
            name: '',
            password: '',
            email: '',
            phone: '',
            profession: '',
        })
    }

    return (
        <AnimationWrapper>
            <Toaster />
            <section className="h-cover flex items-center justify-center">
                <div className="container flex flex-col items-center justify-center">
                    <form className="w-[80%] max-w-[400px]" onSubmit={handleSubmit}>
                        <h1 className="text-4xl font-sans capitalize text-center mb-24">Join Us Today</h1>
                        <InputText name="name" type="name" placeholder="Name" icon="fi-rr-envelope" value={formData.name} onChange={handleChange} />
                        <InputText name="password" type="password" placeholder="Password" icon="fi-rr-key" value={formData.password} onChange={handleChange} />
                        <InputText name="email" type="email" placeholder="Email" icon="fi-rr-envelope" value={formData.email} onChange={handleChange} />
                        <InputText name="phone" type="phone" placeholder="Phone" icon="fi-br-call-history" value={formData.phone} onChange={handleChange} />
                        <Dropdown
                            name="profession"
                            icon="fi-rr-employee-man"
                            value={formData.profession}
                            onChange={handleChange}
                            options={professionOptions}
                            placeholder="Select Profession"
                        />

                        {/* Submit button */}
                        <button className="btn-dark center mt-14" type="submit">
                            Sign Up
                        </button>

                        {/* Separator and "or" text */}
                        <div className="relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold">
                            <hr className="w-1/2 border-black" />
                            <p>or</p>
                            <hr className="w-1/2 border-black" />
                        </div>

                        <p className="mt-6 text-dark-gray text-xl text-center">
                            Already a member?{" "}
                            <Link to="/login" className="underline underline-offset-4 text-black text-xl ml-1">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </AnimationWrapper>
    );
};

export default Signup;
