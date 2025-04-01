'use client'

import styles from '@/styles/image-picker.module.css'
import Image from 'next/image';
import { useRef, useState } from 'react'

function ImagePicker({ label, name }) {

    const imageInput = useRef()

    const [pickedImage, setPickedImage] = useState(null);

    const handlePickClick = () => {
        imageInput.current.click()
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]

        if (!file) {
            setPickedImage(null)
            return;
        }

        const fileReader = new FileReader()

        fileReader.onload = () => {
            setPickedImage(fileReader.result)
        }

        fileReader.readAsDataURL(file)
    }

    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>
                <div className={styles.preview}>
                    {!pickedImage && <p> there is no image picked yet</p>}
                    {pickedImage && <Image src={pickedImage} alt="user picked image" fill/>}
                </div>
                <input
                    type="file"
                    id={name}
                    name={name}
                    accept="image/png, image/jpeg"
                    className={styles.input}
                    ref={imageInput}
                    onChange={handleImageChange}
                    required
                />
                <button type="button" className={styles.button} onClick={handlePickClick}>
                    Pick your meal image
                </button>
            </div>
        </div>
    )
}

export default ImagePicker;