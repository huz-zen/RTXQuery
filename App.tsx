import React, { useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { useGetPostsQuery, useNewPostsMutation } from './redux/api';
import PostCards from './components/PostCards';

interface Post{
  title: string;
  body : string;
  userId : string;
  id : string; 
}


export default function App() {
  const { isLoading, data} = useGetPostsQuery("");
  const [newPost] = useNewPostsMutation();
  const [title,setTitle] = useState<string>("")
  const [body,setBody] = useState<string>("")

  function submitHandler () { 
    const post: Post={
      title,
      body,
      userId: Date.now().toString(),
      id: Date.now().toString()
    };
    newPost(post);
    setTitle('');
    setBody('');
  };
  

  return (
    <View>
      <View>
        <TextInput
          onChangeText={setTitle}
          value={title}
          placeholder="Title"
        />
        <TextInput
          onChangeText={setBody}
          value={body}
          placeholder="Body"
        />

        <Button title='submit' onPress={submitHandler}>
          
        </Button>
      
  
      </View>
      {isLoading ? (
          <Text>Loading..</Text>
      ):(
        data?.map((i) => <PostCards key={i.id} posts={i} />)
      )
      }
      
    </View>  
  );
}
