class VeliteWebpackPlugin {
	static started = false;
	apply(/** @type {import('webpack').Compiler} */ compiler) {
		compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
			if (VeliteWebpackPlugin.started) return;
			VeliteWebpackPlugin.started = true;
			const dev = compiler.options.mode === "development";
			const { build } = await import("velite");
			await build({ watch: dev, clean: !dev });
		});
	}
}

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	experimental: {
		optimizePackageImports: ["@chakra-ui/react"],
		externalDir: true,
	},
	images: { unoptimized: true },
	webpack: (config) => {
		config.plugins.push(new VeliteWebpackPlugin());
		return config;
	},
};

export default nextConfig;
