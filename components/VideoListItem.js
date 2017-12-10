import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import WatchButton from './WatchButton';

const VideoListItem = ({ video }) => {
    const { 
        imageStyle,
        cardStyle,
        contentStyle,
        titleStyle,
        channelTitleStyle,
        descriptionStyle
     } = styles;
    const { 
        thumbnails: { medium: { url } }, 
        title, 
        channelTitle, 
        description 
    } = video.snippet;

    return (
        <View>
            <Card title={null} containerStyle={cardStyle}>
                <Image 
                    style={imageStyle} 
                    source={{ uri: url }}
                />
                <View style={contentStyle}>
                    <Text style={titleStyle}>
                        {title}
                    </Text>

                    <Text style={channelTitleStyle}>
                        {channelTitle}
                    </Text>

                    <Text style={descriptionStyle}>
                        {description}
                    </Text>

                    <WatchButton videoId={video.id.videoId} />
                </View>
            </Card>
        </View>
    );
};

const styles = {
    imageStyle: {
        alignSelf: 'stretch',
        height: 180
    },
    cardStyle: {
        padding: 5
    },
    contentStyle: {
        flex: 1,
        padding: 5
    },
    titleStyle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5
    },
    channelTitleStyle: {
        fontSize: 10,
        color: '#777',
        marginBottom: 5,
        alignSelf: 'flex-end'
    },
    descriptionStyle: {
        fontSize: 10,
        alignSelf: 'center'
    }
};

export default VideoListItem;
