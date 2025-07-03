import { useOutletContext } from 'react-router-dom';

export default function Pricing() {
  const { vanData } = useOutletContext();

  return (
    <>
      {vanData && (
        <div className="priced">
          <p>
            <strong>${vanData.price}.00</strong>/day
          </p>
        </div>
      )}
    </>
  );
}
