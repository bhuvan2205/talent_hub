type Props = {
  result: {
    serverError?: string;
    fetchError?: string;
    validationErrors?: Record<string, string[] | undefined> | undefined;
  };
};

export default function ActionResponse({ result }: Props) {
  const { serverError, fetchError, validationErrors } = result || {};
  return (
    <>
      {serverError ? (
        <div className="my-2 text-red-500">
          <p>{serverError}</p>
        </div>
      ) : null}

      {fetchError ? (
        <div className="my-2 text-red-500">
          <p>{fetchError}</p>
        </div>
      ) : null}

      {validationErrors ? (
        <div className="my-2 text-red-500">
          {Object.keys(validationErrors).map((key) => (
            <p key={key}>{`${key}: ${
              validationErrors &&
              validationErrors[key as keyof typeof validationErrors]
            }`}</p>
          ))}
        </div>
      ) : null}
    </>
  );
}
