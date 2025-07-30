import PropTypes from "prop-types";

function List({items = [], category = "Category"}) {
    // const fruits = [{ id: 1, name: "apple", calories: 95 },
    //                 { id: 2, name: "orange", calories: 45 },
    //                 { id: 3, name: "banana", calories: 105 },
    //                 { id: 4, name: "coconut", calories: 159 },
    //                 { id: 5, name: "pineapple", calories: 37 }];
    // fruits.sort((a,b) => a.name.localeCompare(b.name));
    // fruits.sort((a,b) => a.calories -b.calories);
    // const listItems = fruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);
    // if (props.items.length <= 0){
    //     return null;
    // }

    const listItems = items.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; <b>{fruit.calories}</b></li>);


    return (<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-items">{listItems}</ol>
            </> );
}

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number})),
}
console.log("List.propTypes is working"); // ✅ 확인용 로그
export default List