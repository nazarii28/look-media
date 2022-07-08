import React from 'react';
import {useNavigate} from "react-router-dom";

const AlbumsListItem = ({name, image, _id}) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate('/albums/'+_id)}
            className="w-1/4 cursor-pointer">
            <img
                className="h-[200px] w-[200px] rounded-full"
                src={image} alt={name}/>
            <h3 className="text-xl my-5">
                {name}
            </h3>
        </div>
    );
};

export default AlbumsListItem;