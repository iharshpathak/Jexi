'use client'
import './OtpButton.css'
import useCabStore from '../../store/CabStore.js'

function NeoBrutalLabel () {
  const {otp} = useCabStore();
  return (
    <div className="box a">
      <h1 className='font-bold text'>Your OTP is <span className='font-extrabold bg-yellow-200 rounded-sm p-[3px]'>{otp}</span></h1>
    </div>
  );
};

export default NeoBrutalLabel;
