const fs = require("fs").promises;
const path = require("path");

/**
 * Combines multiple OpenAPI JSON files into a single file
 * @param {string[]} paths - Array of file paths to OpenAPI JSON files
 * @returns {Promise<void>}
 */
async function combineOpenApiFiles(paths) {
  try {
    // Base OpenAPI structure
    const combinedApi = {
      openapi: "3.0.1",
      info: {
        title: "Combined OpenAPI Specification",
        version: "1.0.0",
      },
      paths: {},
      components: {
        schemas: {},
        responses: {},
        securitySchemes: {},
      },
    };

    // Process each file
    for (const filePath of paths) {
      console.log(`Processing ${filePath}...`);

      // Read and parse JSON file
      const fileContent = await fs.readFile(filePath, "utf8");
      const apiSpec = JSON.parse(fileContent);

      // Merge paths
      combinedApi.paths = {
        ...combinedApi.paths,
        ...apiSpec.paths,
      };

      // Merge components if they exist
      if (apiSpec.components) {
        // Merge schemas
        if (apiSpec.components.schemas) {
          combinedApi.components.schemas = {
            ...combinedApi.components.schemas,
            ...apiSpec.components.schemas,
          };
        }

        // Merge responses
        if (apiSpec.components.responses) {
          combinedApi.components.responses = {
            ...combinedApi.components.responses,
            ...apiSpec.components.responses,
          };
        }

        // Merge security schemes
        if (apiSpec.components.securitySchemes) {
          combinedApi.components.securitySchemes = {
            ...combinedApi.components.securitySchemes,
            ...apiSpec.components.securitySchemes,
          };
        }
      }
    }

    // Write combined API to file
    await fs.writeFile(
      "openapi.json",
      JSON.stringify(combinedApi, null, 2),
      "utf8"
    );

    console.log("Successfully created openapi.json");
  } catch (error) {
    console.error("Error combining OpenAPI files:", error);
    throw error;
  }
}

// Example usage
async function processJsonFiles() {
  const filePaths = [
    path.join(__dirname, "eigen-reference/avs/_openapi.json"),
    path.join(__dirname, "eigen-reference/metrics/_openapi.json"),
    path.join(__dirname, "eigen-reference/operators/_openapi.json"),
    path.join(__dirname, "eigen-reference/pods/_openapi.json"),
    path.join(__dirname, "eigen-reference/stakers/_openapi.json"),
    path.join(__dirname, "eigen-reference/withdrawals-deposits/_openapi.json"),
  ];

  try {
    await combineOpenApiFiles(filePaths);
  } catch (error) {
    console.error("Failed to combine OpenAPI files:", error);
    process.exit(1);
  }
}

processJsonFiles();
