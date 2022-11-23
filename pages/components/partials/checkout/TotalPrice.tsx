export default function TotalPrice({ totalPrice }) {
  return (
    <>
      <div className="flex justify-between items-center mt-5 text-mainBlackGray text-xs md:text-base sm:text-sm">
        <p className="md:mr-32 mr-16 text-xs">(price without VAT)</p>
        <p className="font-bold">{((totalPrice / 100) * 80).toFixed(2)} €</p>
      </div>
      <div className="flex justify-between items-center my-5 text-mainBlackGray text-xs md:text-base sm:text-sm">
        <p className="md:mr-32 mr-16 font-semibold">TOTAL PRICE:</p>
        <p className="sm:text-2xl text-lg font-bold">{totalPrice} €</p>
      </div>
    </>
  );
}
