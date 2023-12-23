import React from 'react';
import { playNote } from '../utils/audioUtils';

const Key = ({ note }) => {
	const keyClass =
		note.type === 'white'
			? 'w-10 h-32 bg-white border border-black shadow-md hover:bg-gray-100 active:bg-gray-300'
			: `w-8 h-24 bg-black border border-black shadow-md hover:bg-gray-700 active:bg-gray-600 ${note.marginRight}`;

	return (
		<div
			onClick={() => playNote(note.frequency)}
			className={`${keyClass} inline-block`}></div>
	);
};

export default Key;
