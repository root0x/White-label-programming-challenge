import React, {useEffect, useRef, useState} from 'react';
import { Box, Heading } from '@chakra-ui/layout';
import Masonry from 'react-masonry-css';
import Tweet from '../tweet';

const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1
  };

const tweetViewer = () => {
    

    return (
        <Box
            bg='lightGrey'
        >
            <Heading textAlign='center' size='4xl' padding='50px'>Latest Tweets</Heading>
        <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
        >
                {data.map((tweet,index) => (
                <Tweet key={index} tweet={tweet} autoRows={40}/>
                ))}

        </Masonry>
        </Box>
    )
}

export default tweetViewer;

const data = [
    {
      created_at: "Thu Jul 29 21:33:00 +0000 2021",
      id: 1420859930861576200,
      text: "Impressive! Can anyone best this collection of handhelds? https://t.co/wsKLKDu0v5",
      user: "JasonBradbury"
    },
    {
      created_at: "Thu Jul 29 21:29:33 +0000 2021",
      id: 1420859060937764900,
      text: "He's holding on for dear life! 😳 #NLC https://t.co/PDEZwfo2U9",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420858844490739719/pu/img/h-zhYgs1nfYItYBP.jpg",
        video: {
          content_type: "application/x-mpegURL",
          url: "https://video.twimg.com/ext_tw_video/1420858844490739719/pu/pl/Nwjtzhmh3W2LlhA-.m3u8?tag=12&container=fmp4"
        },
        sizes: {
          w: 680,
          h: 383,
          resize: "fit"
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 21:29:17 +0000 2021",
      id: 1420858996521672700,
      text: ".@misticJK AND CLUTCHING, NAME A BETTER COMBO 👀 #VCT https://t.co/eXoKYCxRm1",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420858908193722369/pu/img/pljEHZ_5KyuSKwtR.jpg",
        video: {
          bitrate: 2176000,
          content_type: "video/mp4",
          url: "https://video.twimg.com/ext_tw_video/1420858908193722369/pu/vid/1280x720/r-R_1_4bUKqhvW9-.mp4?tag=12"
        },
        sizes: {
          w: 680,
          h: 383,
          resize: "fit"
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 21:25:42 +0000 2021",
      id: 1420858093479551000,
      text: "BIG PLAYS FROM @just_magnum!! 👀 #VCT https://t.co/dqd8s1p7Ae",
      media: {
        type: "video",
        imageUrl: "https://pbs.twimg.com/ext_tw_video_thumb/1420857860641202178/pu/img/7NxF0GeM5F194htp.jpg",
        video: {
          bitrate: 2176000,
          content_type: "video/mp4",
          url: "https://video.twimg.com/ext_tw_video/1420857860641202178/pu/vid/1280x720/h1T0PTbfqcc9l6UO.mp4?tag=12"
        },
        sizes: {
          w: 680,
          h: 383,
          resize: "fit"
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 21:15:18 +0000 2021",
      id: 1420855477081153500,
      text: "GIVE ME YOUR STRENGTH #VCT https://t.co/hdzdK6uxqw",
      media: {
        type: "animated_gif",
        imageUrl: "https://pbs.twimg.com/tweet_video_thumb/E7fkZbJWUAE9Qab.jpg",
        sizes: {
          w: 500,
          h: 500,
          resize: "fit"
        }
      },
      user: "FNATIC"
    },
    {
      created_at: "Thu Jul 29 21:08:20 +0000 2021",
      id: 1420853724889690000,
      text: "I BELIEVE #VCT https://t.co/1U35J2rmp9",
      media: {
        type: "photo",
        imageUrl: "https://pbs.twimg.com/media/E7fi5FlXsAEhx03.jpg",
        sizes: {
          w: 680,
          h: 324,
          resize: "fit"
        }
      },
      user: "FNATIC"
    },
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
        },
        sizes: {
          w: 680,
          h: 383,
          resize: "fit"
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
        },
        sizes: {
          w: 680,
          h: 383,
          resize: "fit"
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
        imageUrl: "https://pbs.twimg.com/media/E7fZmu4WUAkMDj0.png",
        sizes: {
          w: 673,
          h: 521,
          resize: "fit"
        }
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
        },
        sizes: {
          w: 680,
          h: 383,
          resize: "fit"
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
        imageUrl: "https://pbs.twimg.com/media/E7fWRKJVcAEEQiQ.jpg",
        sizes: {
          w: 610,
          h: 680,
          resize: "fit"
        }
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
        },
        sizes: {
          w: 680,
          h: 383,
          resize: "fit"
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
        imageUrl: "https://pbs.twimg.com/media/E7fUYpOXsAY1js5.jpg",
        sizes: {
          w: 680,
          h: 382,
          resize: "fit"
        }
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
        },
        sizes: {
          w: 680,
          h: 383,
          resize: "fit"
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
        },
        sizes: {
          w: 680,
          h: 383,
          resize: "fit"
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
        imageUrl: "https://pbs.twimg.com/media/E7fNWQTX0AY8osS.jpg",
        sizes: {
          w: 383,
          h: 680,
          resize: "fit"
        }
      },
      user: "elonmusk"
    }
  ]