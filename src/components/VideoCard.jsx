import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";
import { decode } from "he";

function VideoCard({ video: { id: {videoId}, snippet } }) {

    return (
        <Card sx={{ width: { md: '320px', xs: '100%' }, boxShadow: 'none', borderRadius: '0' }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                    alt={snippet?.title}
                    sx={{ width: 358, height: 180 }}
                />
                <CardContent sx={{ backgroundColor: '#1e1e1e', height: '106px' }}>
                    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                        <Typography variant="subtitle1" fontWeight="bold" color="#fff">
                            {decode(snippet?.title.slice(0, 60)) || decode(demoVideoTitle.slice(0, 60))}
                        </Typography>
                    </Link>
                    <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                        <Typography variant="subtitle2" fontWeight="bold" color="gray">
                            {decode(snippet?.channelTitle.slice(0, 60)) || decode(demoChannelTitle.slice(0, 60))}
                            <CheckCircle sx={{ fontSize: '12', color: 'gray', ml: '5px', width: '12px', height: 'auto' }} />
                        </Typography>
                    </Link>
                </CardContent>
            </Link>
        </Card>
    );
}

export default VideoCard;