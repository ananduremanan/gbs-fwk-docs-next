import { useState, useEffect } from 'react';
import Image from 'next/image';

const LatestVersion = ({ packageName }) => {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    fetch(`https://registry.npmjs.org/${packageName}/latest`)
      .then((response) => response.json())
      .then((data) => setVersion(data.version));
  }, [packageName]);

  return (
    <div style={{display: "flex"}}>
      <b>Latest version : {version}</b>
      {/* <Image
        src="https://raw.githubusercontent.com/ananduremanan/Demo/main/fireworks.gif"
        width={30}
        height={30}
        alt="Picture of the author"
      /> */}
    </div>
  );
};

export default LatestVersion;
