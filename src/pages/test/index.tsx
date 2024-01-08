import React from 'react';
import PersonCard from "@/pages/test/PersonCard";

const Test = () => {

    const [people, setPeople] = React.useState([
        { id: 1, name: 'John Doe', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 2, name: 'Max Walters', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 3, name: 'Adam Smith', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { id: 4, name: 'Tom Johnson', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }
    ])

    // Использование хука useRef для хранения index в этом контексте связано с тем, что при изменении значения обычной переменной компонент не будет перерендериваться, в отличие от значения, которое хранится в ref. В данном случае, когда происходит событие перетаскивания, мы хотим, чтобы значения dragPerson.current и draggedOverPerson.current обновлялись без вызова повторного рендера компонента.
    const dragPerson = React.useRef<number>(0)
    const draggedOverPerson = React.useRef<number>(0)

    React.useEffect(() => {
        console.log(people)
    }, [people])

    return (
        <div className='flex min-h-screen flex-col items-center space-y-4'>
            <h1 className='text-xl font-bold'>Test</h1>
            <div>
                {people.map((person, index) => (
                    <PersonCard
                        person={person}
                        index={index}
                        people={people}
                        setPeople={setPeople}
                        dragPerson={dragPerson}
                        draggedOverPerson={draggedOverPerson}
                    />
                ))}
            </div>
        </div>
    );
};

export default Test;

