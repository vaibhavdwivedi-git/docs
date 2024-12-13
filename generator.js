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
        title: "OpenAPI Rescan Explorer",
        description: "Api reference for the Rescan Explorer",
        license: {
          name: "MIT",
        },
        version: "1.0.0",
      },
      servers: [
        {
          url: "https://api.blockflow.network/rest",
        },
      ],
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
    path.join(__dirname, "component_openapi.json"),
    path.join(__dirname, "eigen-reference/avs/_openapi.json"),
    path.join(__dirname, "eigen-reference/metrics/_openapi.json"),
    path.join(__dirname, "eigen-reference/operators/_openapi.json"),
    path.join(__dirname, "eigen-reference/pods/_openapi.json"),
    path.join(__dirname, "eigen-reference/stakers/_openapi.json"),
    path.join(__dirname, "eigen-reference/withdrawals-deposits/_openapi.json"),
    path.join(__dirname, "eigen-reference/rewards/_openapi.json"),
    path.join(__dirname, "eigenda-reference/batches/_openapi.json"),
    path.join(__dirname, "eigenda-reference/operators/_openapi.json"),
    path.join(__dirname, "eigenda-reference/quorums/_openapi.json"),
    path.join(__dirname, "component_openapi.json"),
    path.join(__dirname, "eigenlayer-reference/avs/_openapi.json"),
    path.join(__dirname, "eigenlayer-reference/distributionRoot/_openapi.json"),
    path.join(__dirname, "eigenlayer-reference/operator/_openapi.json"),
    path.join(__dirname, "eigenlayer-reference/pod/_openapi.json"),
    path.join(__dirname, "eigenlayer-reference/reward/_openapi.json"),
    path.join(__dirname, "eigenlayer-reference/staker/_openapi.json"),
    path.join(__dirname, "eigenlayer-reference/strategy/_openapi.json"),
    path.join(__dirname, "documentation/tracker/_openapi.json"),
    path.join(__dirname, "eigenlayer-reference/withdrawal/_openapi.json"),
  ];

  try {
    await combineOpenApiFiles(filePaths);
  } catch (error) {
    console.error("Failed to combine OpenAPI files:", error);
    process.exit(1);
  }
}

processJsonFiles();
