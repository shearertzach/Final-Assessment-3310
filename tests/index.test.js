// tests
const { formatPhone } = require('../dist/index')


test('should be formatted', () => {
  const phoneNumber = '8482939293'
  const formatted = formatPhone(phoneNumber)

  expect(formatted).toBe('(848) 293-9293')
})

test('should be formatted again', () => {
  const phoneNumber = '1234567890'
  const formatted = formatPhone(phoneNumber)

  expect(formatted).toBe('(123) 456-7890')
})

test('should not be formatted', () => {
  const phoneNumber = '8381938'
  const formatted = formatPhone(phoneNumber)

  expect(formatted).toBe('Could not format phone number. Please enter a correct phone number.')
})