import React, { useEffect } from 'react';
import useStorageRecipeImage from '../hooks/useStorageRecipeImage';
import { motion } from 'framer-motion';
import './App.css';
const ProgressBar = ({ fileRecipe, setFile }) => {
  const { progress, url } = useStorageRecipeImage(fileRecipe);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  );
} 

export default ProgressBar;