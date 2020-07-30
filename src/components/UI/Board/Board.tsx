import React from 'react'

const Board = (props: any) => {
    return (
        <div data-ts="Board">
            <div data-ts="Panel">
                {props.children}
            </div>
        </div>
    )
}

export default Board
