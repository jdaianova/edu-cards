export default function insertSoftHyphens(text, maxLength) {
    if (!text) return "";
  
    const addHyphens = word => {
      let parts = [];
      for (let i = 0; i < word.length; i += maxLength) {
        parts.push(word.substring(i, i + maxLength));
      }
      return parts.join('\u00AD');
    };
  
    return text.split(' ').map(word => {
      return word.length > maxLength ? addHyphens(word) : word;
    }).join(' ');
  }
  