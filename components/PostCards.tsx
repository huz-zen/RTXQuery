import { Text, View } from "react-native"

interface Post{
    title: string;
    body : string;
    userId : string;
    id : string; 
}

const PostCards = ({posts}:{posts:Post}) => {
    return <View>
    <Text>{posts.title}</Text>
    <Text>{posts.body}</Text>
    </View>
}

export default PostCards;