import React from 'react';
import './ImageLinkForm.css';
const ImageLinkForm = () => {
    return (
        <div>
            <p className='f3'>
                {'This app will detect faces in your pictures!'}
            </p>
            <div className='center'>
            <div className='form center pa4 br3 shadow-4'>
                <input className='f4 pa2 w-70 center' type='tex' />
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple center'>Detect</button>
            </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;