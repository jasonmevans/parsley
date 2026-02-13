export default {
  '*.js': ['yarn lint:fix'],
  '*.ts': ['yarn lint:fix', () => 'yarn typecheck --project tsconfig.json'],
};
