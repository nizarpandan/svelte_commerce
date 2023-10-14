import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return {
    title: params.slug,
    content: 'Welcome to our blog. Lorem ipsum dolor sit amet...',
  };

	throw error(404, 'Not found');
};