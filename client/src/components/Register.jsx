import React,{useState} from 'react'

export default function Register() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [phonenumber,setPhonenumber] = useState('');
    const [error,setError] = useState(false)
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(username.length==0||password.length==0||firstname.length==0||lastname.length==0||email.length==0||phonenumber.length==0){
            setError(true);
        }
        console.log(username,password,firstname,lastname,email,phonenumber)
    }

    return (
        <>
        <div className="bg-gradient-to-b from-[#1565D8] to-[#9EE8FF] h-screen">
                <div className="w-full h-screen bg-no-repeat bg-cover" style={{backgroundImage: `url("/Wallpaper.png")`}}>
                    <div className="flex flex-row justify-center items-center h-full">
                        <div className="w-[850px] h-[931px] rounded-[50px] bg-gradient-to-b from-[#C9F2FF] from-0% to-[#E9FAFF] to-67% shadow-[0_20px_20px_rgba(0,0,0,0.25)]">
                            <div className="flex flex-col justify-center items-center font-Rubik">
                                <h1 className=' font-Montserrat text-[52px] font-bold text-[#1565D8] pt-[80px] pb-[28px] leading-[68px]'>Register</h1>
                                <form onSubmit={handleSubmit}>
                                    <div className="flex flex-col justify-center items-center gap-[28px]">
                                        <div className="username">
                                        <p className='font-medium text-[18px] ps-[23px] pb-[11px] leading-[22px]'>Username</p>
                                        <input type="text" id='box_username' className='w-[680px] h-[76px] rounded-[20px] ps-[28px] shadow-[0_10px_10px_rgba(0,0,0,0.25)] placeholder:font-medium focus:border-[3px] focus:border-[#178AAE] focus:outline-0' placeholder='Enter your username' onChange={e=>setUsername(e.target.value)}/>
                                    </div>
                                    <div className="password">
                                        <p className='font-medium text-[18px] ps-[23px] pb-[11px] leading-[23px]'>Password</p>
                                        <input type="password" id='box_password' className='w-[680px] h-[76px] rounded-[20px] ps-[28px] shadow-[0_10px_10px_rgba(0,0,0,0.25)] placeholder:font-medium focus:border-[3px] focus:border-[#178AAE] focus:outline-0' placeholder='Enter your password' onChange={e=>setPassword(e.target.value)} />
                                    </div>
                                    <div className="fullname flex flex-row justify-center items-center gap-[13px]">
                                        <div className="firstname">
                                            <p className='font-medium text-[18px] ps-[23px] pb-[11px] leading-[23px]'>First name</p>
                                            <input type="text" id='box_firstname'className='w-[334px] h-[72px] rounded-[20px] ps-[28px] shadow-[0_10px_10px_rgba(0,0,0,0.25)] placeholder:font-medium focus:border-[3px] focus:border-[#178AAE] focus:outline-0' placeholder='Enter your first name' onChange={e=>setFirstname(e.target.value)}/>
                                        </div>
                                        <div className="lastname">
                                            <p className='font-medium text-[18px] ps-[23px] pb-[11px] leading-[21px]'>Last name</p>
                                            <input type="text" id='box_lastname' className='w-[334px] h-[72px] rounded-[20px] ps-[28px] shadow-[0_10px_10px_rgba(0,0,0,0.25)] placeholder:font-medium focus:border-[3px] focus:border-[#178AAE] focus:outline-0' placeholder='Enter your last name' onChange={e=>setLastname(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="EmailandPhone flex flex-row justify-center items-center gap-[13px]">
                                        <div className="email">
                                            <p className='font-medium text-[18px] ps-[23px] pb-[11px] leading-[23px]'>E-mail</p>
                                            <input type="email" id='box_email' className='w-[334px] h-[72px] rounded-[20px] ps-[28px] shadow-[0_10px_10px_rgba(0,0,0,0.25)] placeholder:font-medium focus:border-[3px] focus:border-[#178AAE] focus:outline-0' placeholder='Enter your e-mail' onChange={e=>setEmail(e.target.value)}/>
                                        </div>
                                        <div className="phonenumber">
                                            <p className='font-medium text-[18px] ps-[23px] pb-[11px] leading-[21px]'>Phone number</p>
                                            <input type="text" id='box_phonenumber' className='w-[334px] h-[72px] rounded-[20px] ps-[28px] shadow-[0_10px_10px_rgba(0,0,0,0.25)] placeholder:font-medium focus:border-[3px] focus:border-[#178AAE] focus:outline-0' placeholder='Enter your phone number' onChange={e=>setPhonenumber(e.target.value)}/>
                                        </div>
                                    </div>
                                    <div className="w-[100%]">
                                        {error?<label id='alert-text' className='text-start text-red-700 '><img src="/error-icon.png" className='inline' /> Invalid username. Please try again. (Username must be English.)</label>:""}
                                    </div>
                                    <button type="submit" className=' w-[170px] h-[59px] text-[20px] mt-[14.7px] font-semibold text-white font-Montserrat rounded-[50px] bg-gradient-to-b from-[#072653] via-[#1565D8] to-[#2FBCE8] hover:border-[2px] hover:border-[#178AAE]'>Register</button>
                                    </div>
                                </form>
                                <p className='font-normal text-[14px] text-[#696F79] pt-[20px] leading-[17px]'>Do you already have an account? <a href="/" className='text-[#1565D8] underline decoration-solid '>Log in</a> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}