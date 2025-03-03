export function getFields(data: { [key: string]: any }, FIELDS: string[]) {
  return Object.entries(data).reduce((accumlator: any, [key, value]: [string, any]) => {
    if (FIELDS.includes(key)) {
      accumlator[key] = value;
    }
    return accumlator;
  }, {});
}
