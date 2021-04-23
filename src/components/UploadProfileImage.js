import React, { useState } from 'react';
import ProgressBarProfileImage from './ProgressBarProfileImage';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpg)');
    }
  };
const classes = useStyles();
  return (
    <form>
      <input className={classes.input} accept="image/*" onChange = {handleChange} id="icon-button-file" type="file" />
      <label htmlFor = "icon-button-file" style={{textAlign: 'center', marginRight: '100px'}} >
        {/*Below code is original if break just uncomment
        <input type="file" onChange={handleChange} />
        <span>+</span>
        */} 
        <IconButton color="primary" aria-label="upload picture" component="span" className={classes.root}>
          <PhotoCamera />
        </IconButton>
      </label>
      <div className="output">
        { error && <div className="error">{ error }</div>}
        { file && <div>{ file.name }</div> }
        { file && <ProgressBarProfileImage file={file} setFile={setFile} /> }
      </div>
    </form>
  );
}

export default UploadForm;