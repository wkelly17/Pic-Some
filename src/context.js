import React, { useState, useEffect } from 'react';

const UserContext = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartPhotos, setcartPhotos] = useState([]);

  const url =
    'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json';
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllPhotos(data))
      .catch((err) => console.error(err));
  }, []);

  function toggleFavorite(id) {
    const updatedArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite /* avoiding modifying state directly */,
        };
      }
      return photo;
    });
    setAllPhotos(updatedArr);
  }

  function addToCart(img) {
    let alreadyInCart = cartPhotos.includes(img);
    if (alreadyInCart) {
      // debugger;
      let newPhotos = [...cartPhotos];
      newPhotos.splice(img, 1);
      setcartPhotos(newPhotos);
    } else {
      // debugger;
      setcartPhotos([...cartPhotos, img]);
    }
  }

  function deleteFromCart(photoToDelete) {
    setcartPhotos(
      cartPhotos.filter((cartPhoto) => cartPhoto.id !== photoToDelete.id)
    );
  }

  function emptyCart() {
    setcartPhotos([]);
  }

  // Could also destructure props to just have children;  Some people do that
  return (
    <UserContext.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartPhotos,
        addToCart,
        deleteFromCart,
        emptyCart,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}

export { ContextProvider, UserContext };

/*
Sample Photo object:

{
  url: "https://github.com/bobziroll/scrimba-react-bootcamp-images/blob/master/pic1.jpg?raw=true", 
  id: "1", 
  isFavorite: false
}
 */
