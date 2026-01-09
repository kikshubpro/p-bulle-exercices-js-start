// @ts-check

/**
 * Create an appointment
 *
 * @param {number} days
 * @param {number} [now] (ms since the epoch, or undefined)
 *
 * @returns {Date} the appointment
 */
export function createAppointment(days, now = undefined) {
  let date = new Date();

  if (now != undefined) {
    date = new Date(now)
  }

  date.setDate(date.getDate() + days)

  return date
}

/**
 * Generate the appointment timestamp
 *
 * @param {Date} appointmentDate
 *
 * @returns {string} timestamp
 */
export function getAppointmentTimestamp(appointmentDate) {
  appointmentDate.setDate(appointmentDate.getDate())

  let appointmentTimestamp = appointmentDate.toISOString()

  return appointmentTimestamp
}

/**
 * Get details of an appointment
 *
 * @param {string} timestamp (ISO 8601)
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function getAppointmentDetails(timestamp) {
  let timestampDate = new Date(timestamp)

  let year = timestampDate.getFullYear()
  let month = timestampDate.getMonth()
  let date = timestampDate.getDate()
  let hour = timestampDate.getHours()
  let minute = timestampDate.getMinutes()

  return { year: year, month: month, date: date, hour: hour, minute: minute }
}

/**
 * Update an appointment with given options
 *
 * @param {string} timestamp (ISO 8601)
 * @param {Partial<Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>>} options
 *
 * @returns {Record<'year' | 'month' | 'date' | 'hour' | 'minute', number>} the appointment details
 */
export function updateAppointment(timestamp, options) {
  let timestampDate = new Date(timestamp)

  let year2 = options.year
  let month2 = options.month
  let date2 = options.date
  let hour2 = options.hour
  let minute2 = options.minute

  if (year2 !== undefined) {
    timestampDate.setFullYear(year2)
  }
  if (month2 !== undefined) {
    timestampDate.setMonth(month2)
  }
  if (date2 !== undefined) {
    timestampDate.setDate(date2)
  }
  if (hour2 !== undefined) {
    timestampDate.setHours(hour2)
  }
  if (minute2 !== undefined) {
    timestampDate.setMinutes(minute2)
  }

  return {
    year: timestampDate.getFullYear(),
    month: timestampDate.getMonth(),
    date: timestampDate.getDate(),
    hour: timestampDate.getHours(),
    minute: timestampDate.getMinutes()
  }
}

/**
 * Get available time in seconds (rounded) between two appointments
 *
 * @param {string} timestampA (ISO 8601)
 * @param {string} timestampB (ISO 8601)
 *
 * @returns {number} amount of seconds (rounded)
 */
export function timeBetween(timestampA, timestampB) {
  let msA = Date.parse(timestampA)
  let msB = Date.parse(timestampB)

  return Math.round((msB - msA) / 1000)
}

/**
 * Get available times between two appointment
 *
 * @param {string} appointmentTimestamp (ISO 8601)
 * @param {string} currentTimestamp (ISO 8601)
 */
export function isValid(appointmentTimestamp, currentTimestamp) {
  return new Date(currentTimestamp) < new Date(appointmentTimestamp)
}
