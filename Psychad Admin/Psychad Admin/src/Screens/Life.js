import React from 'react';
import { Link } from 'react-router-dom';
import '../Style/BlockGrid.css' // Import the CSS file for styling

const Life = () => {
  // Define an array of blocks with their respective data
  const blocks = [
    { id: 1, name: 'Time Matters', image: 'https://img.etimg.com/photo/91740413/91740413.jpg', link: '/block1' },
    { id: 2, name: 'Depression', image: 'https://www.statnews.com/wp-content/uploads/2016/02/Depression_APStock72622943-645x645.jpg', link: '/depression' },
    { id: 3, name: 'Strength Training', image: 'https://www.eatright.org/-/media/images/eatright-landing-pages/physicalactivitylp_804x482.jpg?h=482&w=804&rev=49578a5889d64349a3cc68b2ac762e43&hash=12975C7AF5B6CAE592C86C7EEAB59292', link: '/StrengthTraining' },
    { id: 4, name: 'Lack of Motivation', image: 'https://th.bing.com/th/id/OIP.e7kwWJ1BpQeC1-duOkuj8wHaD3?w=322&h=180&c=7&r=0&o=5&pid=1.7', link: '/LackofMotivation' },
    { id: 5, name: 'Limiting Academic Stress', image: 'https://images.pexels.com/photos/6238056/pexels-photo-6238056.jpeg?auto=compress&cs=tinysrgb&w=600', link: '/LimitingAcademicStress' },
    { id: 6, name: 'Pyschad Tip Sheet', image: 'https://images.pexels.com/photos/7063764/pexels-photo-7063764.jpeg?auto=compress&cs=tinysrgb&w=600', link: '/PsyChadTipSheet' },
    { id: 7, name: 'Others', image: 'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=600', link: '/others' },
    // Add more blocks here...
  ];

  return (
    <div>
        <h1>Life Style</h1>
        <div className="block2-grid">
        {blocks.map((block) => (
            <Link to={block.link} key={block.id} className="block2-link">
            <div className="block2">
                <div className="block2-image" style={{ backgroundImage: `url(${block.image})` }}></div>
                <div className="block2-name">{block.name}</div>
            </div>
            </Link>
        ))}
        </div>
    </div>
    
  );
};

export default Life;
