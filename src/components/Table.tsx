interface Props {
    items: string[][]
}

function Table (props: Props) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th scope="col">id</th>
                <th scope="col">color</th>
                <th scope="col">value</th>
            </tr>
            </thead>
            <tbody>
            {props.items.map((item, index) => (
                    <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{item[0].toString()}</td>
                        <td>{item[1].toString()}</td>
                    </tr>
                )
            )
            }
            </tbody>
        </table>
    )
}

export default Table