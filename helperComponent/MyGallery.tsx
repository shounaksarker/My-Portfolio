import { useState } from "react";
import { Gallery, Image } from "react-grid-gallery";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

interface CustomImage extends Image {
  original: string;
}

const MyGallery = (props: any) => {
  const images: CustomImage[] = props.images;
  const [index, setIndex] = useState(-1);

  const currentImage = images[index];
  const nextIndex = (index + 1) % images.length;
  const nextImage = images[nextIndex] || currentImage;
  const prevIndex = (index + images.length - 1) % images.length;
  const prevImage = images[prevIndex] || currentImage;

  const handleClick = (index: number, item: any) => {
    setIndex(index);
  };
  const handleClose = () => setIndex(-1);
  const handleMovePrev = () => setIndex(prevIndex);
  const handleMoveNext = () => setIndex(nextIndex);
  return (
    <div>
      <Gallery
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      {!!currentImage && (
        /* @ts-ignore */
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
      )}
    </div>
  );
};

export default MyGallery;

{
  /* -------------- place it where you want the gallery --------------------
  
  <div className="h-96 overflow-scroll lg:h-auto lg:overflow-hidden my-8">
          <h3 className="text-lg md:text-xl text-center mb-4">Travel Gallery</h3>
          <Gallery images={images} />
        </div>
        <div className="h-96 overflow-scroll lg:h-auto lg:overflow-hidden my-8">
          <h3 className="text-lg md:text-xl text-center mb-4">Photography Gallery</h3>
          <Gallery images={images2} />
        </div> */
}
