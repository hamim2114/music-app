import React from 'react';

const DownloadAds = () => {
    const imgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem]  w-[10rem]'
    return (
        <div>
            <div className='flex'>
                <img className={imgStyle + ` mr-[2rem]`} src="../../public/assets/App Store.png" alt="" />
                <img className={imgStyle} src="../../public/assets/Google Play.png" alt="" />
            </div>
        </div>
    );
};

export default DownloadAds;