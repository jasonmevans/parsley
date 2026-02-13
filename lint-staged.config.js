export default {
  '*.js': ['eslint --cache --fix'],
  '*.ts': [
    'eslint --cache --fix',
    () => 'yarn typecheck --project tsconfig.json',
  ],
};
