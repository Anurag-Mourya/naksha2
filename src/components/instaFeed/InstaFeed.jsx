import React, { useEffect, useState } from 'react';
import img from '../../assets/images/Group 2.png'
import './feed.css';

const InstaFeed = () => {
    const [feedData, setFeedData] = useState([]);

    useEffect(() => {
        const fetchInstagramFeed = async () => {
            try {
                const access_token = process.env.REACT_APP_INSTA_ACCESS_TOKEN;

                const response = await fetch(
                    `https://graph.instagram.com/me/media?fields=id,followers_count,caption,media_type,media_url,thumbnail_url,permalink&access_token=${access_token}`
                );
                const data = await response.json();
                const { data: posts } = data;
                console.log('first data for id', data)
                // Fetch media details for each post
                const postsWithMediaDetails = await Promise.all(
                    posts.map(async (post) => {
                        const mediaResponse = await fetch(
                            `https://graph.instagram.com/${post.id}?fields=id,media_type,media_url,thumbnail_url,permalink&access_token=${access_token}`
                        );
                        const mediaData = await mediaResponse.json();
                        return mediaData;
                    })
                );

                setFeedData(postsWithMediaDetails);
            } catch (error) {
                console.error('Error fetching Instagram feed:', error);
            }
        };

        // fetchInstagramFeed();
    }, []);
    console.log('feedData', feedData)
    return (
        <div>
            <div>
                <h2 className='mainColor text-center py-5'>FOLLOW ON INSTAGRAM </h2>
            </div>

            <div class="container">
                <div class="image-grid p-5">
                    {/* <img src={img} alt="Image 1" />
                    <img src={img} alt="Image 1" />
                    <img src={img} alt="Image 1" />
                    <img src={img} alt="Image 1" />
                    <img src={img} alt="Image 1" /> */}
                    {
                        feedData?.slice(0, 20)?.map((post) => (
                            <a key={post.id}
                                href={post.permalink}
                                target="_blank"
                                rel="noopener noreferrer">

                                {post.media_type === 'IMAGE' && (
                                    <img src={post.media_url} alt={post.caption} className='img mx-1' width={200} height={210} />
                                )}
                                {post.media_type === 'VIDEO' && (
                                    <video src={post.media_url} className='img  mx-1' width={200} height={210} />
                                )}
                            </a>
                        ))
                    }
                </div>
            </div>
            <div className='text-center py-5 buttonStyle'>
                <button type="button">FOLLOW US @anuragmourya</button>
            </div>

        </div>
    )
}

export default InstaFeed