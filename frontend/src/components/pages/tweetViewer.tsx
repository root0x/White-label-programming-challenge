import React, {useEffect, useRef, useState} from 'react';
import { Grid, GridItem, Heading } from '@chakra-ui/layout';
import Tweet from '../tweet';



const tweetViewer = () => {
    

    return (
        <>
        <Heading textAlign='center' size='4xl' padding='50px'>Latest Tweets</Heading>
            <Grid 
                templateColumns='repeat(auto-fill, minmax(400px,1fr))'
                gridGap='40px'
                gridAutoRows='40px'
            
            >
                {data.map((tweet,index) => (
                <Tweet key={index} tweet={tweet} autoRows={40}/>
                ))}

            </Grid>
        </>
    )
}

export default tweetViewer;

const data = [
    {
      created_at: "Thu Jul 29 21:03:33 +0000 2021",
      id: 1420852517790003200,
      text: "\"hey\" - @misticJK #VCT https://t.co/0XUEhky9hi",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420852443341107207/pu/img/oEATnVZF6OxQpDK0.jpg",
        video: {
          content_type: "application/x-mpegURL",
          url: "https://video.twimg.com/ext_tw_video/1420852443341107207/pu/pl/C6QTEJ8bWSMJVH4R.m3u8?tag=12&container=fmp4"
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 21:01:57 +0000 2021",
      id: 1420852116139090000,
      text: "RT @respawnbyrazer: Immerse all your senses in the game with RESPAWN gum’s huge flavor — your perfect companion for main missions and side…",
      user: "Razer"
    },
    {
      created_at: "Thu Jul 29 20:35:12 +0000 2021",
      id: 1420845385216577500,
      text: "Another banger matchup ✅\n\nWe take the win on Bind to bring the series to a decider map. We're jetting off to Haven… https://t.co/5BvCGDOP32",
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 20:31:07 +0000 2021",
      id: 1420844359038247000,
      text: "1-1 for Fnatic Rising, taking us to game 3! #FNCWIN #NLC https://t.co/MczYhiuU6m",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420844220148064257/pu/img/H026NytPqRKGWxme.jpg",
        video: {
          bitrate: 2176000,
          content_type: "video/mp4",
          url: "https://video.twimg.com/ext_tw_video/1420844220148064257/pu/vid/1280x720/BJB-6NsH_VV6GbGc.mp4?tag=12"
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 20:30:07 +0000 2021",
      id: 1420844106146791400,
      text: "RT @dailytechnewssh: We’re live! Join us now for today’s DTNS with guest co-host Patrick Norton @patricknorton https://t.co/lT98omlgWz",
      user: "patricknorton"
    },
    {
      created_at: "Thu Jul 29 20:27:53 +0000 2021",
      id: 1420843542436589600,
      text: "Bush diff #NLC https://t.co/xXAsNfSux2",
      media: {
        type: "photo",
        imageUrl: "https://pbs.twimg.com/media/E7fZmu4WUAkMDj0.png"
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 20:25:25 +0000 2021",
      id: 1420842922090582000,
      text: "Another day, another @misticJK CLUTCH! 🔥 #VCT https://t.co/SCKMOzdoko",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420842820588515328/pu/img/yU8KgRJ9pYE8nl47.jpg",
        video: {
          bitrate: 2176000,
          content_type: "video/mp4",
          url: "https://video.twimg.com/ext_tw_video/1420842820588515328/pu/vid/1280x720/m2icpyNUaPA-7zot.mp4?tag=12"
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 20:13:16 +0000 2021",
      id: 1420839864686182400,
      text: "* slaps twice *\nThis bad boy can fit so much tech in it https://t.co/WwDcHBHJyt",
      media: {
        type: "photo",
        imageUrl: "https://pbs.twimg.com/media/E7fWRKJVcAEEQiQ.jpg"
      },
      user: "LinusTech"
    },
    {
      created_at: "Thu Jul 29 20:08:59 +0000 2021",
      id: 1420838788763463700,
      text: "AYOOOO first blood to Fnatic Rising #NLC https://t.co/X6yxLyBoA5",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420838546789781506/pu/img/vqO8uwi4OU9ST4f6.jpg",
        video: {
          bitrate: 832000,
          content_type: "video/mp4",
          url: "https://video.twimg.com/ext_tw_video/1420838546789781506/pu/vid/640x360/A1q3gD3-liAUI2fV.mp4?tag=12"
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 20:05:56 +0000 2021",
      id: 1420838018521387000,
      text: "Thank you for the insight 😳 #NLC https://t.co/KonQGvZLZi",
      media: {
        type: "photo",
        imageUrl: "https://pbs.twimg.com/media/E7fUYpOXsAY1js5.jpg"
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 19:52:42 +0000 2021",
      id: 1420834688105599000,
      text: "ALL of the util kills for @domaVALORANT! 👀 #VCT https://t.co/cEO8M66PH6",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420834584539897865/pu/img/Vt7-NLVpW0qlnzMk.jpg",
        video: {
          bitrate: 256000,
          content_type: "video/mp4",
          url: "https://video.twimg.com/ext_tw_video/1420834584539897865/pu/vid/480x270/M4gFcFQBK_kSoDlk.mp4?tag=12"
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 19:49:00 +0000 2021",
      id: 1420833758312374300,
      text: ".@OfficialBoaster wins THOSE! 🔥 #VCT https://t.co/rCeTSRI7X9",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420833628980920325/pu/img/LUi0EksQ0PzMQq6N.jpg",
        video: {
          bitrate: 2176000,
          content_type: "video/mp4",
          url: "https://video.twimg.com/ext_tw_video/1420833628980920325/pu/vid/1280x720/LK6HYaelWMy0eviO.mp4?tag=12"
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 19:46:33 +0000 2021",
      id: 1420833142437470200,
      text: "RT @Tesla: Giga Texas: 6 months ago vs this week https://t.co/CAgmIJ3wKQ",
      media: {
        type: "photo",
        imageUrl: "https://pbs.twimg.com/media/E7fNWQTX0AY8osS.jpg"
      },
      user: "elonmusk"
    },
    {
      created_at: "Thu Jul 29 19:39:27 +0000 2021",
      id: 1420831357194887200,
      text: "It is interesting to consider what things would have looked like if ISDN had been ubiquitous and the 16 bit console… https://t.co/AMwaoT5iSz",
      user: "ID_AA_Carmack"
    },
    {
      created_at: "Thu Jul 29 19:21:35 +0000 2021",
      id: 1420826859277799400,
      text: "Time to regroup &amp; refocus.\n\n@TeamBDS  takes Icebox in a 13-7 victory, but we head to Bind and look to turn things a… https://t.co/aSL8gtIQf2",
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 19:01:37 +0000 2021",
      id: 1420821832765165600,
      text: "It's finally here! The #NEW @nanoleaf x Razer Chroma Connect Integration has arrived! Sync next-level RGB lighting… https://t.co/qAeN48wwCC",
      user: "Razer"
    },
    {
      created_at: "Thu Jul 29 18:59:48 +0000 2021",
      id: 1420821378706677800,
      text: "Hey folks! I'm going live now on Youtube and Twitch! Come say hi - https://t.co/G3vs2ctAO8",
      user: "TechTeamGB"
    },
    {
      created_at: "Thu Jul 29 18:59:25 +0000 2021",
      id: 1420821278877962200,
      text: "After an impressive split, Playoffs are here!\n\nFnatic Rising take to the rift vs TRICKED for a showdown, live NOW!",
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 18:53:13 +0000 2021",
      id: 1420819718701781000,
      text: "Completing feed system for 29 Raptor rocket engines on Super Heavy Booster https://t.co/uARWx2HYTr",
      media: {
        type: "photo",
        imageUrl: "https://pbs.twimg.com/media/E7fEAKSWQAEnWtX.jpg"
      },
      user: "elonmusk"
    },
    {
      created_at: "Thu Jul 29 18:38:31 +0000 2021",
      id: 1420816022873981000,
      text: "What inspired you to be a creator? 🎬\n\n📸: @matthewkheafy https://t.co/4EBFDeMG20",
      media: {
        type: "photo",
        imageUrl: "https://pbs.twimg.com/media/E7e3EH6XoAImc5u.jpg"
      },
      user: "elgato"
    }
  ]