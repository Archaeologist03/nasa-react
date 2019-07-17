// Returns jpg or png imgage url
// If no jpg/png url exist, just return first url

// #IGNORE = Used before assignable TS err

export default (imgUrls: string[]): string => {
  let foundJpg: string;
  imgUrls.forEach((url) => {
    if (url.endsWith('.jpg') || url.endsWith('.png')) {
      foundJpg = url;
    }
  });
  // @ts-ignore
  return foundJpg ? foundJpg : imgUrls[0];
};
