import { useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function Photos() {
  const { vanData } = useOutletContext();
  const [on, setOn] = useState(false);

  return (
    <>
      {vanData && (
        <img
          onClick={() => setOn((on) => !on)}
          className="van-detail-nav-img"
          src={vanData.imageUrl}
          alt="Picture of the van"
        />
      )}

      {on && (
        <div className="overlay" onClick={() => setOn((on) => !on)}>
          <img
            className="overlay-img"
            src={vanData.imageUrl}
            alt="Picture of the van"
          />
        </div>
      )}
    </>
  );
}
