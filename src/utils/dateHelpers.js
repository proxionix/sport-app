import { format, isValid, parseISO, addDays, differenceInDays } from 'date-fns';
import { fr } from 'date-fns/locale';

/**
 * Format a date to a readable string
 * @param {string|Date} date - The date to format
 * @param {string} formatString - Format string (date-fns)
 * @returns {string} Formatted date string
 */
export const formatDate = (date, formatString = 'dd MMMM yyyy') => {
  if (!date) return '';
  
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  
  if (!isValid(parsedDate)) {
    console.error('Invalid date provided to formatDate:', date);
    return '';
  }
  
  return format(parsedDate, formatString, { locale: fr });
};

/**
 * Format a date range to a readable string
 * @param {Object} dateRange - Object containing start and end dates
 * @param {string} formatString - Format string for individual dates
 * @returns {string} Formatted date range string
 */
export const formatDateRange = (dateRange, formatString = 'dd MMMM') => {
  if (!dateRange || !dateRange.start || !dateRange.end) return '';
  
  const startDate = parseISO(dateRange.start);
  const endDate = parseISO(dateRange.end);
  
  if (!isValid(startDate) || !isValid(endDate)) {
    console.error('Invalid date range provided:', dateRange);
    return '';
  }
  
  return `Du ${format(startDate, formatString, { locale: fr })} au ${format(endDate, formatString + ' yyyy', { locale: fr })}`;
};

/**
 * Get the day date from week start date and day index
 * @param {string|Date} weekStartDate - The week start date
 * @param {number} dayIndex - Index of the day in the week (0 = Monday)
 * @returns {Date} Date object for the specific day
 */
export const getDayDate = (weekStartDate, dayIndex) => {
  if (!weekStartDate) return null;
  
  const startDate = typeof weekStartDate === 'string' ? parseISO(weekStartDate) : weekStartDate;
  
  if (!isValid(startDate)) {
    console.error('Invalid week start date:', weekStartDate);
    return null;
  }
  
  return addDays(startDate, dayIndex);
};

/**
 * Calculate days remaining until target date
 * @param {string|Date} targetDate - The target date
 * @returns {number} Number of days remaining
 */
export const calculateDaysRemaining = (targetDate) => {
  if (!targetDate) return 0;
  
  const target = typeof targetDate === 'string' ? parseISO(targetDate) : targetDate;
  const today = new Date();
  
  if (!isValid(target)) {
    console.error('Invalid target date:', targetDate);
    return 0;
  }
  
  const remaining = differenceInDays(target, today);
  return remaining > 0 ? remaining : 0;
};

/**
 * Check if date is today
 * @param {string|Date} date - The date to check
 * @returns {boolean} True if date is today
 */
export const isToday = (date) => {
  if (!date) return false;
  
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  const today = new Date();
  
  if (!isValid(parsedDate)) {
    console.error('Invalid date provided to isToday:', date);
    return false;
  }
  
  return format(parsedDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');
};

/**
 * Get the current week index based on current date and program weeks
 * @param {Array} weeks - Array of week objects with dateRange
 * @returns {number} Index of the current week or 0 if not found
 */
export const getCurrentWeekIndex = (weeks) => {
  if (!weeks || !Array.isArray(weeks) || weeks.length === 0) return 0;
  
  const today = new Date();
  
  for (let i = 0; i < weeks.length; i++) {
    const week = weeks[i];
    if (!week.dateRange || !week.dateRange.start || !week.dateRange.end) continue;
    
    const startDate = parseISO(week.dateRange.start);
    const endDate = parseISO(week.dateRange.end);
    
    if (today >= startDate && today <= endDate) {
      return i;
    }
  }
  
  // If today is before the program starts, return 0
  const firstWeekStart = parseISO(weeks[0].dateRange.start);
  if (today < firstWeekStart) return 0;
  
  // If today is after the program ends, return the last week
  return weeks.length - 1;
};
