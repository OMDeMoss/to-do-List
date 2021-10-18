const lists = [];

function todoList(){
    for ( let i = 0; i < locallist.length; i++ ) {
        let list = localList[i];
        let listObj = new List(localList[i].todoList)

        for ( let j = 0; j < list.items.length; j++ ) {
			// inside our items in the array
			// call our addItem function 
			listObj.addItem(list.items[j].value, list.items[j].timeStamp, list.items[j].completed );
		}

		lists.push( listObj );
	}
}