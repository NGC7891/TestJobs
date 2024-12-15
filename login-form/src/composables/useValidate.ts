export const useValidate = () => {
  const validateLength = (
    name: string,
  ): { isValid: boolean; errorMessage?: string } => {
    if (name.length < 2) {
      return { isValid: false, errorMessage: 'Имя слишком короткое' }
    } else {
      return { isValid: true }
    }
  }

  return { validateLength }
}
