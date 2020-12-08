import axios from 'axios';

const KEY = 'AIzaSyCNc2HRdvqVpxv9yPEAkp9d5z9PXju13n8'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
