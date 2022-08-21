import React from 'react';
import {useNavigate} from "react-router-dom";

const AlbumsListItem = ({name, image, _id}) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate('/albums/'+_id)}
            className="w-1/4 cursor-pointer shrink-0">
            <div className="rounded-full overflow-hidden w-[200px] h-[200px]">
                <img
                    className="w-full h-full"
                    src={image} alt={name}/>
            </div>
            <h3 className="text-xl my-5">
                {name}
            </h3>
        </div>
    );
};

export default AlbumsListItem;