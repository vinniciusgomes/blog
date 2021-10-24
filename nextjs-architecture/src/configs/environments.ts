const getEnvironmentVariable = (environmentVariable: string): string => {
  const unvalidatedEnvironmentVariable = process.env[environmentVariable];
  if (!unvalidatedEnvironmentVariable) {
    throw new Error(
      `Couldn't find environment variable: ${environmentVariable}`,
    );
  } else {
    return unvalidatedEnvironmentVariable;
  }
};

export const env = {
  apiUrl: getEnvironmentVariable('REACT_APP_API_URL'),
};
