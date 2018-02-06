import {
	SET_ROUTES,
	SET_PAGE,
	SET_OLDPAGE,
	NAVIGATION,
	SET_ANIMATING,
	SET_META,
} from './constants';

const InitialState = {
	routes: [],
	params: null,
	location: null,
	isAnimating: false,
	page: null,
	oldPage: null,
	meta: {},
};

// Updates an entity cache in response to any action with response.entities.
export const app = (state = InitialState, action) => {
	switch (action.type) {
	case SET_META: {
		// // Set default meta
		// if (action.isDefault) {
		// 	const meta = {};
		// 	meta.default_title = action.meta.title;
		// 	meta.default_description = action.meta.description;

		// 	// state = state.set('meta', fromJS(meta));
		// }

		// let stateMeta = state.get('meta');

		// const defaultTitle = stateMeta.default_title;
		// const defaultDescription = stateMeta.default_description;
		// const title = action.meta && action.meta.title ? action.meta.title : defaultTitle;
		// const description = action.meta && action.meta.description ? action.meta.description : defaultDescription;

		// stateMeta = stateMeta.set('title', title);
		// stateMeta = stateMeta.set('description', description);
		return {
			...state,
			meta: action.meta,
		};
	}

	case SET_ROUTES: {
		return Object.assign({}, state, {
			routes: action.routes,
		});
	}
	case NAVIGATION: {
		return Object.assign({}, state, {
			params: action.params,
			location: action.location,
		});
	}
	case SET_ANIMATING: {
		return {
			...state,
			isAnimating: action.isAnimating,
		};
	}
	case SET_PAGE: {
		return {
			...state,
			page: action.page,
		};
	}
	case SET_OLDPAGE: {
		return {
			...state,
			oldPage: action.oldPage,
		};
	}
	default: {
		return state;
	}
	}
};

export default app;
