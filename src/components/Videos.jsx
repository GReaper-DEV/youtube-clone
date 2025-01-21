import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
function Videos({ videos, direction }) {

    if (!videos?.length) return 'Loading...'
    return (
        <Stack direction={direction || 'row'} flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item, idx) => {
                {
                    if (item.id.videoId || item.id.channelId) {
                        return (
                            <Box sx={{width: {xs: '100%', sm: 'auto'}}} key={idx}>
                                {item.id.videoId && <VideoCard video={item} />}
                                {item.id.channelId && <ChannelCard channelDetail={item} />}
                            </Box>
                        )
                    }
                    return null;
                }
            })}
        </Stack>
    );

}

export default Videos;