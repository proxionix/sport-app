/**
 * Save data to localStorage
 * @param {string} key - Storage key
 * @param {any} data - Data to store
 * @returns {boolean} Success status
 */
export const saveToStorage = (key, data) => {
  try {
    const serializedData = JSON.stringify(data);
    localStorage.setItem(key, serializedData);
    return true;
  } catch (error) {
    console.error('Error saving to localStorage:', error);
    return false;
  }
};

/**
 * Load data from localStorage
 * @param {string} key - Storage key
 * @param {any} defaultValue - Default value if key not found
 * @returns {any} Stored data or defaultValue
 */
export const loadFromStorage = (key, defaultValue = null) => {
  try {
    const serializedData = localStorage.getItem(key);
    if (serializedData === null) return defaultValue;
    return JSON.parse(serializedData);
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return defaultValue;
  }
};

/**
 * Remove data from localStorage
 * @param {string} key - Storage key
 * @returns {boolean} Success status
 */
export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key);
    return true;
  } catch (error) {
    console.error('Error removing from localStorage:', error);
    return false;
  }
};

/**
 * Clear all data from localStorage
 * @returns {boolean} Success status
 */
export const clearStorage = () => {
  try {
    localStorage.clear();
    return true;
  } catch (error) {
    console.error('Error clearing localStorage:', error);
    return false;
  }
};

/**
 * Check if a key exists in localStorage
 * @param {string} key - Storage key
 * @returns {boolean} True if key exists
 */
export const hasStorageItem = (key) => {
  return localStorage.getItem(key) !== null;
};

/**
 * Calculate storage usage
 * @returns {Object} Storage usage info
 */
export const getStorageUsage = () => {
  try {
    let totalSize = 0;
    const items = {};
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      const size = (key.length + value.length) * 2; // UTF-16 = 2 bytes per character
      
      items[key] = {
        size: size,
        sizeFormatted: formatSize(size)
      };
      
      totalSize += size;
    }
    
    return {
      totalSize,
      totalSizeFormatted: formatSize(totalSize),
      items
    };
  } catch (error) {
    console.error('Error calculating storage usage:', error);
    return {
      totalSize: 0,
      totalSizeFormatted: '0 B',
      items: {}
    };
  }
};

/**
 * Format size in bytes to human readable format
 * @param {number} bytes - Size in bytes
 * @returns {string} Formatted size
 */
const formatSize = (bytes) => {
  if (bytes === 0) return '0 B';
  
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
};
