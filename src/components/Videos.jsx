import { Box, Stack } from "@mui/material";
import { VideoCard, ChannelCard } from "./";
function Videos({ videos }) {
    return (
        <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
            {videos.map((item, idx) => {
                {
                    if (item.id.videoId || item.id.channelId) {
                        return (
                            <Box key={idx}>
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