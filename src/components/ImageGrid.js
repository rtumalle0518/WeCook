import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';
import './App.css';
const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
        <div className = "img-wrap" key = {document.id}>
            <img src = {docs.url} alt = "uploaded pic"></img>
        </div>
    </div>
  )
}

export default ImageGrid;