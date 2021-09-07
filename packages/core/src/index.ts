import type { AppConfig } from './app/AppOptions.js';
import type { ThemeConfig } from './shared/index.js';

export * from './app/App.js';
export * from './app/AppOptions.js';
export * from './app/plugin/ClientPlugin.js';
export * from './app/plugin/Plugin.js';
export * from './shared/index.js';

export function defineConfig<Theme extends ThemeConfig = ThemeConfig>(
  config: AppConfig<Theme>
): AppConfig<Theme> {
  return config;
}

export { VM_PREFIX } from './app/vite/dev/alias.js';
