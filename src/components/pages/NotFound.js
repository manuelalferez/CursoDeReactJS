import React from 'react'
import './styles/NotFound.css'
import faceSad from '../../images/sad_face.jpg'

function NotFound() {
    return (
        <React.Fragment>
            <div  className='Found__container'>
                <img className='Found__sad' src={faceSad} alt='Sad Face' />
                <h1 className='error'>
                    Error: 404 página no encontrada
                </h1>
            </div>
        </React.Fragment>
    )
}

export default NotFound