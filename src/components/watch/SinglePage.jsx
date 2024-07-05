import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { homeData, recommended } from '../../dummyData';
import Upcomming from '../upcoming/Upcomming';
import './style.css';

const SinglePage = () => {
	const { id } = useParams();
	const [item, setItem] = useState(null);

	useEffect(() => {
		const itemId = parseInt(id, 10);
		const foundItem = homeData.find(item => item.id === itemId);
		if (foundItem) {
			setItem(foundItem);
		}
	}, [id]);

	const [rec, setRec] = useState(recommended);

	return (
		<>
			{item ? (
				<>
					<section className='singlePage'>
						<div className='singleHeading'>
							<h1>{item.name}</h1>
							<span> | {item.time} | </span>
							<span> HD </span>
						</div>
						<div className='container'>
							<video src={item.video} controls></video>
							<div className='para'>
								<h3>Date: {item.date}</h3>
								<p>{item.desc}</p>
							</div>
							<div className='social'>
								<h3>Share:</h3>
								<img
									src='https://img.icons8.com/color/48/000000/facebook-new.png'
									alt='Facebook'
								/>
								<img
									src='https://img.icons8.com/fluency/48/000000/twitter-circled.png'
									alt='Twitter'
								/>
								<img
									src='https://img.icons8.com/fluency/48/000000/linkedin-circled.png'
									alt='LinkedIn'
								/>
							</div>
						</div>
					</section>
					<Upcomming items={rec} title='Recommended Movies' />
				</>
			) : (
				<p>Loading...</p>
			)}
		</>
	);
};

export default SinglePage;
