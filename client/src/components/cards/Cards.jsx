import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import './Cards.css';

export const Cards = ({ pokemons }) => {
	const [PokeRandomData, setPokeRandomData] = useState([
		'Pikachu ocupó el segundo lugar en la lista “The Best People of 1999” ',
		'Los entrenadores Pareja Joven usan Pokémon que se complementan entre ellos',
		'Las películas de Pokémon siempre se estrenan en julio ',
		'Pokémon tiene apoyo y aprobación por parte del Vaticano  ',
		'A diferencia del resto del mundo donde la franquicia es conocida como Pokémon, en Japón se llama Pocket Monsters (ポケットモンスター). ',
	]);
	const [indice, setIndice] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setIndice((indice + 1) % PokeRandomData.length);
		}, 10000);

		return () => clearInterval(intervalId);
	}, [indice, PokeRandomData.length]);
	return (
		<>
			<div className="container-allCards">
				<div className="container-cards">
					{pokemons.map((pokemon) => {
						return <Card key={pokemon.id} pokemon={pokemon} />;
					})}
				</div>
				<div className="cards-sidebar">
					<img src="pokemon.png" alt="" />
					<div style={{ marginTop: '20%', textAlign: 'center' }}>
						<h1>¿Sabías qué?</h1>
						<p>{PokeRandomData[indice]}</p>
					</div>
				</div>
			</div>
		</>
	);
};
