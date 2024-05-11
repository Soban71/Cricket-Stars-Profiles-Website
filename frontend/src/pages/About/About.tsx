import React from 'react';
import './About.css';

function About() {
    return (
        <div>
            <>
                {/* Blog Section */}
                <section id="Blog-section">
                    {/* Array of blog posts */}
                    {blogPosts.map((post, index) => (
                        <div className="row blogbox" key={index}>
                            {/* Image Column */}
                            <div className="col-lg-6 col-md-6">
                                <div className="image">
                                    <img src={post.imageUrl} alt={post.title} />
                                </div>
                            </div>
                            {/* Details Column */}
                            <div className="col-lg-6 col-md-6">
                                <div className="blog-detail">
                                    <h4>{post.title}</h4>
                                    <p>{post.description}</p>
                                    {/* Open links in new tab */}
                                    <a href={post.link} target="_blank" rel="noopener noreferrer">
                                        CONTINUE READING
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>
            </>
        </div>
    );
}

// Array of cricket-related blog posts
const blogPosts = [
    {
        title: 'The Art of Spin Bowling',
        description: 'Learn the techniques and strategies of spin bowling from the experts.',
        imageUrl: 'https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2016/07/spin-bowling-1469674279.jpg',
        link: 'https://en.wikipedia.org/wiki/Spin_bowling',
    },
    {
        title: 'Top Cricket Grounds Around the World',
        description: 'Explore some of the most iconic cricket grounds known for their history and beauty.',
        imageUrl: 'https://www.austadiums.com/news/images/adelaide-oval-FB2.jpg',
        link: 'https://en.wikipedia.org/wiki/List_of_cricket_grounds_by_capacity',
    },
    {
        title: 'Understanding Cricket Scoring and Rules',
        description: 'A beginner-friendly guide to understanding the rules and scoring in cricket.',
        imageUrl: 'https://imgv2-2-f.scribdassets.com/img/document/224131862/original/0becaff292/1715130702?v=1',
        link: 'https://en.wikipedia.org/wiki/Cricket',
    },
    {
        title: 'Cricket Legends: A Look Back at the Greats',
        description: 'Discover the stories of legendary cricketers who have left their mark on the sport.',
        imageUrl: 'https://static.tvtropes.org/pmwiki/pub/images/cricket_rules.jpg',
        link: 'https://en.wikipedia.org/wiki/History_of_cricket',
    },
    {
        title: 'Nutrition and Fitness Tips for Cricketers',
        description: 'Get expert advice on how to stay fit and healthy as a cricketer.',
        imageUrl: 'https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/242000/242047.jpg',
        link: 'https://www.sportsdietitians.com.au/factsheets/food-for-your-sport/food-for-your-sport-cricket/',
    },
    {
        title: 'The Future of Cricket: Innovations and Trends',
        description: 'Explore the exciting trends and innovations shaping the future of cricket.',
        imageUrl: 'https://cdn.gulte.com/wp-content/uploads/2024/05/IndianClicks_Essen_Media_1200x800_05042024_1_1.jpg',
        link: 'https://en.wikipedia.org/wiki/International_cricket_in_2023',
    },
];

export default About;
