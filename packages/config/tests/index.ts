import replaceImport from './vite-plugins/replaceImports';
import { resolve } from 'path';

export type AvailableFrameworks = 'vue' | 'react';
export const extractImports = (framework: AvailableFrameworks) =>
  new RegExp(`// import ${framework}(.*?)// end import ${framework}`, 'gs');

export const changeImports = (framework: AvailableFrameworks) =>
  new RegExp(`^import (.*?) from '\@barnstormer\/${framework}'+?;`, 'gm');

export const dynamicImports = (framework: AvailableFrameworks) => new RegExp(`@barnstormer/${framework}/index`, 'gm');

export const removeCode = (framework: AvailableFrameworks) => new RegExp(`// ${framework}.*?// end ${framework}`, 'gs');

export const changeFrameworkPathInImports = (framework: AvailableFrameworks) =>
  new RegExp(`(import.*?from.*?)(\/${framework}\/)(.*?;)`, 'gs');


export const copiedBsuiPath = (framework: AvailableFrameworks, dirname: string) => resolve(dirname, 'src', 'components', 'barnstormerui', framework, 'index.ts')
export const relativeBsuiPath = (framework: AvailableFrameworks, dirname: string) => resolve(dirname, '..', '..', '..', 'packages', 'barnstormerui', 'frameworks', framework, 'index.ts');

export { replaceImport }
