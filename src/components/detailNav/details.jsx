import { useOutletContext } from 'react-router-dom';

export default function Details() {
  const { vanData } = useOutletContext();
  console.log(vanData);

  return (
    <>
      {vanData && (
        <div className="details-nav">
          <p>
            <strong>Name: </strong>
            {vanData.name}
          </p>
          <p>
            <strong>Category: </strong>
            {vanData.type}
          </p>
          <p>
            <strong>Category: </strong>
            {vanData.description}
          </p>
          <p>
            <strong>Visibility: </strong>
            Public
          </p>
        </div>
      )}
    </>
  );
}
