import axios from 'axios';

const API_KEY = 'AIzaSyCQrXJd95uHBv31L-wz-uFRZqSfmTxMz8o';
const CHANNEL_ID = 'UCgJt5XKYzrqNVMm6QRHm4ZA';

export const fetchVideos = async () => {
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      channelId: CHANNEL_ID,
      maxResults: 50,
      type: 'video',
      key: API_KEY,
      order: 'date'
    },
  });
  console.log('Fetched videos:', response.data.items); // Debug log
  return response.data.items;
};