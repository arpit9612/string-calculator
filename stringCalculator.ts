export function add(numberString: string): number {
    if (!numberString) return 0;
  
    let delimiter = /,|\n/;  // Default delimiters: comma or newline
    let customDelimiterMatch = numberString.match(/^\/\/(.)\n/);
  
    if (customDelimiterMatch) {
      // Custom delimiter found
      delimiter = new RegExp(customDelimiterMatch[1]);
      numberString = numberString.replace(/^\/\/.\n/, '');
    }
  
    const nums = numberString.split(delimiter).map(Number);
  
    const negatives = nums.filter(n => n < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return nums.reduce((sum, num) => sum + num, 0);
  }