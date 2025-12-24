module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			// 尝试只保留这一个插件，看 Reanimated 是否能内部对齐
			'react-native-reanimated/plugin',
		],
	};
};