export const downloadAsJson = (data: Record<any, any>, filePrefix?: string) => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(
    new Blob([JSON.stringify(data)], { type: "application/json" })
  );
  link.download = `${filePrefix ? `${filePrefix}_` : ""}${
    new Date().toISOString().replace(/[-:T]/g, "").split(".")[0]
  }.json`;

  link.click();
  URL.revokeObjectURL(link.href);
};

export const selectAndProcessJsonFile = <T>(callback: (result: T) => void) => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json";
  input.style.display = "none";

  input.onchange = (event: Event) => {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (!file || file.type !== "application/json") {
      console.error("Please select a valid JSON file.");

      return;
    }

    // Call callback on read file
    const reader = new FileReader();

    reader.onload = () => {
      try {
        callback(JSON.parse(reader.result as string) as T);
      } catch (error) {
        console.error("Error parsing JSON file:", error);
      }
    };

    reader.readAsText(file);
  };

  document.body.appendChild(input);
  input.click();
  input.remove();
};
