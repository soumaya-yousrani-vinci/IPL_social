export function isValidEmail(email: string): boolean {
  // pas d’espace
  if (email.includes(' ')) {
    return false;
  }

  // doit contenir un @
  const atIndex = email.indexOf('@');
  if (atIndex === -1) {
    return false;
  }

  // texte avant et après le @
  const beforeAt = email.substring(0, atIndex);
  const afterAt = email.substring(atIndex + 1);

  if (beforeAt.length === 0 || afterAt.length === 0) {
    return false;
  }

  // le domaine doit contenir un point
  const dotIndex = afterAt.indexOf('.');
  if (dotIndex === -1) {
    return false;
  }

  // le point ne peut pas être le dernier caractère
  if (dotIndex === afterAt.length - 1) {
    return false;
  }

  return true;
}