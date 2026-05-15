import { Color } from "./Color"

export function Colors({ items }) {

    return (
        <ul>

            {items.map((item) => (

                <Color
                    key={item.id}
                    item={item}
                />

            ))}

        </ul>
    )
}