import React from 'react';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import Image from 'next/image';
import HeaderLogo from "../../../public/assets/logo.png"
const Header = () => {
    return (
        <div className='flex flex-col items-center text-2xl mt-6'>

           <Image className='' src={HeaderLogo}
           alt="Dragon News logo"
           width={400}
           height={400}></Image>
           <p className='mt-3'>Journalism Without Fear or Favour</p>
           <p>{format(new Date(), "EEEE, MMM dd,yyyy")}</p>

        </div>
    );
};

export default Header;