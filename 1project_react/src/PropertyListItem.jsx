import PropTypes from "prop-types";

// export default function PropertyListItem({i}){
//      return(
//         <div >
//           <h2>{i.name}</h2>
//           <h3>{i.price}</h3>
//           <h4>{i.rating}</h4>
//         </div>
//      );
// }
export default function PropertyListItem({ name, rating, price }) {
  const star = "⭐️";
  return (
    <div className="PropertyListItem">
      <h2>{name}</h2>
      <h3>${price} a night</h3>
      <h4>
        {rating}
        {star}
      </h4>
    </div>
  );
}

PropertyListItem.PropTypes = {
  item: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.number,
};
