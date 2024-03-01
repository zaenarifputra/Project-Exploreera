import React from "react";
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages from "./galleryImages";


const MasonryImagesGallery = () => {
    return (

    <ResponsiveMasonry columnsCountBreakPoints={{300:2}}>
        <Masonry gutter="1rem">
            {
                galleryImages.map((item,index)=>(
                    <img className='masonry_image' src={item} key={index} alt="" style={{width:'100%', display:'block', 
                    borderRadius:'5px'}}/>
                ))
            }
        </Masonry>
    </ResponsiveMasonry>
    )
}

export default MasonryImagesGallery