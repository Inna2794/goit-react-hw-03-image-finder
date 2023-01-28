import PropTypes from 'prop-types';

import '../ImageGalleryItem/ImageGalleryItem.css';

const ImageGalleryItem = ({ largeImageURL, previewURL, tags, onClick }) => {


  const handleImgClick = evt => {
   onClick(largeImageURL);
  };

  return (
    <li className="photo-card">
      <div className="img-wrap">
        <img
          className="image"
          src={previewURL}
          alt={tags}
          onClick={handleImgClick}
        />
      </div>
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {

    largeImageURL: PropTypes.string.isRequired,
    previewURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,

  onClick: PropTypes.func.isRequired,
};
