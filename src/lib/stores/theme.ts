import { Store } from 'tauri-plugin-store-api';
import type { Theme } from 'src/types';
import { writable } from 'svelte/store';

const store = new Store('.settings.dat');

const createThemeStore = () => {
	const { subscribe, update, set } = writable('');

	return {
		subscribe,
		toggleTheme: () => {
			update(currentTheme => {
				const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
				store.set('theme', newTheme);
				return newTheme;
			});
		},
		load: async () => {
			let storedTheme = (await store.get('theme')) as Theme | null;
			if (!storedTheme) {
				storedTheme = 'dark';
				store.set('theme', storedTheme);
			}
			set(storedTheme);
		}
	};
};
export const theme = createThemeStore();

// store.get('theme').then(storedTheme => {
// 	if (!storedTheme) {
// 		store.set('theme', 'dark');
// 		theme.set('dark');
// 	} else {
// 		theme.set(storedTheme as Theme);
// 	}
// });

// export const switchTheme = () => {
// 	theme.update(currentTheme => {
// 		const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
// 		store.set('theme', nextTheme);
// 		return nextTheme;
// 	});
// };

// store
// 	.get('theme')
// 	.then(async theme => console.log('Current theme: ', await theme));
