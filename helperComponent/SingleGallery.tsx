import React, { useState } from 'react';
import { Image } from "react-grid-gallery";
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";

interface CustomImage extends Image {
    original: string;
  }
const SingleGallery = (props:any) => {
    const images:CustomImage[] = props.images
    const open:Boolean = props.open
    const setOpen:Function = props.setOpen

    // const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);


    const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;
  const handleClose = () => setOpen(false);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);

  return (
    <div>
      {
        open && 
        <Lightbox
        mainSrc={currentImage.original}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.original}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.original}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      }
    </div>
  );
};

export default SingleGallery;