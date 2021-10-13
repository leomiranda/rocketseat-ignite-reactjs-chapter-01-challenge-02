import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	title: string;
	iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
	selected: boolean;
}
