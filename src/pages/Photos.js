import React, { useContext } from 'react';
import Image from '../Components/Image';
import { getClass } from '../utils/index.js';
import { UserContext } from '../context.js';

function Photos() {
  // console.log(useContext(UserContext));
  const { allPhotos } = useContext(UserContext);
  let mappedPhotos = allPhotos.map((photo, index) => {
    return <Image key={photo.id} img={photo} className={getClass(index)} />;
  });
  return <main className="photos">{mappedPhotos}</main>;
}

export default Photos;

/*
Sample Photo object:

{
  url: "https://github.com/bobziroll/scrimba-react-bootcamp-images/blob/master/pic1.jpg?raw=true", 
  id: "1", 
  isFavorite: false
}
 */
