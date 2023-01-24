const parseDate = (date?: Date, format?: string) => {
  if (date === undefined) return "now";

  switch (format) {
    case "yyyy-mm":
      return date.toISOString().split("T")[0].slice(0, 7).replaceAll("-", ".");
    default:
      return date.toISOString().split("T")[0].replaceAll("-", ".");
  }
};

export { parseDate };
