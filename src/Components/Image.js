import React, { useState, useContext } from 'react';
import { UserContext } from '../context.js';
import PropTypes from 'prop-types';

function Image(props) {
  // props passed
  /*   className: undefined
  img:
  id: "2"
  isFavorite: false
  url: "https://github.com/bobziroll/scrimba-react-bootcamp-images/blob/master/pic2.jpg */

  const [isHovered, setHover] = useState(false);
  const { toggleFavorite } = useContext(UserContext);
  const { cartPhotos, addToCart } = useContext(UserContext);

  function heartIcon() {
    if (props.img.isFavorite) {
      return (
        <i
          className="favorite ri-heart-fill"
          onClick={() => toggleFavorite(props.img.id)}
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="favorite ri-heart-line"
          onClick={() => toggleFavorite(props.img.id)}
        ></i>
      );
    }
  }

  function addOrCartIcon() {
    // debugger;
    let itemIsInCart = cartPhotos.some((img) => img.id === props.img.id);
    if (itemIsInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => addToCart(props.img)}
        ></i>
      );
    } else if (isHovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(props.img)}
        ></i>
      );
    }
  }

  // const cartIcon = isHovered && (
  //   <i
  //     className="ri-add-circle-line cart"
  //     onClick={() => addToCart(props.img)}
  //   ></i>
  // );
  return (
    <div
      className={`${props.className} image-container`}
      onMouseEnter={() =>
        setHover(true)
      } /* arrow function important here;  infinite loop otherwise */
      onMouseLeave={() => setHover(false)}
    >
      {heartIcon()}
      {addOrCartIcon()}
      <img src={props.img.url} alt={props.id} className="image-grid" />
    </div>
  );
}

/* Good habit to get into a habit of adding propTypes into components that are receiving and using props.  If you refactor props, this can give you a warning;  */

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
