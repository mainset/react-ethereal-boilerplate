const getDocumentCookieValue = (cookieKeyName: string): string | undefined => {
  const match = (window.document.cookie || '').match(
    new RegExp('(^|;\\s*)' + cookieKeyName + '=([^;]*)'),
  );

  // NOTE: {match || []} used to return {undefined} instead of null
  const matchedKeyValue = (match || [])[2];

  return matchedKeyValue && decodeURIComponent(matchedKeyValue);
};

export { getDocumentCookieValue };
