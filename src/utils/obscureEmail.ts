export function obscureEmail(email: string): string {
  // Split the email address into local part and domain
  const [localPart, domain] = email.split('@');

  // Get the first two characters of the local part
  const firstTwoChars = localPart.slice(0, 2);

  // Replace the rest of the local part with asterisks
  const obscuredLocalPart = `${firstTwoChars}${'*'.repeat(localPart.length - 2)}`;

  // Combine the obscured local part and the domain
  const obscuredEmail = `${obscuredLocalPart}@${domain}`;

  return obscuredEmail;
}
