export const checkIfImageExists = (url: string) => {
  if (url.trim() === '') return false;

  const img = new Image();
  img.src = url;
  
  if (img.complete) {
    return true;
  } else {
    img.onload = () => {
      return true;
    };
    
    img.onerror = () => {
      return false;
    };
  }
}