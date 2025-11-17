function List(){
    const fruits = [
        {id:1,name:"Apple",calories:95},
        {id:2,name:"Banana",calories:80},
        {id:3,name:"Coconut",calories:50}
    ];

    const listItems = fruits.map(fruits => <li key={fruits.id}>{fruits.name}: 
                                            {fruits.calories}
                                          </li>);

    return(<ul>{listItems}</ul>);
}

export default List