import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Album = () => {
    const { id } = useParams();
    const [photos, setGallery] = useState([]);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        getPhotos();
      }, []);


    const getPhotos = async ()=>{
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/photos?albumId=${id}`
          );
        //   console.log(id);
          setGallery(response.data);
          console.log(photos);
          setStatus(true);
    }

    return (
        <div className="gallery">
            {status?
            (
                photos.map((photo) => (
                    <div key={photo.id}>
                        <img src={photo.url} alt='item'></img>
                        <p>{photo.title}</p>
                    </div>
                    
                ))
            ):
            (
                <h1>Loading....</h1>
            )

            }
        </div>
    );
}

export default Album;
{/* <h1>Gallery</h1>
            { photos.map((photo) => (
                <img key={photo.id} src={photo.url} alt='item'></img>
            ))} */}