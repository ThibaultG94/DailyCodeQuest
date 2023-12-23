import React, { useState, useEffect } from 'react';
import Key from './Key';
import allNotes from '../utils/notes';

const Piano = () => {
	const getVisibleNotes = (screenWidth) => {
		const keysPerOctave = 12;
		const numOctaves = screenWidth < 650 ? 1 : screenWidth < 1000 ? 2 : 3;
		return allNotes.slice(0, keysPerOctave * numOctaves);
	};

	const [visibleNotes, setVisibleNotes] = useState(
		getVisibleNotes(window.innerWidth)
	);

	useEffect(() => {
		const handleResize = () =>
			setVisibleNotes(getVisibleNotes(window.innerWidth));

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const whiteKeys = visibleNotes.filter((note) => note.type === 'white');
	const blackKeys = visibleNotes.filter((note) => note.type === 'black');

	return (
		<div className="flex justify-center">
			<div className="relative mx-auto flex">
				<div className="">
					{whiteKeys.map((note, idx) => (
						<Key key={idx} note={note} />
					))}
				</div>
				<div className="absolute bottom-12 left-6">
					{blackKeys.map((note, idx) => (
						<Key key={idx} note={note} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Piano;
