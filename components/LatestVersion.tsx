import { useState, useEffect } from 'react';

const LatestVersion = ({ packageName }) => {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    fetch(`https://registry.npmjs.org/${packageName}/latest`)
      .then((response) => response.json())
      .then((data) => setVersion(data.version));
  }, [packageName]);

  return (
    <div>
      <b>Latest version : {version}</b>
    </div>
  );
};

export default LatestVersion;