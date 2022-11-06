import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AlbumsList = () => {
    const [albums, setAlbum] = useState([]);

    useEffect(() => {
        getAlbums();
    }, []);

    const getAlbums = async () => {
        const response = await axios.get(
            "https://jsonplaceholder.typicode.com/albums?_limit=20"
          );
          setAlbum(response.data);
          console.log(response.data);
    }

    return (
        <div>
            <h1>Albums</h1>
            {albums.map((album) => (
                <div key={album.id}>
                <Link to={`/album/${album.id}`}>{album.title}</Link>
                </div>
            ))}
        </div>
    );
}

export default AlbumsList;
