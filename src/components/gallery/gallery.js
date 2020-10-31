import React from 'react';
import Gallery from 'react-grid-gallery';
import images from '../../json/images';


 class PhotoGallery extends React.Component{
  render() {
    return (
      <div className="container-fluid gallery-height">
    <Gallery images={images}/>
    </div>
);
 }
}

export default PhotoGallery;
