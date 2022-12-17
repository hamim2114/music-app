import React from 'react';
import appstore from '../img/App Store.png'
import playtore from '../img/Google Play.png'

const DownloadAds = () => {
    const imgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem]  w-[10rem]'
    return (
        <div>
            <div className='flex'>
                <img className={imgStyle + ` mr-[2rem]`} src={appstore} alt="" />
                <img className={imgStyle} src={playtore} alt="" />
            </div>
        </div>
    );
};

export default DownloadAds;