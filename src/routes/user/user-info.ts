import express from "express";
import axios from 'axios';
import { UserInfo, PostType } from "../../models";
const app = express();
let INSTAGRAM_URL = "https://www.instagram.com/"

app.get('/user/', async (req, res) => {
  let username=req.query.name

  /* We need to create a app in facebook developers and get the access_token 
     After getting the access token you can append access_token in each request to get the data
      Get the user information by calling this API:
      example: https://graph.instagram.com/v13.0/{user-id}?fields=biography,full_name&access_token={access-token}
      
      const response = await axios.get(`${INSTAGRAM_URL}${username}__a=1`,{headers:{"Cache-Control": "no-cache"}});
      console.log(response.data.graphql.user);
  */
  if(username==='mavrckco'){
    let userInfo:UserInfo = {
      dateAndTime:new Date(),
      biography:"The curious hustlers powering the leading all-in-one #influencermarketing platform.",
      fullName:'Mavrck',
      followersCount:2252,
      post:{
        url:'https://www.instagram.com/p/CL-IAeIMD0O/?__a=1',
        mediaURL: 'https://www.facebook.com/',
        numberOfLikes:225,
        numberOfComments:100,
        type:PostType.CAROUSEL
      } 
    } ;
    res.send(userInfo)
  }
  else{
    res.send({})
  }

});
 module.exports = app;
