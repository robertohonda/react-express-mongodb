export const parseMessages = messages => {
  const parsedMessages = { }
  for(const [key, value] of Object.entries(messages) ) {
    const newKey = messages['_path'].join('.') + '.' + key
    if(key !== '_path') parsedMessages[newKey] = value
  }

  return parsedMessages
}