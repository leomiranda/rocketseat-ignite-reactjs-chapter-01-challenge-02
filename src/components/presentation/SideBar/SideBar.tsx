import { useEffect, useState } from 'react';
import { api } from '../../../services/api';
import { Button } from '../../commons/Button';

import './SideBar.scss';

import { GenreResponseProps, SideBarProps } from './SideBar.d';
import { Logo } from '../../../theme/Logo';

export function SideBar({ selectedGenreId, setSelectedGenreId }: SideBarProps) {
	// Complete aqui

	const [genres, setGenres] = useState<GenreResponseProps[]>([]);

	useEffect(() => {
		api.get<GenreResponseProps[]>('genres').then((response) => {
			setGenres(response.data);
		});
	}, []);

	function handleClickButton(id: number) {
		setSelectedGenreId(id);
	}

	return (
		<nav className='sidebar'>
			<Logo />

			<div className='buttons-container'>
				{genres.map((genre) => (
					<Button
						key={String(genre.id)}
						title={genre.title}
						iconName={genre.name}
						onClick={() => handleClickButton(genre.id)}
						selected={selectedGenreId === genre.id}
					/>
				))}
			</div>
		</nav>
	);
}
