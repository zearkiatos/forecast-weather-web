import React from "react";
import ErrorBoundary from ".";

export default {
  title: "ErrorBoundary",
  component: ErrorBoundary,
};

const ComponentWithoutError = () => <h1>Without Error</h1>;

const prop = undefined;
const ComponentWithError = () => <h1>{prop.hello}</h1>;


export const ErrorBoundaryExample = () => (
  <ErrorBoundary greet="Hello" />
);

export const ErrorBoundaryWithErrorExample = () => (
  <ErrorBoundary>
    <ComponentWithError />
  </ErrorBoundary>
);

export const ErrorBoundaryWithoutError = () => (
  <ErrorBoundary>
    <ComponentWithoutError />
  </ErrorBoundary>
);
