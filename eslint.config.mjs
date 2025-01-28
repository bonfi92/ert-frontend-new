
import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  {
    rules: {
      "semi": ["error", "never"],
      "indent": ["error", 2],
      "no-trailing-spaces": "error",
      "no-multiple-empty-lines": "error",
    },
  },
)
