import React from 'react'
import axios from 'axios'
import PushNotification from 'react-native-push-notification'


export const changeNotificationStatus = () => {
    axios.get('https://public-api.wordpress.com/rest/v1.1/sites/animehunch.com/posts/?number=3&order=DESC&fields=title,date,featured_image')
    .then(res => {
        const dt = res.data
        for (var post of dt.posts) {            
            PushNotification.localNotification({
                title: post.title,
                message: "Posted at: "+post.date.split('T')[0],
                bigPictureUrl: post.featured_image,
                playSound: false, 
                soundName: "default", 
                repeatType: "time",
                repeatTime: "100",
                color: 'red'
            })
        }   
    })
    .catch(err => {
        console.log(err)
    })
}
