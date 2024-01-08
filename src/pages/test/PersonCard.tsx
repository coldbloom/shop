import React from 'react';

const PersonCard = ({person, index, people, setPeople, dragPerson, draggedOverPerson}) => {
    function handleSort() {
        console.log(`dragPerson = ${dragPerson.current}, draggedOverPerson = ${draggedOverPerson.current}`)
        const peopleClone = [...people]
        const temp = peopleClone[dragPerson.current]
        peopleClone[dragPerson.current] = peopleClone[draggedOverPerson.current]
        peopleClone[draggedOverPerson.current] = temp
        setPeople(peopleClone)
    }

    return (
        <div className='relative flex space-x-3 border rounded p-2 my-3 bg-gray-100'
             draggable={true}
             onDragStart={() => (dragPerson.current = index)}
             onDragEnter={() => (draggedOverPerson.current = index)}
             onDragEnd={handleSort}
             onDragOver={(e) => e.preventDefault()}
        >
            <p>{person.name}</p>
        </div>
    );
};

export default PersonCard;