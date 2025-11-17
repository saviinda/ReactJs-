function List(){
    const words = ["A","B","C","D","E"];

    const listItems = words.map(words => <li>{words}</li>);

    return(<ul>{listItems}</ul>);
}

export default List