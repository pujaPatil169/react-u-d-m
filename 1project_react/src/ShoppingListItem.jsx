export default function ShoppingListItem({item,qty,isPurchased}){
    const styles = {color:isPurchased ? 'grey' : 'red',
        textDecoration:isPurchased ? 'line-through' : 'none'}   // 'none' should be a string

    return(
        <li style={styles}>{item}---{qty}</li>
    );

}