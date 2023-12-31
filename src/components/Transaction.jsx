const Transaction = ({transaction}) => {
  // Get sign
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <div>
      <li className="minus">
        {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  );
}
export default Transaction