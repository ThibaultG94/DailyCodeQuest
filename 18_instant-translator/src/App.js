import React, { useEffect, useState } from 'react';
import { useTranslateTextApi } from './translateTextApi';
import { useDebounce } from './useDebounce';

const App = () => {
	const translateTextApi = useTranslateTextApi();
	const [textToTranslate, setTextToTranslate] = useState('');
	const [translatedText, setTranslatedText] = useState('');
	const [originLangage, setOriginLangage] = useState('');
	const [translatedLangage, setTranslatedLangage] = useState('');

	const debouncedText = useDebounce(textToTranslate, 500);

	useEffect(() => {
		const translateText = async () => {
			if (debouncedText) {
				const result = await translateTextApi(
					textToTranslate,
					translatedLangage,
					originLangage
				);
				setTranslatedText(result);
			}

			if (!debouncedText) {
				setTranslatedText('');
			}
		};

		translateText();
	}, [debouncedText, translatedLangage, originLangage]);

	return (
		<div className="min-h-screen flex flex-col justify-center items-center min-w-screen">
			<div className="grid grid-cols-2 gap-4 mb-4">
				<select
					className="p-2 rounded-md border border-gray-300"
					name="originLangage"
					onChange={(e) => setOriginLangage(e.target.value)}
					id="originLangage">
					<option value="">
						-- Sélectionner le langage du texte à traduire --
					</option>
					<option value="en">Anglais</option>
					<option value="fr">Français</option>
				</select>
				<select
					className="p-2 rounded-md border border-gray-300"
					name="translatedLangage"
					id="translatedLangage"
					onChange={(e) => setTranslatedLangage(e.target.value)}>
					<option value="">
						-- Sélectionner le langage du texte traduit --
					</option>
					<option value="en">Anglais</option>
					<option value="fr">Français</option>
				</select>
				<textarea
					className="border p-2 rounded-md resize-none col-span-2 w-full"
					name="text"
					id="text"
					cols="30"
					placeholder="Entrer le texte à traduire"
					onChange={(e) => setTextToTranslate(e.target.value)}
					value={textToTranslate}
					rows="10"></textarea>
				<textarea
					className="border p-2 rounded-md resize-none col-span-2 w-full"
					name="text"
					id="text"
					cols="30"
					onChange={(e) => setTranslatedText(e.target.value)}
					value={translatedText}
					rows="10"></textarea>
			</div>
		</div>
	);
};

export default App;
