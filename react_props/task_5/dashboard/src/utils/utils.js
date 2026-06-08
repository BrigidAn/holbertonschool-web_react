export function getCurrentYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? 'Holberton School' : 'Holberton School main dashboard';
}

/* NEW FUNCTION */
export function getLatestNotification() {
  return "<strong>Urgent requirement</strong> - complete by EOD";
}