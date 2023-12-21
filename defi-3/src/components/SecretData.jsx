import React, { useEffect, useState } from 'react';
import { getSecureData } from './getSecureData';

const SecretData = () => {
	const [secureData, setSecureData] = useState('');

	const getSecretData = async () => {
		const getData = await getSecureData();
		setSecureData(getData);
	};

	useEffect(() => {
		getSecretData();
	}, []);

	return <div>{secureData && <p>{secureData}</p>}</div>;
};

export default SecretData;
