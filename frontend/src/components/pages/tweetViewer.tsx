import React from 'react';
import { Grid, GridItem } from '@chakra-ui/layout';
import Tweet from '../tweet';



const tweetViewer = () => (
    <Grid 
        templateColumns='repeat(auto-fill, minmax(250px,1fr))'
        gridGap='10px'
        gridAutoRows='200px'
    >
        {data.map((tweet,index) => (
            <h1>{tweet.text}</h1>
        ))}

    </Grid>
)

export default tweetViewer;

const data = [
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
    },
    {
      created_at: "Thu Jul 29 18:17:42 +0000 2021",
      id: 1420810781923348500,
      text: "Spain without the S 💔\n\nWe lose in OT on Ascent and @GiantsGaming take the win. We're knocked down to the lower brac… https://t.co/dqQKWfVmyd",
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 18:13:00 +0000 2021",
      id: 1420809598265561000,
      text: "nice. https://t.co/J73TEVMSEP",
      media: {
        type: "photo",
        imageUrl: "https://pbs.twimg.com/media/E7ejCi-VIAQlKe3.jpg"
      },
      user: "LinusTech"
    },
    {
      created_at: "Thu Jul 29 18:09:18 +0000 2021",
      id: 1420808666329096200,
      text: "AAAAAAAAAAHHH @misticJK!!!!! 😳 https://t.co/qX6PDmPlBM",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420808540969635840/pu/img/pd4NQtEuOvhfm07G.jpg",
        video: {
          url: {
            bitrate: 2176000,
            content_type: "video/mp4",
            url: "https://video.twimg.com/ext_tw_video/1420808540969635840/pu/vid/1280x720/rKXTXrVHqMSYzCfH.mp4?tag=12"
          }
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 18:06:43 +0000 2021",
      id: 1420808018573279200,
      text: "GET YOUR BOASTEEEES!! #VCT 🔥 @OfficialBoaster https://t.co/QxJKb8m8Oh",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420807865569271815/pu/img/LsN85u-m4xBtOStm.jpg",
        video: {
          url: {
            bitrate: 256000,
            content_type: "video/mp4",
            url: "https://video.twimg.com/ext_tw_video/1420807865569271815/pu/vid/480x270/gvwXYqeoTnC60sgR.mp4?tag=12"
          }
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 18:00:57 +0000 2021",
      id: 1420806565045719000,
      text: "⚡️ SPAM ⚡️ THIS ⚡️ STATIC ⚡️ TO ⚡️ HELP ⚡️ FNATIC ⚡️ https://t.co/QuTWPXInrn",
      media: {
        type: "photo",
        imageUrl: "https://pbs.twimg.com/media/E7e39eEX0AUl9Z5.png"
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 18:00:27 +0000 2021",
      id: 1420806441280196600,
      text: "I love giving shoutouts!! Moon Bagel patrons get a shoutout right on the show from me when you sign up on the Threa… https://t.co/N5rFBErVhR",
      user: "Snubs"
    },
    {
      created_at: "Thu Jul 29 17:53:43 +0000 2021",
      id: 1420804746588328000,
      text: "OVERTIME 🤝 FNATIC #VCT",
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 17:37:56 +0000 2021",
      id: 1420800775953989600,
      text: "SHUT. DOWN. 🔥 #VCT https://t.co/2rqXsCfbip",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420800635499335685/pu/img/YO0JZ0ZWIFhOqu--.jpg",
        video: {
          url: {
            content_type: "application/x-mpegURL",
            url: "https://video.twimg.com/ext_tw_video/1420800635499335685/pu/pl/_FyiLx4UGoN_9N8Z.m3u8?tag=12&container=fmp4"
          }
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 17:36:47 +0000 2021",
      id: 1420800485062217700,
      text: "RT @WePlay_Esports: .@BIGCLANgg Academy closes out Overpass with a 16- scoreline over @FNATIC Rising. FNATIC Rising held on tried to make t…",
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 17:33:03 +0000 2021",
      id: 1420799547249471500,
      text: "RT @CameronYeager: @tomwarren @patricknorton There's also this \nhttps://t.co/1O4dnNVSOv",
      user: "patricknorton"
    },
    {
      created_at: "Thu Jul 29 17:29:24 +0000 2021",
      id: 1420798628059308000,
      text: "QUICKSCOPES OUT FOR @derkeps! 😳 #VCT https://t.co/ciMRRXV7Hx",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420798475739013128/pu/img/7onGUc4jJyVzvvKo.jpg",
        video: {
          url: {
            bitrate: 2176000,
            content_type: "video/mp4",
            url: "https://video.twimg.com/ext_tw_video/1420798475739013128/pu/vid/1280x720/fqmYtglGX_irB_3s.mp4?tag=12"
          }
        }
      },
      user: "FNATIC"
    }
  ];