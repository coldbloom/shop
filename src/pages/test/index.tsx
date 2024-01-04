import React from 'react';

const Test = () => {

    const [people, setPeople] = React.useState([
        { id: 1, name: 'John Doe', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 2, name: 'Max Walters', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 3, name: 'Adam Smith', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 4, name: 'Tom Johnson', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ])

    React.useEffect(() => {
        console.log(people)
    }, [people])

    // Использование хука useRef для хранения index в этом контексте связано с тем, что при изменении значения обычной переменной компонент не будет перерендериваться, в отличие от значения, которое хранится в ref. В данном случае, когда происходит событие перетаскивания, мы хотим, чтобы значения dragPerson.current и draggedOverPerson.current обновлялись без вызова повторного рендера компонента.
    const dragPerson = React.useRef<number>(0)
    const draggedOverPerson = React.useRef<number>(0)

    function handleSort() {
        const peopleClone = [...people]
        const temp = peopleClone[dragPerson.current]
        peopleClone[dragPerson.current] = peopleClone[draggedOverPerson.current]
        peopleClone[draggedOverPerson.current] = temp
        setPeople(peopleClone)
    }

    return (
        <div className='flex min-h-screen flex-col items-center space-y-4'>
            <h1 className='text-xl font-bold'>Test</h1>
            <div>
                {people.map((person, index) => (
                    <div className='relative flex space-x-3 border rounded p-2 my-3 bg-gray-100'
                         draggable={true}
                         onDragStart={() => (dragPerson.current = index)}
                         onDragEnter={() => (draggedOverPerson.current = index)}
                         onDragEnd={handleSort}
                         onDragOver={(e) => e.preventDefault()}
                    >
                        <p>{person.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Test;

