import React, { useEffect } from 'react';
import useStorageProfileImage from '../hooks/useStorageProfileImage';
import { motion } from 'framer-motion';
import './App.css';
const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useStorageProfileImage(file);

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